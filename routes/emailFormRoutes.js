const express = require("express");
const controller = require("../controllers/emailFormController");
const multiparty = require("connect-multiparty");

const api = express.Router();

const md_upload = multiparty({uploadDir: "./uploads/casting"});

api.post("/form", [md_upload], controller.handler);
api.get("/test", controller.test);

module.exports = api;