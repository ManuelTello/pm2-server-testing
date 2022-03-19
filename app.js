import express from "express";
import cors from "cors";
import server from "./server.js";

const app = express();

server(app);

app.use(cors());

app.get("/",(req,res)=>{
    res.status(200).send("<h1>hola</H1>");
}); 

export default app;
