import { Router } from 'express';

import {
  insertFuncionario,
  updateFuncionario,
  selectFuncionarios,
  selectFuncionario,
  deleteFuncionario,
} from './Controllers/Funcionarios.js';

import { insertRoupas,
   selectRoupa, 
   selectRoupas, 
   updateRoupas,
   deleteRoupa 
} from './Controllers/Roupas.js';

import { insertcliente, 
    updatecliente, 
    selectcliente, 
    selectclientes,
     deletecliente 
} from './Controllers/Clientes.js';

//Import CRUD da entidade  Plano
import {
      insertPlano,
      updatePlano,
      selectPlano,
      selectUmPlano,
      deleteUmPlano 
} from './Controllers/Planos.js';

import {insertEquipamentos,
  updateEquipamentos,
   selectEquipamentos,
    deleteEquipamentos,
     selectEquipamento } 
     from './Controllers/Equipamentos.js';

     import {selectUsers, login, registe } from './Controllers/Login.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    statusCode: 200,
    msg: 'Api Rodando',
  });
});
//Login
router.get('/login', selectUsers)
router.post('/login', login)
router.post('/register', registe)
//Login

// Funcionarios
router.get('/funcionarios', selectFuncionarios);
router.get('/funcionario/:id', selectFuncionario);
router.post('/funcionario', insertFuncionario);
router.put('/funcionario/:id', updateFuncionario);
router.delete('/funcionario/:id', deleteFuncionario);
// Funcionarios

// Roupas
router.get('/roupas',selectRoupas)
router.get('/roupa/:id',selectRoupa)
router.post('/roupas',insertRoupas)
router.put('/roupas/:id',updateRoupas)
router.delete('/roupas/:id',deleteRoupa)
// Roupas

//Clientes
router.get('/clientes', selectclientes);
router.get('/cliente/:id', selectcliente);
router.post('/cliente', insertcliente);
router.put('/cliente/:id', updatecliente);
router.delete('/cliente/:id', deletecliente);
//Clientes

//Planos
router.get('/plano', selectPlano);
router.get('/umplano/:id', selectUmPlano);
router.post('/plano', insertPlano);
router.put('/plano/:id', updatePlano);
router.delete('/plano/:id', deleteUmPlano);
//Planos

//Equipamentos
router.get('/equipamentos',selectEquipamentos)
router.get('/equipamentos/:id',selectEquipamento)
router.post('/equipamentos',insertEquipamentos)
router.put('/equipamentos/:id',updateEquipamentos)
router.delete('/equipamentos/:id',deleteEquipamentos)
//Equipamentos
export default router;
