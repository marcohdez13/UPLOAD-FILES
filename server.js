
const express = require('express');
const app = express();
const multer = require("multer");

const storage = multer.diskStorage({
    destination: "upload/",
    filename: function(req,file,cb){
        cb("","texto.txt");
    }
})

const upload = multer({
    //dest: "upload/"
    storage: storage
});



app.get ("/", (req, res)=>{
    //res.send("hola mundo");
    res.sendFile(__dirname + "/views/index.html");
})
console.log("marco");
app.post("/files",upload.single("avatar") ,(req,res)=>{
    res.send("todo bien");
})

app.listen(8080,()=> console.log("server started"));
