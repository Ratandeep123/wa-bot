
var express=require('express');
var app = express();
app.use(express.urlencoded());
app.get('/',function(req,res){
  res.send('Default');
});
app.get('/getDate',function(req,res){
    var date = new Date();
    res.send(date);
  });
app.listen(7676);