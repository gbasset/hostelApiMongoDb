import express from "express";
import { getTest, addRoom, getRooms, getRoomsById, updateRoom, deleteRoom } from '../controllers/roomControllers.js';
import { catchErrors } from '../helpers.js';
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello les mecs");
});
router.get("/test", (_, res) => {
    res.send({
        name: 'jean'
    });
});
router.post("/test", getTest);
router.post("/room", catchErrors(addRoom));
router.get("/room", catchErrors(getRooms));
router.get("/room/:id", catchErrors(getRoomsById));
router.patch("/room/:id", catchErrors(updateRoom));
router.delete("/room/:id", catchErrors(deleteRoom));

export default router;