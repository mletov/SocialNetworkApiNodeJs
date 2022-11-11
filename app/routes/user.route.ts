
import express, { Express } from 'express';


    const app = require("express");
    
    const userController = require("../controllers/user.controller.ts");
    const userRouter = app.Router();

    var bodyParser = require('body-parser');
    var jsonParser = bodyParser.json();
    var urlencodedParser = bodyParser.urlencoded({ extended: false })


    userRouter.get("/", [userController.list]);
    userRouter.post("/", urlencodedParser, [userController.insert]);
    userRouter.get("/:id", [userController.getById]);
    userRouter.patch("/:id", urlencodedParser, [userController.patchById]);
    userRouter.delete("/:id", [userController.removeById]);



  

    module.exports = userRouter;
