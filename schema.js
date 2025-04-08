const mongoose = require("mongoose");

const librarySchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    books:{
        type:[Number]
    }
});

const bookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    isbn:{
        type:Number
    }

});

const libraries = mongoose.model("user",librarySchema);
const books = mongoose.model("user1",bookSchema);
module.exports = { libraries , books };