const express = require("express");
const app = express();

app.get("/", (req, res) =>{
    res.send("hello world hi");
});

app.listen(3002,() => {
    console.log("Running on port 3002");
});
