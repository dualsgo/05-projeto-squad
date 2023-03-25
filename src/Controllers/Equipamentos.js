import { openDb } from "../configDB.js";


export async function insertEquipamentos(req, res) {
  let Equipamentos = req.body;
    openDb().then(db=>{
      db.run('INSERT INTO Equipamentos(id,nome,preco,descricao) VALUES(?,?,?,?)',[Equipamentos.id,Equipamentos.nome,Equipamentos.preco,Equipamentos.descricao])
       });
       res.json({
        "statusCode":200
       })
}

export async function updateEquipamentos(req, res){
  const nome= req.body.nome;
  const preco= req.body.preco;
  const descricao= req.body.descricao;
  const id = req.params.id;
    openDb().then(db=>{
      db.run('UPDATE Equipamentos SET nome=?, preco=?, descricao=? WHERE id=?',[nome, preco, descricao, id])
       });
       res.json({
        "statusCode":200
       })
}

export async function selectEquipamentos(req, res) {
   openDb().then(db=>{
     db.all('SELECT * FROM Equipamentos')
    .then(Equipamentos=>res.json(Equipamentos))
     });

}

export async function selectEquipamento(req,res){
  let id = req.params.id;
   openDb()
    .then(db=>{
       db.get('SELECT * FROM Equipamentos WHERE id=?',[id])
        .then(Equipamentos=> res.json(Equipamentos));
  })
}



export async function deleteEquipamentos(req, res){
  let id = req.params.id;
   openDb().then(db=>{
     db.get('DELETE FROM Equipamentos WHERE id=?',[id])
    .then(res=>res)
     });
     res.json({
      "statusCode":200
     })
}