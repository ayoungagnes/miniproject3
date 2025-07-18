let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.customerController.getCustomers(res);
});

router.post("/create", (req, res) => {
  Controllers.customerController.createCustomer(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.customerController.updateCustomer(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.customerController.deleteCustomer(req, res);
});


module.exports = router;
