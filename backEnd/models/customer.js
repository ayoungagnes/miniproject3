const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const customerSchema = new Schema({
  firstName: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true, unique: true },
  description: { type: String},
  phoneNumber: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("customer", customerSchema);
