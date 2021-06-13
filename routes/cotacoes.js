import express from 'express'
import Cotacao from '../models/Cotacao.js'
import Produto_Cotacao from '../models/Produto_Cotacao.js'
import Fornecedor_Cotacao from '../models/Fornecedor_Cotacao.js'
import Fornecedor_Produto_Cotacao from '../models/Fornecedor_Produto_Cotacao.js'


const router = express.Router()

// /cotacoes

router.get('/', (req,res) => { //Mostrar todas as Cotacoes
    Cotacao.findAll({
        order: [['id', 'DESC']],
        include: [{
            association: Cotacao.Usuario
        },
        {
            association: Cotacao.Produto,
            as: 'produtos'
        },
        {
            association: Cotacao.Fornecedor,
            as: 'fornecedores'
        }
        ]
    })
        .then(function(cotacoes){
        res.send(cotacoes)
    })
})

router.get('/:id/:fornecedorId', (req,res) => { //Mostrar cotacao especifico
    Fornecedor_Produto_Cotacao.findAll({
        where: {cotacaoId: req.params.id, fornecedorId: req.params.fornecedorId}
    }).then((cotacoes) => {
        if(cotacoes) {
            res.send(cotacoes)
        } else {
            res.send({message: "Cotação não Encontrada"})
        }
    })
})

router.post('/:id/:fornecedorId', (req,res) => { //Cria fornecedor
    Fornecedor_Produto_Cotacao.create({
        cotacaoId: req.params.id,
        fornecedorId: req.params.fornecedorId,
        produtoId: req.body.produtoId,
        codigo_fornecedor: req.body.codigo_fornecedor,
        valor: req.body.valor,
        qtd_minima: req.body.qtd_minima,
        porcentagem_imposto: req.body.porcentagem_imposto
    }).then(function(fornecedor){
        res.send(fornecedor);
    }).catch(function(erro){
        res.status(500)
        res.send({message: "Ocorreu um erro: " + erro})
    })
})


router.get('/:id', (req,res) => { //Mostrar cotacao especifico
    Cotacao.findOne({
        where: {id: req.params.id},
        include: [{
            association: Cotacao.Usuario
        },
        {
            association: Cotacao.Produto,
            as: 'produtos'
        },
        {
            association: Cotacao.Fornecedor,
            as: 'fornecedores'
        }
        ]
    }).then((cotacoes) => {
        if(cotacoes) {
            res.send(cotacoes)
        } else {
            res.send({message: "Cotação não Encontrada"})
        }
    })
})

router.post('/', (req,res) => { //Cria fornecedor
    Cotacao.create({
        prazo: req.body.prazo,
        solicitanteId:  req.body.solicitanteId
    },{
        include: [{
            association: Cotacao.Usuario
        }
        ]
    }).then(function(cotacoes){
        let isErro = false;
        req.body.produtos.forEach(produto => {
            Produto_Cotacao.create({
                cotacoId: cotacoes.dataValues.id,
                produtoId: produto.id,
                quantidade: produto.quantidade
            }).catch(function(erro) {
                console.log(erro);
                isErro = true;
            })
        });

        req.body.fornecedores.forEach(fornecedor => {
            Fornecedor_Cotacao.create({
                cotacoId: cotacoes.dataValues.id,
                fornecedoreId: fornecedor.id
            }).catch(function(erro) {
                console.log(erro);
                isErro = true;
            })
        });
        if (isErro) {
            res.status(500)
            res.send({message: "Ocorreu um erro: " + erro})
        } else {
            res.send({message: "Sucesso"});
        }
        
    }).catch(function(erro){
        res.status(500)
        res.send({message: "Ocorreu um erro: " + erro})
    })
})

router.put('/:id', (req,res) => { //Editar fornecedor especifico
    Cotacao.update({
        prazo: req.body.prazo
    }, {
        where: {'id': req.params.id},
        include: [{
            association: Cotacao.Usuario
        }]
    }).then(function(cotacoes){
        if(cotacoes) {
            res.send({message: "Cotação alterada"})
        } else {
            res.send({message: "Cotação não Encontrada"})
        }
    }).catch(function(erro){
        res.status(500)
        res.send({message: "Ocorreu um erro: " + erro})
    })
})

router.delete('/:id', (req,res) => { //Deletar uma cotacao
    Cotacao.destroy({where: {'id': req.params.id}}).then(function(cotacoes){
        if(cotacoes) {
            res.send({message: "Cotação deletada"})
        } else {
            res.send({message: "Cotação não Encontrada"})
        }
    }).catch(function(erro){
        res.status(500)
        res.send({message: "Ocorreu um erro: " + erro})
    })
})


export default router