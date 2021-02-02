
import roomModel from '../models/roomModels.js'

export const getTest = (req, res) => {
    console.log(req.body);
    res.send(req.body);
}
export const addRoom = async (req, res) => {
    const room = new roomModel(req.body);
    await room.save()
    res.send(room);
    // try {
    //     await room.save()
    //     res.send(room);

    // } catch (err) {
    //     res.status(500).json({ err });
    // }
}

export const getRooms = async (req, res) => {
    const rooms = await roomModel.find({});
    res.send(rooms);
}
export const getRoomsById = async (req, res) => {
    const id = req.params.id;
    console.log("id", id);
    const room = await roomModel.find({ _id: id });
    res.send(room);
}
export const updateRoom = async (req, res) => {
    const room = await roomModel.findByIdAndUpdate(req.params.id, req.body);
    await room.save();
    res.send(room);
}
export const deleteRoom = async (req, res) => {
    const room = await roomModel.findByIdAndDelete(req.params.id);
    if (!room) {
        res.status(404).send("Pas de chambre trouvée");
    } else {
        res.status(200).send();
    }
}