import express from "express";
import router from "./routes/routes.js";
import cors from 'cors'
var app = express();
var PORT = 3000;

app.use(cors())
app.use("/", router);
 
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})