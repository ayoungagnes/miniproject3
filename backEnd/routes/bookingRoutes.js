let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.bookingController.getBookings(res);
});

router.post("/create", (req, res) => {
  Controllers.bookingController.createBooking(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.bookingController.updateBooking(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.bookingController.deleteBooking(req, res);
});


module.exports = router;
