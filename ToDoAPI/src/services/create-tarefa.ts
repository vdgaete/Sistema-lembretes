
import {Tarefa} from '../entities/tarefa'

interface Request {
    nome: string;
    data_fim: Date;
    }

interface Response {
        tarefa: Tarefa;
    }


export function createTarefa(request: Request): Promise<Response> {
    //verifica se o nome esta vazio
    if(!request.nome) {
        return Promise.reject(new Error('Nome não pode ser vazio'))
    }
    //verifica se a data esta vazia
    if(!request.data_fim) {
        return Promise.reject(new Error('Data não pode ser vazia'))
    }
    //verifica se a data supera a data atual
    if(request.data_fim < new Date()) {
        return Promise.reject(new Error('Data não pode ser menor que a data atual'))
    }
    //gera id (string aleatoria de 5digitos, não usando substr+data atual)
    const id = Math.random().toString(36).substring(2, 7)+request.data_fim.toISOString()
    //cria a tarefa
    const tarefa = new Tarefa({id, nome: request.nome, data_fim: request.data_fim})
    //retorna a tarefa
    return Promise.resolve({tarefa})
}


