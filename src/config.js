//archivo de config de acceso a la db

import { config } from "dotenv";
config();

export default {  
    mongodbURL: process.env.MONGODB_URI || "http://localhost:3000" 
}