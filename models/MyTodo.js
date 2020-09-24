//this file conatin the schema for our storing our data

const mongoose=require('mongoose');
const mytodoschema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }

});
//this is for collection name naming convention is use first letter as capital
const Mytodo= mongoose.model('Mytodo',mytodoschema);//name of the collection and the which schima it is going to use
module.exports=Mytodo;