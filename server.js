import cfg from "./src/config/server_cfg.js";

const {port} = cfg;

const setUpServer = (app)=>{
    const server = app.listen(port,()=>{
        console.log("Server up ",port);
    });
};

export default setUpServer;