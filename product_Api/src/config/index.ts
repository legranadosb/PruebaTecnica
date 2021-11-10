import * as bodyParser from "body-parser";
import { Application } from "express"

import * as cors from 'cors';
import * as dotenv from "dotenv";



const urlProductReview: string = "http://localhost:3001/api/productReview/";

export class Config {

        public app: Application

        constructor(app : Application){
            this.app = app;
        }

        public async setConfig(): Promise<Application>{
            this.setBodyParser();
            this.setCors();
            this.setDotEnv();
            this.app.set('urlProductReview', urlProductReview);
            return this.app;
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