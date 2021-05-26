import express from 'express'
import Usuario from '../models/Usuario.js'

const router = express.Router()

// /usuarios

//TODO: Implementar função de login
//TODO: Fazer Hasheamento da senha ao criar usuario
//TODO: Não alterar senha no put
//TODO: Criar funcao de alterar senha

router.get('/', (req,res) => { //Mostrar todos os usuarios
    Usuario.findAll({order: [['id', 'DESC']]}).then(function(usuarios){
        res.send(usuarios)
    })
})

router.get('/:id', (req,res) => { //Mostrar usuario especifico
    Usuario.findOne({where: {id: req.params.id}}).then((usuario) => {
        if(usuario) {
            res.send(usuario)
        } else {
            res.send({message: "Usuario não Encontrado"})
        }
    })
})

router.post('/', (req,res) => { //Cria usuario
    Usuario.create({
        nome: req.body.nome,
        cargo: req.body.cargo,
        login: req.body.login,
        senha: req.body.senha
    }).then(function(usuario){
        res.send(usuario);
    }).catch(function(erro){
        res.send({message: "Ocorreu um erro: " + erro})
    })
})

router.put('/:id', (req,res) => { //Editar usuario especifico
    Usuario.update({
        nome: req.body.nome,
        cargo: req.body.cargo,
        login: req.body.login,
        senha: req.body.senha
    }, {where: {'id': req.params.id}}).then(function(usuario){
        console.log(usuario)
        if(usuario && usuario[0] > 0) {
            res.send({message: "Usuario alterado"})
        } else {
            res.send({message: "Usuario não Encontrado"})
        }
    }).catch(function(erro){
        res.send({message: "Ocorreu um erro: " + erro})
    })
})

router.delete('/:id', (req,res) => { //Deletar um usuario
    Usuario.destroy({where: {'id': req.params.id}}).then(function(usuario){
        if(usuario) {
            res.send({message: "Usuario deletado"})
        } else {
            res.send({message: "Usuario não Encontrado"})
        }
    }).catch(function(erro){
        res.send({message: "Ocorreu um erro: " + erro})
    })
})

export default router