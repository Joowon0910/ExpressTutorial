const express = require("express");
const app = express();
const uuidAPIKey = require("uuid-apikey");
const server = app.listen(3001, () => {
  console.log("Start Server : localhost:3001");
});

const key = {
  apiKey: "1Y5YRTR-QQP4YFJ-QNDHVPK-X0R40Q8",
  uuid: "0f8bec6b-bdec-4f3e-bd5b-1ddae830405d", // db에 uuid만 있어도 됨
};

app.get("/api/users/:apikey/:type", async (req, res) => {
  let { type, apikey } = req.params;
  if (!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)) {
    res.send("apikey is not valid.");
  } else {
    if (type == "seoul") {
      let data = [
        { name: "홍길동", city: "seoul" },
        { name: "김철수", city: "seoul" },
      ];
      res.send(data);
    } else if (type == "jeju") {
      let data = [
        { name: "박지성", city: "jeju" },
        { name: "손흥민", city: "jeju" },
      ];
      res.send(data);
    } else {
      res.send("Type is not correct.");
    }
  }
});

app.get("/api/sales/:apikey/:year", async (req, res) => {
  let { year, apikey } = req.params;
  if (!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)) {
    res.send("apikey is not valid.");
  } else {
    if (year == "2019") {
      let data = [
        { name: "반도체", amount: 201611804 },
        { name: "부품", amount: 201711942 },
      ];
      res.send(data);
    } else if (year == "2020") {
      let data = [
        { name: "반도체", amount: 201822194 },
        { name: "부품", amount: 201923041 },
      ];
      res.send(data);
    } else {
      res.send("Year is not correct.");
    }
  }
});
