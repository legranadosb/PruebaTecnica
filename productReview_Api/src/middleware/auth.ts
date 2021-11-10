import * as jwt from 'jsonwebtoken';
import { Request, Response } from "express";
import app from '../app';
import { nextTick } from 'process';

const signOpts = {
    expiresIn: "3600"
}

export class Auth{
    
    

    public isAuth(req: Request, res: Response, next){
        try{
            let authorization : string = req.headers.authorization!;
            jwt.verify(authorization,app.get('llave'),function(err, decoded){
                if(err){
                    res.status(401).json({error: "Invalid authorized "+ err});
                }else
                    next();
            });

           }catch(error){
            res.status(401).json({error: "Invalid authorized "+ error});
               
        }
    }

}