import { Application } from "express";
import routesProduct from "./routes-product";

class Routes {

    public setRoutes(app : Application) : void {
        routesProduct.setRoutes(app, '/api/product');
    }
}

export default new Routes();