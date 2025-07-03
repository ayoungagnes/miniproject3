const axios = require("axios");

("use strict");
let Models = require("../models");
const getCustomers = (res) => {
  Models.Customer.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const createCustomer = async (req, res) => {
  let apidata = null;

  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    apidata = response.data.body;
  } catch {
    console.log("Error fetching external data");
    apidata = "No description available";
  }
  const customerData = {
    ...req,
    description: apidata,
  };

  new Models.Customer(customerData)
    .save()
    .then((req) => res.send({ result: 200, data: req }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateCustomer = (req, res) => {
  console.log(req.body);
  Models.Customer.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const deleteCustomer = (req, res) => {
  Models.Customer.findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
