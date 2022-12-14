"use strict";
exports.__esModule = true;
var express = require("express");
var cors = require("cors");
var path = require("path");
var jsonParser = express.json();
var app = express();
app.use(cors());
var PORT = process.env.PORT || 5000;
var corsReq = cors();
app.post("/api/phoneNumber", corsReq, jsonParser, function (req, res) {
    try {
        if (!req.body) {
            return res.status(401).send();
        }
        var phone_1 = req.body.phone;
        if (phone_1) {
            setTimeout(function () {
                res.status(200).send(phone_1);
            }, 100);
        }
        else {
            res.sendStatus(400);
        }
    }
    catch (err) {
        res.status(400).send(err);
    }
});
app.use(express.static(path.resolve(__dirname, "../build")));
app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "../build/index.html"));
});
app.listen(PORT, function () {
    console.log("Start server port ".concat(PORT, " on http://localhost:").concat(PORT));
});
