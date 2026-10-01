import express from 'express';
const app = express();

app.get("/", (req, res) =>{
  //   res.send("Hello express");
  res.send ("<h1>Hello Express</h1>");
});


app.listen(4444, () => console.log("prg1 is running at 4444"));