import { ProductReview } from '../models/ProductReview';
import {DeleteResult, UpdateResult} from 'typeorm';
import app from '../app';

export class ProductReviewRepository{

    public static getProductReview(): Promise<ProductReview[]>{
        return app.get('db').getRepository(ProductReview).find();
    }

    public static getProductReviewByProduct(productId: string): Promise<ProductReview>{
        return app.get('db').getRepository(ProductReview).findOne({
            where: {
                productId: productId
            }
        });
    }

    public static addProductReview(productReview : ProductReview): Promise<ProductReview>{
        return app.get('db').getRepository(ProductReview).save(productReview);
    }

    public static updateProductReview(productId: string, productReview : ProductReview): Promise<UpdateResult>{
        return app.get('db').getRepository(ProductReview).update({productId: productId}, productReview);
    }

    public static deleteroductReview(productId: string): Promise<DeleteResult>{
        return app.get('db').getRepository(ProductReview).delete({productId: productId});
    }
}