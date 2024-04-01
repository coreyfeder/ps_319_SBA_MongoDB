require('dotenv').config()

// import express from "express";
const express = require("express");
// import mongoose from "mongoose";
const mongoose = require("mongoose");

// import Test from "./models/test.mjs";
// const Test = require("./models/test.mjs");

const app = express();
const m = mongoose.Mongoose();  // this may be unnecessary? or may break it?

app.use(express.json());

let connectString = `mongodb+srv://` +                                          // protocol. is the "+srv" necessary?
                    `${encodeURIComponent(process.env.MDB_USERNAME)}` +         // auth: username
                    `:${encodeURIComponent(process.env.MDB_APIKEY)}` +          // auth: pw, auth token, etc.
                    `@${process.env.MDB_APPID}.${process.env.MDB_SERVER}` +     // full server name
                    `/${process.env.MDB_DATABASE}`                              // any "path"
console.log(connectString)

let targetCollection = 'test';
// await m.connect(connectString);
await mongoose.connect(connectString, {'collection': targetCollection});
