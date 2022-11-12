import express = require("express");
import cors = require("cors");
import path = require("path");

const jsonParser = express.json();
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;
const corsReq = cors();

app.post("/api/phoneNumber", corsReq, jsonParser, (req, res) => {
  try {
    if (!req.body) {
      return res.status(401).send();
    }

    const {
      body: { phone },
    } = req;
    if (phone) {
      setTimeout(() => {
        res.status(200).send(phone);
      }, 100);
    } else {
      res.sendStatus(400);
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

app.use(express.static(path.resolve(__dirname, "../build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Start server port ${PORT} on http://localhost:${PORT}`);
});
