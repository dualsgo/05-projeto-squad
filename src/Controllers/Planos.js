import { openDb } from '../configDB.js';

export async function selectPlano(req, res) {
    openDb()
        .then(db => {
            db.all('SELECT * FROM plano')
                .then(plano => res.json(plano))
        })
}

export async function selectUmPlano(req, res) {
    let id = req.params.id;
    openDb()
        .then(db => {
            db.get('SELECT * FROM plano WHERE id=?', [id])
                .then(plano => res.json(plano))
        })
}

export async function insertPlano(req, res) {
    let nome = req.body;
    openDb()
        .then(db => {
            db.run('INSERT INTO plano (nome,preco,descricao) VALUES (?,?,?)', [nome.nome, nome.preco, nome.descricao]);
            res.json({
                "statusCode": 200
            })
        })
}

export async function updatePlano(req, res) {
    const nome = req.body.nome;
    const preco = req.body.preco;
    const descricao = req.body.descricao;
    const id = req.params.id;
    openDb()
        .then(db => {
            db.run('UPDATE plano SET nome=? ,preco=? ,descricao=? WHERE id=?', [nome, preco, descricao, id]);
            res.json({
                "statusCode": 200
            })
        })
}



export async function deleteUmPlano(req, res) {
    let id = req.params.id;
    openDb()
        .then(db => {
            db.get('DELETE FROM plano WHERE id=?', [id]).then(res => res)
        })
    res.json({
        "statusCode": 200
    })
}