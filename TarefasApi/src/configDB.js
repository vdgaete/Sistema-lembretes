/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable valid-jsdoc */
import sqlite3 from 'sqlite3';
import {open} from 'sqlite';

/**
 * Opens a connection to the SQLite database.
 * @param {string} [filename='./database.sqlite'] - The filename of the database.
 * @returns {Promise<import('sqlite').Database>} - A promise that resolves to the database object.
 */
export async function openDb(filename = './database.sqlite') {
  return open({
    filename: filename,
    driver: sqlite3.Database,
  });
}

