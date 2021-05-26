import db from './db.js'

const Produto = db.sequelize.define('produtos', {
    nome: {
        type: db.Sequelize.STRING
    },

    medidas: {
        type: db.Sequelize.TEXT
    }
})

export default Produto;