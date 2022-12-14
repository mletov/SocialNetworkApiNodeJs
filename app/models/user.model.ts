const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
});

const User = mongoose.model('Users', userSchema);

exports.create = (data: any) => {
    mongoose.connect(process.env.MONGO_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
    const user = new User(data);
    const res = user.save();
    mongoose.disconnect();
    return res;
};

exports.findById = (id: any) => {
    return User.findById(id).then((result: any) => {
        result = result.toJSON();
        delete result._id;
        delete result.__v;
        return result;
    });
};

exports.patch = (id: any, data: any) => {
    return User.findOneAndUpdate({
        _id: id
    }, data);
};

exports.removeById = (userId: any) => {
    return new Promise((resolve, reject) => {
        User.deleteMany({_id: userId}, (err: any) => {
            if (err) {
                reject(err);
            } else {
                resolve(err);
            }
        });
    });
};

exports.list = (perPage: any, page: any) => {
    return new Promise((resolve, reject) => {
        User.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec(function (err: any, users: any) {
                if (err) {
                    reject(err);
                } else {
                    resolve(users);
                }
            })
    });
};

exports.userModel = User;


/*
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
});

const User = mongoose.model('Users', userSchema);

exports.create = (data) => {
    const user = new User(data);
    return user.save();
};

exports.findById = (id) => {
    return User.findById(id).then((result) => {
        result = result.toJSON();
        delete result._id;
        delete result.__v;
        return result;
    });
};

exports.patch = (id, data) => {
    return User.findOneAndUpdate({
        _id: id
    }, data);
};

exports.removeById = (userId) => {
    return new Promise((resolve, reject) => {
        User.deleteMany({_id: userId}, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(err);
            }
        });
    });
};

exports.list = (perPage, page) => {
    return new Promise((resolve, reject) => {
        User.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec(function (err, users) {
                if (err) {
                    reject(err);
                } else {
                    resolve(users);
                }
            })
    });
};

exports.User = User;
*/