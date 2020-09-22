const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/add", function(request, respond){
  var num1 = Number(request.body.num1);
  var num2 = Number(request.body.num2);
  var total = num1 + num2;
  respond.send("The result is "+ total);
});

app.post("/subtract", function(request, respond){
  var num1 = Number(request.body.num1);
  var num2 = Number(request.body.num2);
  var total = num1 - num2;
  respond.send("The result is "+ total);
});

app.post("/subtract", function(request, respond){
  var num1 = Number(request.body.num1);
  var num2 = Number(request.body.num2);
  var total = num1 - num2;
  respond.send("The result is "+ total);
});

app.post("/multiply", function(request, respond){
  var num1 = Number(request.body.num1);
  var num2 = Number(request.body.num2);
  var total = num1 * num2;
  respond.send("The result is "+ total);
});

app.post("/divide", function(request, respond){
  var num1 = Number(request.body.num1);
  var num2 = Number(request.body.num2);
  var total = num1 / num2;
  respond.send("The result is "+ total.toFixed(2));
});

app.listen(3000, function(req, res){
  console.log("The server is connected");
})
