import express from "express";
import dotenv from "dotenv";
import router from "./Router/Routes";
dotenv.config();
var PORT = process.env.PORT;
var server = express();
server.use(express.json());
server.use(router);
server.listen(4000, function () {
    console.log("Ta funcionando");
});
