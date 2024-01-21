from flojoy import flojoy, DataContainer, NIDAQmxDevice, DeviceConnectionManager
import nidaqmx
from typing import Optional, Literal


@flojoy(deps={"nidaqmx": "0.9.0"})
def CREATE_TASK_ANALOG_INPUT_CURRENT(
    cDAQ_start_channel: NIDAQmxDevice,
    cDAQ_end_channel: NIDAQmxDevice,
    min_val: float = -0.01,
    max_val: float = 0.01,
    units: Literal["AMPS"] = "AMPS",
    default: Optional[DataContainer] = None,
) -> Optional[DataContainer]:
    """Create and prepare a task to interact with an analog input current channel.

    Compatible with National Instruments compactDAQ devices. The device must have a current input channel.
    Tested with a NI-9203 module.

    Parameters
    ----------
    cDAQ_start_channel : NIDAQmxDevice
        The device and channel to read from. Flojoy will register this address as a connection.
    cDAQ_end_channel : NIDAQmxDevice
        To read from only one channel, set this to the same as cDAQ_start_channel. To read from multiple channels, set this to the last channel you want to read from.
    min_val : float
        Specifies in **units** the minimum value you expect to measure.
    max_val : float
        Specifies in **units** the maximum value you expect to measure.
    units : Literal
        The units to use to return current measurements.

    Returns
    -------
    Optional[DataContainer]
        None
    """

    name, address = cDAQ_start_channel.get_id().split('/')
    if cDAQ_end_channel:
        _, address_end = cDAQ_end_channel.get_id().split('/')
        address = f"{address}:{address_end[2:]}"
    physical_channels = f"{name}/{address}"

    units = nidaqmx.constants.CurrentUnits.AMPS  # TODO: Support TEDS info associated with the channel and custom scale

    task = nidaqmx.Task()
    task.ai_channels.add_ai_current_chan(physical_channels, min_val=min_val, max_val=max_val, units=units)  # TODO: Add shunt resistor option
    DeviceConnectionManager.register_connection(cDAQ_start_channel, task, task.__exit__)

    return None
