const sequelize = require("../config/Database");

const Cliente = require("../model/Cliente");
const Contem = require("../model/Contem");
const DescricaoServico = require("../model/DescricaoServico");
const EstadoPedido = require("../model/EstadoPedido");
const Orcamento = require("../model/Orcamento");
const Servico = require("../model/Servico");
const TipoServico = require("../model/TipoServico");

sequelize.sync({
    //force:true
})

module.exports = {
    //------------Orçamento------------------
    //Listar Orçamentos
    async listOrcamentos(req,res) {
        await Orcamento.findAll({})
        .then((data) => {
            res.json({success:true, message:"Lista de orçamentos enviada", data:data});
        })
        .catch(err => {
            console.log("Erro no listOrçamento " + err);
            res.json({success:false, message:err.message});
        })
    },

    //Encontra Orçamento através do Id
    async getOrcamento(req,res) {
        const { id } = req.params; //vai buscar o que esta no url

        await Orcamento.findOne({
            where: { id: id },
            include: [{
                Cliente
            },{
                EstadoPedido
            }]  
        })
        .then((data) => {
            if(data != null)
                res.json({success:true, message:"Orçamento encontrado", data:data});
            else
                res.json({success:false, message:"Orçamento não existe"});
        })
        .catch(err => {
            console.log("Erro no getOrcamento: " + err);
            res.json({success:false, message:err.message});
        });
    },

    //Criar Orçamento
    async createOrcamento(req,res) {
        const { clientNome ,estado, valor, nomeDescricaoProduto } = req.body;

        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        console.log(date);
    
        const clientId = await Cliente.findOne({
            where: { nome: clientNome }
        })
        console.log(clientId)
    
        const estadoId = await EstadoPedido.findOne({
            where: { estado: estado }
        })
        console.log(estadoId)

        const orcamento = await Orcamento.create({
            estado_pedido_id: estadoId.id,
            cliente_id: clientId.id,
            valor: valor,
            data_orcamento: date
        })
        .then((data) => {
            res.json({success:true, message:"Criado com sucesso um novo Orçamento", data:data});
            return data
        })
        .catch(err => {
            console.log("Erro no createOrcamento: " + err);
            res.json({success:false, message:err.message});
        });

        const descricao = await DescricaoServico.findOne({
            where: { descricao: nomeDescricaoProduto }
        })
        console.log(descricao)

        await Contem.create({
            quantidade: 2,
            valor: 150,
            descricao_servico_id: descricao.id,
            orcamento_id: orcamento.id
        })
    },

    //------------Clientes------------------
    //Listar Clientes
    async listClients(req,res) {
        await Cliente.findAll({})
        .then(function(data) {
            res.json({success:true, message:"Lista de clientes enviada", data:data});
            return data
        })
        .catch(err => {
            console.log("Erro no listClientes " + err);
            res.json({success:false, message:err.message});
        });
    },

    //Encontra Cliente by Id
    async getClients(req,res) {
        const { id } = req.params; //vai buscar o que esta no url

        await Cliente.findOne({
            where: { id: id }
        })
        .then((data) => {
            if(data != null)
                res.json({success:true, message:"Cliente encontrado", data:data});
            else
                res.json({success:false, message:"Client não existe"});
        })
        .catch(err => {
            console.log("Erro no getClient: " + err);
            res.json({success:false, message:err.message});
        });
    },

    //Criar clientes
    async createClient(req,res) {
        const { nome, telefone, email, empresa, morada, codigoPostal, localidade, numeroFiscal} = req.body;

        const allClients = await Cliente.findAll({})
        console.log(allClients)
    
        await Cliente.create({
            nome: nome,
            telefone: telefone,
            email: email,
            empresa: empresa,
            morada: morada,
            codigoPostal: codigoPostal,
            localidade: localidade,
            numeroFiscal: numeroFiscal
        })
        .then((data) => {
            res.json({success:true, message:"Criado com sucesso um novo cliente", data:data});
        })
        .catch(err => {
            console.log("Erro no createClient: " + err);
            res.json({success:false, message:err.message});
        });
    },

    //Update clientes
    async updateClient(req,res) {
        const { id } = req.params;

        const { nome, telefone, email, empresa, morada, codigoPostal, localidade, numeroFiscal} = req.body;
    
        await Cliente.update({
            nome: nome,
            telefone: telefone,
            email: email,
            empresa: empresa,
            morada: morada,
            codigoPostal: codigoPostal,
            localidade: localidade,
            numeroFiscal: numeroFiscal
        },{
            where: {id: id},
            returning: true 
        })
        .then((data) => {
            res.json({success:true, message:"Atualizou com sucesso o cliente", data:data})
        })
        .catch(err => {
            console.log("Erro no updateClient: " + err);
            res.json({success:false, message:err.message});
        })
    },

}