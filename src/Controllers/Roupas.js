import { openDb } from '../configDB.js';

export async function slectRoupas(req, res) {
  openDb().then((db) => {
    db.all('SELECT * FROM Roupas').then((roupas) => res.json(roupas));
  });
}

export async function slectRoupa(req, res) {
  let id = req.params.id;
  openDb().then((db) => {
    db.get('SELECT * FROM Roupas WHERE id=?', [id]).then((entrada) =>
      res.json(entrada),
    );
  });
}

export async function insertRoupas(req, res) {
  let roupas = req.body;
  openDb().then((db) => {
    db.run(
      'INSERT INTO Roupas (id, nome, preco, descricao) VALUES (?,?, ?, ?)',
      [roupas.id, roupas.nome, roupas.preco, roupas.descricao],
    );
  });
  res.json({
    statusCode: 200,
  });
}

export async function updateRoupas(req, res) {
  const nome = req.body.nome;
  const preco = req.body.preco;
  const descricao = req.body.descricao;
  const id = req.params.id;
  openDb().then((db) => {
    db.run('UPDATE Roupas SET nome=?,preco=?, descricao=? WHERE id=?', [
      nome,
      preco,
      descricao,
      id,
    ]);
  });
  res.json({
    statusCode: 200,
  });
}

export async function deleteRoupa(req, res) {
  let id = req.params.id;
  openDb().then((db) => {
    db.get('DELETE FROM Roupas WHERE id=?', [id]).then((res) => res);
  });
  res.json({
    statusCode: 200,
  });
}
