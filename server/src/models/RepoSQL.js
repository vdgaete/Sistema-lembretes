// 
import * as TarefaSQL from '../controllers/TarefaSQL.js';
import { RepoTarefaModel } from './RepoTarefaModel.js';
import { openDb } from '../configDB.js';

export class RepoTarefaSQL extends RepoTarefaModel {

    dbfile = './database.sqlite';
    db;

    

    constructor(params) {
        super(params);
        this.dbfile = params.dbfile || this.dbfile;
        this.db = openDb(this.dbfile);
    }

    async selectTarefa(req, res) {
        return await TarefaSQL.selectTarefa(req, res, this.dbfile);
    }

    async selectTarefas(req, res) {
        return await TarefaSQL.selectTarefas(req, res, this.dbfile);
    }

    async insertTarefa(req, res) {
        return await TarefaSQL.insertTarefa(req, res, this.dbfile);
    }

    async updateTarefa(req, res) {
        return await TarefaSQL.updateTarefa(req, res, this.dbfile);
    }

    async deleteTarefa(req, res) {
        return await TarefaSQL.deleteTarefa(req, res, this.dbfile);
    }

    async selectTarefasByDate(req, res) {
        return await TarefaSQL.selectTarefasByDate(req, res, this.dbfile);
    }

    async selectAllDates(req, res) {
        return await TarefaSQL.selectAllDates(req, res, this.dbfile);
    }

    // Demais métodos específicos do sqlite
    async openDb(dbfile) {
        return await openDb(dbfile);
    }
    

}
    