
var express=require('express');
var app = express();
app.use(express.urlencoded());
app.get('/',function(req,res){
  res.send('Default');
});
app.get('/:rollNumber',function(req,res){
    var rN = req.params.rollNumber;
    var name = "Adi";
    res.send(name);
  });
app.listen(7676);