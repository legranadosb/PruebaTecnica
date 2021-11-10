import { Application } from "express";
import { Auth } from "../middleware/auth";

class RoutesAuth{

    public auth : Auth = new Auth();

    public setRoutes(app : Application, urlBase: string): void {
        app.route(urlBase).post(this.auth.login);
    }
}

export default new RoutesAuth();