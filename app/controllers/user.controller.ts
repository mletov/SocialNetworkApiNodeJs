//const mongoose = require("mongoose");
const userModel = require("../models/user.model");


exports.insert = (req: any, res: any) => {

    userModel.create(req.body)
             .then((result: any) => {
                res.status(201).send({id: result._id});
            });
};

exports.getById = (req: any, res: any) => {
    userModel.findById(req.params.id).then((result: any) => {
        res.status(200).send(result);
    });
};

exports.removeById = (req: any, res: any) => {
    userModel.removeById(req.params.userId)
        .then((result: any) => {
            res.status(204).send({});
        });
};

exports.patchById = (req: any, res: any) => {
    userModel.patch(req.params.id, req.body)
    .then((result: any) => {
        res.status(201).send({id: result._id});
    });
};

exports.list = (req: any, res: any) => {

    let limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10;
    let page = 0;
    if (req.query) {
        if (req.query.page) {
            req.query.page = parseInt(req.query.page);
            page = Number.isInteger(req.query.page) ? req.query.page : 0;
        }
    }
    userModel.list(limit, page).then((result: any) => {
        res.status(200).send(result);
    });
    
};


exports.test = (req: any, res: any) => {

    res.send("<h1>Контакты</h1>");
};