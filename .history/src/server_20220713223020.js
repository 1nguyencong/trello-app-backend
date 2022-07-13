import express from "express";

const app = express();
const port = 8080;

app.listen(port, () => {
    console.log("node.js server is running on the port " + port)
})