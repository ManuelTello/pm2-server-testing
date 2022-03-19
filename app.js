import express from "express";
import cors from "cors";
import server from "./server.js";

const app = express();

server(app);

app.use(cors());
    

export default app;
