import { Request, Response } from "express";
import got from "got/dist/source";
import app from "../app";

export class ProductController{

    

    public async getProductReview(req: Request, res: Response){
        try{
            const body = await got.post(app.get("urlProductReview")+req.params.productI);
            return res.status(200).json(body);    
            
        }catch(error){
            return res.status(500).json({ error: "Failed to get Product"});
        }

    }

    
}