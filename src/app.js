const express = require("express");
// import express from 'express'

const app = express();

//setting
app.set("port", process.env.PORT || 5000);

//middlewares

//routes

module.exports = app;
