import http from 'http';


import loaders from './app/loaders/index';

 



    
    const express = require("express");
    const app = express();
    


    const dotenv = require('dotenv');
    dotenv.config();

    //ROUTES
    loaders(app);


    // Server
    const httpServer = http.createServer(app);
    const PORT: any = process.env.PORT;
    httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
















/*
async function startServer() {

    

    //await loaders.init({ expressApp: app });
    await loaders(app);



    // Server
    const httpServer = http.createServer(app);
    const PORT: any = process.env.PORT ?? 3000;
    httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
}

startServer();*/





















/*

const router: Express = express();
//const userRouter = require("./api/routes/user.js");
//const photoRouter = require("./api/routes/photo.js");


import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';

const router: Express = express();

router.use("/", function (request, response) {
    response.send("О сайте");
});


// RULES OF OUR API 
router.use((req, res, next) => {
    // set the CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // set the CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    // set the CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});


/// Error handling 
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

// Server
const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 3000;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
*/



























/*const express = require("express");
const app = express();
const router = express.Router();

app.use("/", function (request, response) {
    response.send("О сайте");
});

  
app.use("/about", function (request, response) {
  response.send("О сайте");
});

app.listen(3000);
*/
/*
const http = require("http");
http.createServer(function(request,response){
     
    response.end("Hello NodeJS111");
     
}).listen(3000, "127.0.0.1",function(){
    console.log("Сервер начал прослушивание запросов на порту 3000");
});*/

/*
import express from 'express';

import controller from 'controllers/api/orderController';
import makeExpressCallback from 'routes/make-callback';

const router = express.Router();

router.route('/order').post(makeExpressCallback(controller.postOrder));
router.route('/order/:orderId').get(makeExpressCallback(controller.getOrderById));
// ...

export default router;
*/