// interface class
import { Tarefa } from "./tarefa";

export interface connctionDB{
    //connection interface to generic DB
    connectToDatabase():boolean;
    disconnectFromDatabase():boolean;
    getMethods:IGetMethods;
    postMethods:IPostMethods;
    deleteMethods:IDeleteMethods;


}

export class connctionDBExample implements connctionDB{
    //connection interface to generic DB
    connectToDatabase():boolean{
        return true;
    }
    disconnectFromDatabase():boolean{
        return true;
    }
    getMethods:IGetMethods;
    postMethods:IPostMethods;
    deleteMethods:IDeleteMethods;

    constructor(){
        this.getMethods = new GetMethodsExample();
        this.postMethods = new PostMethodsExample();
        this.deleteMethods = new DeleteMethodsExample();
    }
}


export interface IGetMethods{
    //get methods 
    getTarefa(id:string):any;
    getTarefas():any;
    getDatas():any;
    getTarefasData(id:string):any;
}

export interface IPostMethods{
    //post methods
    postTarefa(id:string, name:string,data_fim:string):void;
}




export interface IDeleteMethods{
    //delete methods
    deleteTarefa(id:string):void;
}

export class GetMethodsExample implements IGetMethods{
    constructor(){
        return this
    }

    //get methods 
    getTarefa(id:string):any{
        return "getTarefa";
    }
    getTarefas():any{
        return "getTarefas";
    }
    getDatas():any{
        return "getDatas";
    }
    getTarefasData(data:string):any{
        return "getTarefasData";
    }
}

export class PostMethodsExample implements IPostMethods{

    constructor(){
        return this
    }
    //post methods
    postTarefa(id:string, nome:string,data_fim:string):void{
        console.log("postTarefa");
    }
}




export class DeleteMethodsExample implements IDeleteMethods{
    //delete methods
    constructor(){
        return this
    }

    deleteTarefa(id:string):void{
        console.log("deleteTarefa");
    }
}

    