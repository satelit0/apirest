// config db
import mongoose from "mongoose";
import config from './config';
try {
    (async ()=>{
        const db = await mongoose.connect(config.mongodbURI ,{
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('La base de datos esta conectada a: ', db.connection.name, ' V-',db.version);
    })();    
} catch (error) {
    console.error(error);   
}


