import express from "express";
import { inherits } from "util";

const app = express();

app.use(express.json());

import fs from 'fs'
fs.writeFile('text.txt',()=>{
  
})

const arr = [{name:'irrfaan',password:12345}, {name:'shifflah',password:5764}];

app.get("/", (req, res) => {
  res.send("welcome to my site");
});

app.get("/home", (req, res) => {
  res.send("welcome to my home");
});

app.get("/school", (req, res) => {
  res.send("welcome to my school");
});

app.post("/home", (req, res) => {
  console.log(req.body);
});

app.post('/school',(req,res)=>{
    arr.push(req.body)
    res.send(arr)
})


app.listen(3000, () => {
  console.log("server running on http://localhost:3000");
});
