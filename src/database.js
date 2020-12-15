// config db
import mongoose from "mongoose";
import config from './config';
try {
    (async ()=>{
        console.log(config.mongodbURL);
        const db = await mongoose.connect(config.mongodbURL,{ 
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('La base de datos esta conectada a: ', db.connection.name);
    })();    
} catch (error) {
    console.error(error);   
}