import { Request, Response } from "express";
import { DeleteResult, UpdateResult } from "typeorm";
import { ProductReview } from "../models/ProductReview";
import { ProductReviewRepository } from "../repository/ProductReviewRepository";

export class ProductReviewController{

    public async getProductReviews(req: Request, res: Response){
        try{
            return res.status(200).json(await ProductReviewRepository.getProductReview());
        }catch(error){
            return res.status(500).json({ error: "Failed to get Product Reviews"});
        }

    }

    public async getProductReview(req: Request, res: Response){
        try{
            const productReview = await ProductReviewRepository.getProductReviewByProduct(req.params.productId)
            productReview ? res.status(200).json(productReview) : res.status(400).json({ error: "Product Review doesn't exist"})
            
        }catch(error){
            return res.status(500).json({ error: "Failed to get Product Review"});
        }

    }

    public async addProductReview(req: Request, res: Response){
        try{
            const productReviewBody = new ProductReview();
            productReviewBody.productId= req.body.idProduct;
            productReviewBody.numReview = req.body.numberReview;
            productReviewBody.avgRevScore = req.body.averageReviewScore;
            const productReview = await ProductReviewRepository.addProductReview(productReviewBody)
            productReview ? res.status(200).json(productReview) : res.status(400).json({ error: "Product Review could not be created"});
            
        }catch(error){
            return res.status(500).json({ error: "Failed to save Product Review"});
        }

    }

    public async updateProductReview(req: Request, res: Response){
        try{
            const productReviewBody = new ProductReview();
            productReviewBody.productId= req.body.idProduct;
            productReviewBody.numReview = req.body.numberReview;
            productReviewBody.avgRevScore = req.body.averageReviewScore;
            const productReview = await ProductReviewRepository.updateProductReview(req.params.productId,productReviewBody)
            productReview ? res.status(200).json(productReview.raw) : res.status(400).json({ error: "Product Review could not be update"})
            
        }catch(error){
            return res.status(500).json({ error: "Failed to update Product Review"});
        }

    }

    public async deleteProductReview(req: Request, res: Response){
        try{
            const productReview : DeleteResult = await ProductReviewRepository.deleteroductReview(req.params.productId)
            productReview ? res.status(200).json(productReview.raw) : res.status(400).json({ error: "Product Review could not be delete"})
            
        }catch(error){
            return res.status(500).json({ error: "Failed to delete Product Review"});
        }

    }
}