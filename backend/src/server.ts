import express from 'express';
import routes from './routes';
import 'express-async-errors'
import './Database/connection'
import cors from 'cors';
const app = express();


app.use(express.json());
app.use(cors());
app.use(routes);

//app.use(cors());

app.listen(4444,()=> {
    console.log("Servidor Online em http://localhost:4444/");
});