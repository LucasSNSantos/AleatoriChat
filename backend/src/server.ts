import express from 'express';
import routes from './routes';
import cors from 'cors';

const app =  express();
app.use(cors());
app.use(routes);


app.use(express.json());

app.get("/", (req,res) => {
    res.json({message:"Aleatori Chat"});
})





app.listen(4444, ()=> {
    console.log("Servidor Online em http://localhost:4444/");
});