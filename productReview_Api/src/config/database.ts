import { createConnection, getConnectionOptions, Condition, Connection } from "typeorm";

class Database {
    private db!: Connection;

    public getDb(): Connection {
        return this.db
    }

    public async setDb(databaseName : string): Promise<boolean>{
        let result = false;
        try{
            let options = await getConnectionOptions(databaseName);
            this.db = await createConnection(options);
            this.db.synchronize();
            result = true;
        }catch(error){
            console.log(error);
        }finally{
            return result;
        }
    }
}

export default new Database();