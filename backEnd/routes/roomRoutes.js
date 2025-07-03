let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.roomController.getRooms(res);
});
router.post("/create", (req, res) => {
  Controllers.roomController.createRoom(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.roomController.updateRoom(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.roomController.deleteRoom(req, res);
});
module.exports = router;
