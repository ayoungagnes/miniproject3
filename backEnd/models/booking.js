const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookingSchema = new Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'customer' },
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'room' },
  bookingDateTime:{ type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("booking", bookingSchema);
