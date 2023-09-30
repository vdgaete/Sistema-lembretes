import {test, expect} from 'vitest'
import {Tarefa} from './tarefa'


test('criar tarefa', () => {
    const tarefa = new Tarefa({id: "1", nome: 'Tarefa 1', data_fim: new Date('2023-10-01')})
    expect(tarefa).toBeInstanceOf(Tarefa)
    expect(tarefa.getNome()).toBe('Tarefa 1')
    expect(tarefa.getData_fim()).toBeInstanceOf(Date)
    expect(tarefa.getData_fim()).toEqual(new Date('2023-10-01'))
})