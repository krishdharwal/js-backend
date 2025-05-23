import dotenv from 'dotenv';
import dbConnector from './db/db.js';
import { app } from './app.js';

dotenv.config({
   path: './.env'
})

let port = process.env.PORT || 4000;

dbConnector()
.then(() => {
  app.listen(port,() => {
    console.log(`⚙️ Server is running at port : ${port}`);
  })

}).catch( (error) => {
    console.log("ERROR IN INDEX JS IN MONGO DB" , error);
})