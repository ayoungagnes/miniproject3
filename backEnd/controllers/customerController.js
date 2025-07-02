"use strict";
let Models = require("../models"); 
const getCustomers = (res) => {

Models.Customer.find({})
.then(data => res.send({result: 200, data: data}))
.catch(err => {
console.log(err);
res.send({result: 500, error: err.message})
})
}
const createCustomer = (data, res) => {

console.log(data)
new Models.Customer(data).save()
.then(data => res.send({result: 200, data: data}))
.catch(err => {
console.log(err);
res.send({result: 500, error: err.message})
})
}
module.exports = {
getCustomers, createCustomer
}