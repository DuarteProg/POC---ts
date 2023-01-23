import express from "express";
import dotenv from "dotenv";
import router from "./Router/Routes.js";

const server = express();
server.use(express.json());
server.use(router);

server.listen(4000, () => {
  console.log("Ta funcionando");
});
