import db from './db.js'

const Fornecedor = db.sequelize.define('fornecedores', {
    nome: {
        type: db.Sequelize.STRING
    },

    cnpj: {
        type: db.Sequelize.STRING
    },

    email: {
        type: db.Sequelize.STRING
    },

    telefone: {
        type: db.Sequelize.STRING
    }
})

export default Fornecedor;