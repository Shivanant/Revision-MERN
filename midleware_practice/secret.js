import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import fs from "fs"; // Import the 'fs' module for file operations
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname= dirname(fileURLToPath(import.meta.url))

const app=express()
const port=3000

app.use(bodyParser.urlencoded({extended:true}))
app.use(morgan('combined', {
    skip: function (req, res) { return res.statusCode < 400 }
  }))

  app.use(morgan('combined', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
  }))

var isValid=false

const logger=(req,res,next)=>{                                //sets isvalid true is password matches
    console.log(`The Request method is : ${req.method}`)
    if(req.body["fname"]=="Shiva"){
        isValid=true
        console.log("hi")
        next()
    }
    next()
}
app.use(logger)   //middleware added


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index2.html')

})
app.post('/check',(req,res)=>{                            //if else based on valid
    if (isValid){res.send(req.body["fname"])
    console.log(req.body["fname"])}else{

res.redirect('/')    }
})

app.listen(port,()=>{
    console.log(`Server Listening on port: ${port}`)
})