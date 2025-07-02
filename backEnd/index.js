const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});

let customerRoutes = require('./routes/customerRoutes');
app.use('/api/customers', customerRoutes);

let roomRoutes = require('./routes/roomRoutes');
app.use('/api/rooms', roomRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
