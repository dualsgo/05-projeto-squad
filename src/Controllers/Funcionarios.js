import { openDb } from '../configDB.js';

export async function selectFuncionarios(req, res) {
  openDb().then((db) => {
    db.all('SELECT * FROM Funcionarios').then((funcionarios) =>
      res.json(funcionarios)
    );
  });
}

export async function selectFuncionario(req, res) {
  let id = req.params.id;
  openDb().then((db) => {
    db.get('SELECT * FROM Funcionarios WHERE id=?', [id]).then((pessoa) =>
      res.json(pessoa)
    );
  });
}

export async function insertFuncionario(req, res) {
  let funcionario = req.body;
  openDb().then((db) => {
    db.run(
      'INSERT INTO Funcionarios (nome, sobrenome, cargo) VALUES (?, ?, ?)',
      [funcionario.nome, funcionario.sobrenome, funcionario.cargo]
    );
  });
  res.json({
    statusCode: 200,
  });
}

export async function updateFuncionario(req, res) {
  const nome = req.body.nome;
  const sobrenome = req.body.sobrenome;
  const cargo = req.body.cargo;
  const id = req.params.id;
  openDb().then((db) => {
    db.run('UPDATE Funcionarios SET nome=?, sobrenome=?, cargo=? WHERE id=?', [
      nome,
      sobrenome,
      cargo,
      id,
    ]);
  });
  res.json({
    statusCode: 200,
  });
}

export async function deleteFuncionario(req, res) {
  let id = req.params.id;
  openDb().then((db) => {
    db.get('DELETE FROM Funcionarios WHERE id=?', [id]).then((res) => res);
  });
  res.json({
    statusCode: 200,
  });
}
