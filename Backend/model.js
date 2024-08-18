var mongoose = require('mongoose');
const schema = mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});
var blogmodel=mongoose.model("blogmodel",schema);
module.exports=blogmodel;
