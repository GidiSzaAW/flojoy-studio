from flojoy import flojoy, Stateful
import can
from typing import Optional, Literal


@flojoy()
def FILTER_CAN(
    message_id: int,
    messages: Stateful
) -> Stateful:
    """Filter a list of can messages

    Get a specific id message id from a list of messages

    Parameters
    ----------
    message_id: int
        the id of the messages to extract from the list of messages
    messages: Stateful
        Stateful connection with a list of can.Message

    Returns
    -------
    Stateful:
        Stateful object with only the messages with the `message_id`
    """

    messages: can.Message = messages.obj

    filtered = filter(lambda msg: msg.arbitration_id == message_id, messages)

    return Stateful(obj=filtered)
