const express = require ('express');
const mongoose = require ('mongoose');
const Book = require('./model/Book');
const router = require("./routes/book-routes")
const cors = require('cors');
const app = express();



//Middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router);




mongoose.connect("mongodb+srv://admin1:Tgui6rRLPHguTc6e@cluster0.wdwwe3y.mongodb.net/bookStore?retryWrites=true&w=majority").then(()=>console.log("Connected to DB")).then(()=>{
    app.listen(5000);
}).catch((err)=>console.log(err));
 




// mongo password: w3BCKu3ECTRGyJrT