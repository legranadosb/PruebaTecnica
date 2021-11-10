import { Application } from "express";
import { ProductReviewController } from "../controller/ProductReviewController";
import { Auth } from "../middleware/auth";

class productReviewService {

    public auth : Auth = new Auth();
    public productReviewController: ProductReviewController = new ProductReviewController();

    public setRoutes(app : Application, urlBase: string): void {

        app.route(urlBase)
            .get(this.productReviewController.getProductReviews)
            .post(this.auth.isAuth,this.productReviewController.addProductReview);
        app.route(urlBase + '/:productId')
            .get(this.productReviewController.getProductReview)
            .patch(this.auth.isAuth,this.productReviewController.updateProductReview)
            .delete(this.auth.isAuth,this.productReviewController.deleteProductReview);
    }
}



export default new productReviewService();