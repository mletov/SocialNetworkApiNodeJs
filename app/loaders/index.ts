import express, { Express } from 'express';
import expressLoader from './express.loader';
//import mongooseLoader from './mongoose.loader';

  export default async (app: any) => {


    //console.log(`Your port is ${process.env.PORT}`);
    //console.log(`Mongo connection is ${process.env.MONGO_CONNECTION_STRING}`);

    //const mongoConnection = await mongooseLoader(app);
    //console.log('MongoDB Intialized');

    await expressLoader(app);
    console.log('Express Intialized');



    // ... more loaders can be here

    // ... Initialize agenda
    // ... or Redis, or whatever you want
  }