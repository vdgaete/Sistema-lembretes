import { test, expect } from 'vitest'
import { createTarefa } from './create-tarefa'
import { Tarefa } from '../entities/tarefa'
test('criar tarefa', async () => {
    const tarefa = await createTarefa({nome: 'Tarefa 1', data_fim: new Date('2023-10-01')})

    expect(tarefa).toBeInstanceOf(Object)
    expect(tarefa.tarefa.getNome()).toBe('Tarefa 1')
    expect(tarefa.tarefa.getData_fim()).toBeInstanceOf(Date)
    expect(tarefa.tarefa.getData_fim()).toEqual(new Date('2023-10-01'))
})

test('criar tarefa com nome vazio', async () => {
    const tarefa = await createTarefa({nome: '', data_fim: new Date('2023-10-01')}
    ).catch((error) => {
        expect(error.message).toBe('Nome não pode ser vazio')
    }
    )
})


test('criar tarefa com data menor que a atual', async () => {
    const tarefa = await createTarefa({nome: 'Tarefa 1', data_fim: new Date('2021-10-01')}
    ).catch((error) => {
        expect(error.message).toBe('Data não pode ser menor que a data atual')
    }
    )
})

test('criar tarefa com data igual a atual', async () => {
    const tarefa = await createTarefa({nome: 'Tarefa 1', data_fim: new Date()}
    ).catch((error) => {
        expect(error.message).toBe('Data não pode ser menor que a data atual')
    }
    )
})

test('criar tarefa com data maior que a atual', async () => {
    const tarefa = await createTarefa({nome: 'Tarefa 1', data_fim: new Date('2024-10-01')}
    )
    expect(tarefa).toBeInstanceOf(Object)
    expect(tarefa.tarefa.getNome()).toBe('Tarefa 1')
    expect(tarefa.tarefa.getData_fim()).toBeInstanceOf(Date)
    expect(tarefa.tarefa.getData_fim()).toEqual(new Date('2024-10-01'))

    }
    )

