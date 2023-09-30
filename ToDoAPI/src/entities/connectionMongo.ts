//connection interface to mongoDB

import { MongoClient, Db } from 'mongodb'
import { connctionDB, IGetMethods,IPostMethods,IDeleteMethods } from './dBInterface'

export interface ConnectionMongoProps {
    client: MongoClient
    db: Db

}

export class ConnectionMongo implements connctionDB {
    public client: MongoClient
    public db: Db
    public getMethods:IGetMethods = new MongoGetMethods()
    public postMethods:IPostMethods = new MongoPostMethods()
    public deleteMethods:IDeleteMethods


    constructor(client: MongoClient, db: Db) {
        this.client = client
        this.db = db
    }


    public connectToDatabase(): boolean {
        //connect to mongoDB
        return true
    }

    public disconnectFromDatabase(): boolean {
        //disconnect from mongoDB
        return true
    }

}

class MongoGetMethods implements IGetMethods {
    public getTarefa(id:string): any {
        return "getTarefa";
    }
    public getTarefas(): any {
        return "getTarefas";
    }
    public getDatas(): any {
        return "getDatas";
    }
    public getTarefasData(id:string): any {
        
        return "getTarefasData";
    }     
}

class MongoPostMethods implements IPostMethods {
    public postTarefa(): void {
        console.log("postTarefa");
    }
}



class MongoDeleteMethods implements IDeleteMethods {
    public deleteTarefa(id:string): void {
        console.log("deleteTarefa");
    }
}


