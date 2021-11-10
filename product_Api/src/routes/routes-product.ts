import { Application } from "express";
import { ProductController } from "../controller/ProductController";


class productService {

    public productController: ProductController = new ProductController();

    public setRoutes(app : Application, urlBase: string): void {

        app.route(urlBase + '/:productId')
            .get(this.productController.getProductReview);
    }
}



export default new productService();