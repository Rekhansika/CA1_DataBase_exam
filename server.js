const express = require("express");
const app = express();

app.use(express.json());

app.get('/connect',(req,res)=>{
    res.status(200).send({msg:"Connected to mongoose"});
});


app.listen(3000,()=>{
    try {
        console.log("Server Connected Successfully");
    } catch (error) {
        console.log("Error",error);
    }
    
});
