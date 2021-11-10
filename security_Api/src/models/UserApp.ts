import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class UserApp {

    constructor(username: string, hash: string, salt: string,  id: number  ){
        this.id = id;
        this.username = username;
        this.hash = hash;
        this.salt = salt;

    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    hash: string;

    @Column()
    salt: string;

}
