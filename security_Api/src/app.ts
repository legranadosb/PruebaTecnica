
import { Config } from "./config";
import routes from "./routes";
import * as express from "express"



class App {
    public app: express.Application = express();
    public config : Config;

    constructor(){
        this.app = express();
        this.config = new Config(this.app);
        this.config.setConfig().then(application => {
            this.app = application;
            routes.setRoutes(this.app);
        });
    }

}

export default new App().app;