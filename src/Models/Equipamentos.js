import { openDb } from '../configDB.js';

export async function createTableEquipamentos(){
  openDb().then(db=>{
    db.exec('CREATE TABLE IF NOT EXISTS Equipamentos (id INTEGER PRIMARY KEY AUTOINCREMENT ,nome VARCHAR (50) not null, preco int not null, descricao text)')
  })
}
