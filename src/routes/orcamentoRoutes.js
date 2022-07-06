const express = require("express");
const router = express.Router();

// const beggingTables = require('../helper/beggingTables');
const orcamentoController = require('../controller/orcamentoController');

// router.use((req,res,next) => {
//     beggingTables.createTables()
//     next();
// })

router.get('/listOrcamento', orcamentoController.listOrcamentos);

router.get('/findOrcamento/:id', orcamentoController.getOrcamento);

router.post('/createOrcamento', orcamentoController.createOrcamento);

router.get("/listClients", orcamentoController.listClients);

router.get("/findClient/:id", orcamentoController.getClients);

router.post('/createClient', orcamentoController.createClient);

router.post('/updateClient/:id', orcamentoController.updateClient);

module.exports = router;