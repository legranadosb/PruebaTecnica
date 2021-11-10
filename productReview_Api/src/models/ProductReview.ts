import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class ProductReview {

    /*constructor(id: number, productId: string, avgRevScore: number, numReview: number){
        this.id = id;
        this.productId = productId;
        this.avgRevScore = avgRevScore;
        this.numReview = numReview;

    }*/

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productId: string;

    @Column()
    avgRevScore: number;

    @Column()
    numReview: number;

}
