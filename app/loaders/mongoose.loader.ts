/*
import * as mongoose from 'mongoose'
import * as express from 'express';

export default async (app: express.Application): Promise<any> => {
  //const connection = await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
  //return connection.connection.db;

  const connection = mongoose.connect("mongodb://localhost:27017/SocialNetwork", { serverSelectionTimeoutMS: 5000 }, function(err) {
    if (!err)
      console.log("Подключились к Mongo");
    else
      console.log("Не удалось подключиться к Mongo");
  });
  return connection;

}*/