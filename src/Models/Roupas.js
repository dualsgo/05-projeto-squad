import { openDb } from '../configDB.js';

export async function createTableRoupas() {
  openDb().then((db) => {
    db.exec(
      'CREATE TABLE IF NOT EXISTS Roupas (id INTEGER PRIMARY KEY AUTOINCREMENT ,nome VARCHAR (50) not null, preco text not null, descricao text)',
    );
  });
}
