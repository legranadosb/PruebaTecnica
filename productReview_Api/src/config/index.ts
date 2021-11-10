import * as bodyParser from "body-parser";
import { Application } from "express"
import { Connection } from "typeorm";
import database from "./database"
import * as cors from 'cors';
import * as dotenv from "dotenv";

const secretKey: string = "pru3b44d1d45$";
const urlProductReview: string = "http://localhost:3001/api/productReview";

export class Config {

        public app: Application

        constructor(app : Application){
            this.app = app;
        }

        public async setConfig(): Promise<Application>{
            this.setBodyParser();
            this.setCors();
            this.setDotEnv();
            this.app.set('llave', secretKey);
            await this.setDb();
            return this.app;
        }

        private async setDb(){
            const databaseName = process.env.MODE || 'dev';
            if(await database.setDb(databaseName))
                console.log("The Connection to the database has beem establish");
            this.app.set('db',this.getDb());
        }

        private getDb(): Connection{
            return database.getDb();
        }

        private setBodyParser(){
            this.app.use(bodyParser.json({limit: '50mb'}));
            this.app.use(bodyParser.urlencoded({limit : '50mb', extended : true}));
            return this.app;
        }

        private setCors(){
            const options: cors.CorsOptions = {
                allowedHeaders : ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token", "Authorization"],
                credentials : true,
                methods : "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
                origin : "*",
                preflightContinue : false
            };
            this.app.use(cors(options));
        }

        private setDotEnv(){
            dotenv.config();
        }

}