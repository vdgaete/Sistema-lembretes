import { describe,it,beforeEach,afterEach,expect } from 'jest';
import { RepoTarefaSQL } from './RepoSQL.js';
import * as TarefaSQL from '../controller/TarefaSQL.js';
import { openDb } from '../configDB.js';

jest.mock('../controller/TarefaSQL.js');
jest.mock('../configDB.js');


describe('RepoTarefaSQL', () => {
  let repo;

  beforeEach(() => {
    repo = new RepoTarefaSQL({ dbfile: 'test.sqlite' });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('constructor', () => {
    it('should set dbfile to default value if not provided', () => {
      const repo = new RepoTarefaSQL({});
      expect(repo.dbfile).toBe('./database.sqlite');
    });

    it('should set dbfile to provided value', () => {
      expect(repo.dbfile).toBe('test.sqlite');
    });

    it('should call openDb with dbfile', () => {
      expect(openDb).toHaveBeenCalledWith('test.sqlite');
    });
  });

  describe('selectTarefa', () => {
    it('should call TarefaSQL.selectTarefa with req, res, and dbfile', async () => {
      const req = {};
      const res = {};
      await repo.selectTarefa(req, res);
      expect(TarefaSQL.selectTarefa).toHaveBeenCalledWith(req, res, 'test.sqlite');
    });

    it('should return the result of TarefaSQL.selectTarefa', async () => {
      const req = {};
      const res = {};
      const expectedResult = { id: 1, descricao: 'Teste' };
      TarefaSQL.selectTarefa.mockResolvedValue(expectedResult);
      const result = await repo.selectTarefa(req, res);
      expect(result).toBe(expectedResult);
    });
  });

  // Add tests for the other methods in RepoTarefaSQL here
});