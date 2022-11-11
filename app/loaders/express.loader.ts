import * as express from 'express';
import * as bodyParser from 'body-parser';


export default async (app: express.Application) => {



    /// ROUTES
    const userRouter = require("../routes/user.route.ts");
    app.use("/users", userRouter);


  

     /// Error handling 
     app.use((req, res, next) => {
        const error = new Error('not found');
        return res.status(404).json({
            message: error.message
        });
    });


    return app;

}


/*
  app.listen(process.env.PORT, err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`Your server is ready !`);
});
*/