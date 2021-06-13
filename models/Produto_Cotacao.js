import db from './db.js'

const Produto_Cotacao = db.sequelize.define('Produto_Cotacao', {
    quantidade: {
        type: db.Sequelize.INTEGER
    },
  }, { timestamps: false });

export default Produto_Cotacao;