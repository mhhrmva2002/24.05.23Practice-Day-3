const mongoose =require('mongoose');
const colorlibShema= new mongoose.Schema({
    ImageURL:String,
    Button:String,
    Body:String,
    Title:String
});
const Colorlib =mongoose.model('Colorlib',colorlibShema);
module.exports=Colorlib