const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const roomSchema = new Schema({
title: { type: String, trim: true, required: true, unique: true },
imgURL: { type: String, trim: true, required: true,},
theme: { type: String },
createdAt: { type: Date, default: Date.now },
updatedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model("room", roomSchema);

