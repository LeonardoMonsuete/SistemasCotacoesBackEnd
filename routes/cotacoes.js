import express from 'express'
import Cotacao from '../models/Cotacao.js'

const router = express.Router()

// /cotacoes

router.get('/', (req,res) => { //Mostrar todas as Cotacoes
    Cotacao.findAll({
        order: [['id', 'DESC']],
        include: [{
            association: Cotacao.Usuario
        }]
    })
        .then(function(cotacoes){
        res.send(cotacoes)
    })
})


router.get('/:id', (req,res) => { //Mostrar cotacao especifico
    Cotacao.findOne({
        where: {id: req.params.id},
        include: [{
            association: Cotacao.Usuario
        }]
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
        }]
    }).then(function(cotacoes){
        res.send(cotacoes);
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
        res.send({message: "Ocorreu um erro: " + erro})
    })
})


export default router