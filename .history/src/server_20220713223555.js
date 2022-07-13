import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send("hello world with node.js")
})

app.listen(port, () => {
    console.log("node.js server is running on the port " + port)
})