const sequelize = require("../config/Database");

const Cliente = require("../model/Cliente");
const Contem = require("../model/Contem");
const DescricaoServico = require("../model/DescricaoServico");
const EstadoPedido = require("../model/EstadoPedido");
const Orcamento = require("../model/Orcamento");
const Servico = require("../model/Servico");
const TipoServico = require("../model/TipoServico");

//Inicia a base de dados criando as tabelas no pgAdmin
sequelize.sync({
    //force: true //Faz a confirmação que ainda n existem as tabelas, caso exista elimina e cria novas
});

module.exports = {
    async createTables(req,res) {
        await EstadoPedido.create({
            estado: "Novo"
        })
        await EstadoPedido.create({
            estado: "Em tratamento"
        })
        await EstadoPedido.create({
            estado: "Enviado"
        })
        await EstadoPedido.create({
            estado: "Confirmado"
        })
        await EstadoPedido.create({
            estado: "Cancelado"
        })

        await TipoServico.create({
            tipo_servico: "Marketing Digital"
        })
        await TipoServico.create({
            tipo_servico: "Desgin Gráfico"
        })
        await TipoServico.create({
            tipo_servico: "Website e Loja Online"
        })
        await TipoServico.create({
            tipo_servico: "Comunicação e Consultoria"
        })

        await Servico.create({
            tipo_servico_id: 1,
            nome: "1 Pack"
        })
        await Servico.create({
            tipo_servico_id: 1,
            nome: "2.1 Rede Social Facebook"
        })
        await Servico.create({
            tipo_servico_id: 1,
            nome: "2.2 Rede Social Instagram"
        })
        await Servico.create({
            tipo_servico_id: 1,
            nome: "2.3 Rede Social Twitter"
        })
        await Servico.create({
            tipo_servico_id: 1,
            nome: "2.4 Rede Social TikTok"
        })
        await Servico.create({
            tipo_servico_id: 1,
            nome: "2.5 Rede Social LinkedIn"
        })
        await Servico.create({
            tipo_servico_id: 1,
            nome: "2.6 Rede Social Youtube"
        })
        await Servico.create({
            tipo_servico_id: 1,
            nome: "2.7 Rede Social Google My Business"
        })
        await Servico.create({
            tipo_servico_id: 1,
            nome: "3"
        })
        await Servico.create({
            tipo_servico_id: 1,
            nome: "4"
        })
        await Servico.create({
            tipo_servico_id: 1,
            nome: "5"
        })
        await Servico.create({
            tipo_servico_id: 1,
            nome: "6"
        })
        await Servico.create({
            tipo_servico_id: 1,
            nome: "7"
        })
        await Servico.create({
            tipo_servico_id: 1,
            nome: "8"
        })
        await Servico.create({
            tipo_servico_id: 1,
            nome: "9"
        })
        await Servico.create({
            tipo_servico_id: 1,
            nome: "10"
        })

        await Servico.create({
            tipo_servico_id: 1,
            nome: "11 Pack Media"
        })
        await Servico.create({
            tipo_servico_id: 1,
            nome: "12.1 PP Estratégia Digital"
        })
        await Servico.create({
            tipo_servico_id: 1,
            nome: "12.2 PP Criação de Campanhas e anúncios"
        })
        await Servico.create({
            tipo_servico_id: 1,
            nome: "12.3 PP Segmentação do Público"
        })
        await Servico.create({
            tipo_servico_id: 1,
            nome: "12.4 PP Otimização da Campanha"
        })
        await Servico.create({
            tipo_servico_id: 1,
            nome: "12.5 PP Relatório Mensal"
        })
        await Servico.create({
            tipo_servico_id: 1,
            nome: "12.6 PP Criação Conversões Tag Manager"
        })
        await Servico.create({
            tipo_servico_id: 1,
            nome: "12.7 PP Gestão de Campanhas"
        })

        await Servico.create({
            tipo_servico_id: 1,
            nome: "13 Pack Email e SMS Marketing"
        })
        await Servico.create({
            tipo_servico_id: 1,
            nome: "14.1 PP Email"
        })
        await Servico.create({
            tipo_servico_id: 1,
            nome: "14.2 PP SMS Marketing"
        })
        await Servico.create({
            tipo_servico_id: 1,
            nome: "14.3"
        })
        await Servico.create({
            tipo_servico_id: 1,
            nome: "15"
        })
        await Servico.create({
            tipo_servico_id: 1,
            nome: "16"
        })
        await Servico.create({
            tipo_servico_id: 1,
            nome: "17"
        })
        await Servico.create({
            tipo_servico_id: 1,
            nome: "18"
        })


        await Servico.create({
            tipo_servico_id: 2,
            nome: "1 Criação de Logótipo"
        })
        await Servico.create({
            tipo_servico_id: 2,
            nome: "2"
        })
        await Servico.create({
            tipo_servico_id: 2,
            nome: "3"
        })
        await Servico.create({
            tipo_servico_id: 2,
            nome: "4"
        })
        await Servico.create({
            tipo_servico_id: 2,
            nome: "5"
        })
        await Servico.create({
            tipo_servico_id: 2,
            nome: "6"
        })
        await Servico.create({
            tipo_servico_id: 2,
            nome: "7"
        })
        await Servico.create({
            tipo_servico_id: 2,
            nome: "8"
        })


        await Servico.create({
            tipo_servico_id: 3,
            nome: "1 Número de Páginas"
        })
        await Servico.create({
            tipo_servico_id: 3,
            nome: "2"
        })
        await Servico.create({
            tipo_servico_id: 3,
            nome: "3"
        })
        await Servico.create({
            tipo_servico_id: 3,
            nome: "4"
        })
        await Servico.create({
            tipo_servico_id: 3,
            nome: "5"
        })
        await Servico.create({
            tipo_servico_id: 3,
            nome: "6 Packs"
        })
        await Servico.create({
            tipo_servico_id: 3,
            nome: "7.1 PP Espaço em Disco"
        })
        await Servico.create({
            tipo_servico_id: 3,
            nome: "7.2 PP Domínios Permitidos"
        })
        await Servico.create({
            tipo_servico_id: 3,
            nome: "7.3 PP Base de Dados"
        })
        await Servico.create({
            tipo_servico_id: 3,
            nome: "7.4 PP Contas de Email"
        })
        await Servico.create({
            tipo_servico_id: 3,
            nome: "7.5 PP Certificado SSL"
        })
        await Servico.create({
            tipo_servico_id: 3,
            nome: "7.6"
        })
        await Servico.create({
            tipo_servico_id: 3,
            nome: "7.7"
        })
        await Servico.create({
            tipo_servico_id: 3,
            nome: "8 Registo Domínio (Anual)"
        })


        await Servico.create({
            tipo_servico_id: 4,
            nome: "1"
        })
        await Servico.create({
            tipo_servico_id: 4,
            nome: "2"
        })
        await Servico.create({
            tipo_servico_id: 4,
            nome: "3"
        })
        await Servico.create({
            tipo_servico_id: 4,
            nome: "4"
        })

        await DescricaoServico.create({
            servico_id: 1,
            descricao: "Start",
            preco: 100
        })
        await DescricaoServico.create({
            servico_id: 1,
            descricao: "Boost",
            preco: 150
        })
        await DescricaoServico.create({
            servico_id: 1,
            descricao: "Boomb",
            preco: 250
        })
    
    }
}