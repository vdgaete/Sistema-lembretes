// dBInterface Tests

import { expect,test } from 'vitest'

import { 
    connctionDB,
    connctionDBExample,
    IGetMethods,
    IPostMethods,
    IDeleteMethods,
    PostMethodsExample,
    GetMethodsExample,
    DeleteMethodsExample
 } from './dBInterface'

test('connctionDB', async () => {
    const connctionDB = new connctionDBExample()
    expect(connctionDB).toBeInstanceOf(connctionDBExample)
    expect(connctionDB.connectToDatabase()).toBe(true)
    expect(connctionDB.disconnectFromDatabase()).toBe(true)
    expect(connctionDB.getMethods).toBeInstanceOf(GetMethodsExample)
    expect(connctionDB.postMethods).toBeInstanceOf(PostMethodsExample)
    expect(connctionDB.deleteMethods).toBeInstanceOf(DeleteMethodsExample)
 } )

    test('GetMethodsExample', async () => {
        const  GetMethodsExample_instance = new GetMethodsExample()
        expect(GetMethodsExample_instance.getTarefa("1")).toBe("getTarefa")
        expect(GetMethodsExample_instance.getTarefas()).toBe("getTarefas")
        expect(GetMethodsExample_instance.getDatas()).toBe("getDatas")
        expect(GetMethodsExample_instance.getTarefasData("1")).toBe("getTarefasData")
    } )

    test('PostMethodsExample', async () => {
        const  PostMethodsExample_instance = new PostMethodsExample()
        expect(PostMethodsExample_instance.postTarefa(         
                "1",
                "nome tarefa",
                "data_fim"
        )).toBe(undefined)
    } )
    

     test('DeleteMethodsExample', async () => {
        const  DeleteMethodsExample_instance = new DeleteMethodsExample()
        expect(DeleteMethodsExample_instance.deleteTarefa('id')).toBe(undefined)
    }
    )
    