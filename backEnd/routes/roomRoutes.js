let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get('/', (req, res) => {
Controllers.roomController.getRooms(res);
})
module.exports = router;