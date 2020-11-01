import express from 'express';
import routes from './routes';
import cors from 'cors';
import dbconnect from './Database/connection';

const app =  express();
app.use(cors());
app.use(routes);
app.use(express.json());


app.listen(4444, async ()=> {
    console.log("Servidor Online em http://localhost:4444/");
});