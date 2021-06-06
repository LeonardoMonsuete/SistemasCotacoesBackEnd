import express from 'express'
import Fornecedor from '../models/Fornecedor.js'

const router = express.Router()

// /fornecedores

router.get('/', (req,res) => { //Mostrar todos os fornecedores
    Fornecedor.findAll({order: [['id', 'DESC']]}).then(function(fornecedores){
        res.send(fornecedores)
    })
})

router.get('/:id', (req,res) => { //Mostrar fornecedor especifico
    Fornecedor.findOne({where: {id: req.params.id}}).then((fornecedor) => {
        if(fornecedor) {
            res.send(fornecedor)
        } else {
            res.send({message: "Fornecedor não Encontrado"})
        }
    })
})

router.post('/', (req,res) => { //Cria fornecedor
    Fornecedor.create({
        nome: req.body.nome,
        cnpj: req.body.cnpj,
        email: req.body.email,
        telefone: req.body.telefone
    }).then(function(fornecedor){
        res.send(fornecedor);
    }).catch(function(erro){
        res.status(500)
        res.send({message: "Ocorreu um erro: " + erro})
    })
})

router.put('/:id', (req,res) => { //Editar fornecedor especifico
    Fornecedor.update({
        nome: req.body.nome,
        cnpj: req.body.cnpj,
        email: req.body.email,
    }, {where: {'id': req.params.id}}).then(function(fornecedor){
        if(fornecedor) {
            res.send({message: "Fornecedor alterado"})
        } else {
            res.send({message: "Fornecedor não Encontrado"})
        }
    }).catch(function(erro){
        res.status(500)
        res.send({message: "Ocorreu um erro: " + erro})
    })
})

router.delete('/:id', (req,res) => { //Deletar um fornecedor
    Fornecedor.destroy({where: {'id': req.params.id}}).then(function(fornecedor){
        if(fornecedor) {
            res.send({message: "Fornecedor deletado"})
        } else {
            res.send({message: "Fornecedor não Encontrado"})
        }
    }).catch(function(erro){
        res.status(500)
        res.send({message: "Ocorreu um erro: " + erro})
    })
})

export default router