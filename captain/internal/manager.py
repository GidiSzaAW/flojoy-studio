from subprocess import Popen
from fastapi import WebSocket
from rq.worker import Worker
import logging
from multiprocessing import Process

from captain.models.topology import Topology
from PYTHON.dao.redis_dao import RedisDao

class Manager(object):
    def __init__(self):
        self.ws = ConnectionManager()  # websocket manager
        self.running_topology: Topology | None = None
        self.redis_client = RedisDao() # TODO currently not needed, but very high probability to be needed in the future
        self.worker_processes : list[Process] = []

class ConnectionManager:
    def __init__(self):
        self.active_connections: list[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)
        print("active connections: ", len(self.active_connections))

    async def disconnect(self, websocket: WebSocket):
        print("disconnect")
        self.active_connections.remove(websocket)
        print("active connections: ", len(self.active_connections))

    # this method sends a message to all connected websockets
    async def broadcast(self, message: str):
        # print("broadcasting message: ", message, " to ", len(self.active_connections), " connections")
        for connection in self.active_connections:
            try:
                await connection.send_text(message)
            except RuntimeError:
                await self.disconnect(connection)
                logging.error("RuntimeError in broadcast")
