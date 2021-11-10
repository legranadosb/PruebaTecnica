import { Application } from "express";
import routesProductReview from "./routes-product-review";

class Routes {

    public setRoutes(app : Application) : void {
        routesProductReview.setRoutes(app, '/api/productReview');
    }
}

export default new Routes();