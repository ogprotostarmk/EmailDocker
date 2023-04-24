const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { API_VERSION } = require("./constants");

const app = express();

//configure Header HTTP - CORS
app.use(cors());

//import routings
const emailFormRoutes = require("./routes/emailFormRoutes");

//configure body parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//configure routtings
app.use(`/api/${API_VERSION}`, emailFormRoutes);

module.exports = app;