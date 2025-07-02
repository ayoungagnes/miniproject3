let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get('/', (req, res) => {
Controllers.customerController.getCustomers(res);
})

router.post('/create', (req, res) => {
Controllers.customerController.createCustomer(req.body, res);
})
module.exports = router;