import db from './db.js'

const Usuario = db.sequelize.define('usuarios', {
    nome: {
        type: db.Sequelize.STRING
    },

    cargo: {
        type: db.Sequelize.STRING
    },

    login: {
        type: db.Sequelize.STRING
    },

    senha: {
        type: db.Sequelize.STRING
    }
})

export default Usuario;