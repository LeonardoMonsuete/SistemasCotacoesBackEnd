import db from './db.js'

const Produto = db.sequelize.define('produtos', {
    nome: {
        type: db.Sequelize.STRING
    },

    medidas: {
        type: db.Sequelize.TEXT
    }
})

Produto.ProdutoPai = Produto.belongsTo(Produto, {as: "produtoPai"})

export default Produto;