import express from 'express';


const app =  express();



app.use(express.json());

app.get("/", (req,res) => {
    res.json({message:"Aleatori Chat"});
})





app.listen(4444, ()=> {
    console.log("Servidor Online em http://localhost:4444/");
});