import express from 'express'
import Produto from '../models/Produto.js'

const router = express.Router()

// /produtos

router.get('/', (req,res) => { //Mostrar todos os produtos
    Produto.findAll({order: [['id', 'DESC']]}).then(function(produtos){
        res.send(produtos)
    })
})

router.get('/:id', (req,res) => { //Mostrar produto especifico
    Produto.findOne({where: {id: req.params.id}}).then((produto) => {
        if(produto) {
            res.send(produto)
        } else {
            res.send({message: "Produto não Encontrado"})
        }
    })
})

router.post('/', (req,res) => { //Cria produto
    Produto.create({
        nome: req.body.nome,
        medidas: req.body.medidas
    }).then(function(produto){
        res.send(produto);
    }).catch(function(erro){
        res.send({message: "Ocorreu um erro: " + erro})
    })
})

router.put('/:id', (req,res) => { //Editar produto especifico
    Produto.update({
        nome: req.body.nome,
        medidas: req.body.medidas
    }, {where: {'id': req.params.id}}).then(function(produto){
        if(produto) {
            res.send({message: "Produto alterado"})
        } else {
            res.send({message: "Produto não Encontrado"})
        }
    }).catch(function(erro){
        res.send({message: "Ocorreu um erro: " + erro})
    })
})

router.delete('/:id', (req,res) => { //Deletar um produto
    Produto.destroy({where: {'id': req.params.id}}).then(function(produto){
        if(produto) {
            res.send({message: "Produto deletado"})
        } else {
            res.send({message: "Produto não Encontrado"})
        }
    }).catch(function(erro){
        res.send({message: "Ocorreu um erro: " + erro})
    })
})

export default router