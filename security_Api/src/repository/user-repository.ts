import {UserApp} from '../models/UserApp';
import { DeleteResult, UpdateResult } from 'typeorm';
import app from '../app';

export class UserRepository{

    public static getUserByUserName(user : string): Promise<UserApp>{
        return app.get('db').getRepository(UserApp).findOne({
            where: {
                username : user
            }
        });
    }
}