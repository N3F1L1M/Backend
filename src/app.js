const express = require("express");
// import express from 'express'
const cors = require("cors");
const app = express();

//setting
app.set("port", process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());
//routes

module.exports = app;
