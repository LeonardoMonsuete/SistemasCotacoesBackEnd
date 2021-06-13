import db from './db.js'

const Fornecedor_Produto_Cotacao = db.sequelize.define('fornecedor_produto_cotacao', {
    cotacaoId: {
        type: db.Sequelize.INTEGER
    },

    produtoId: {
        type: db.Sequelize.INTEGER
    },

    fornecedorId: {
        type: db.Sequelize.INTEGER
    },

    codigo_fornecedor: {
        type: db.Sequelize.STRING
    },

    valor: {
        type: db.Sequelize.STRING
    },

    qtd_minima: {
        type: db.Sequelize.STRING
    },

    porcentagem_imposto: {
        type: db.Sequelize.STRING
    },
})

export default Fornecedor_Produto_Cotacao;