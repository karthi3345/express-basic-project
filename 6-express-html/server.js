const express = require("express")
const path = require("path")
const app= express()
app.get("/images",express.static("images"))
app.get("/", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "html","index.html"))

})

app.listen(4000,()=>{
    console.log("server is up and running");
})