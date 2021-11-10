import { Application } from "express";
import routesAuth from "./routes-auth";

class Routes {

    public setRoutes(app : Application) : void {
        routesAuth.setRoutes(app, '/api/token');
    }
}

export default new Routes();