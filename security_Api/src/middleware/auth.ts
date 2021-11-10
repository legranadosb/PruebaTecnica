import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import { Request, Response} from 'express';
import { UserRepository } from '../repository/user-repository';
import app from '../app';

const signOpts = {
    expiresIn: "1h"
}

export class Auth {

    public async login (req : Request, res : Response){
        try{
            const user = await UserRepository.getUserByUserName(req.body.username);
            if (user){
                const hash = crypto.pbkdf2Sync(req.body.password,user.salt,1000,64,'sha512').toString('hex');
                hash === user.hash ? res.status(200).json({"access_token" : Auth.createToken(user.username)}) :
                    res.status(401).json({error: "User Unauthorized" + hash});
            }else{
                res.status(404).json({error: "User not found"});
            }
        }catch(error){
            res.status(500).json({error: "Error in server: "+error });
        }
    }


    public static createToken(username: string){
        const payload = {
            name : username
        };
        return jwt.sign(payload, app.get('llave'), signOpts)

    }
}