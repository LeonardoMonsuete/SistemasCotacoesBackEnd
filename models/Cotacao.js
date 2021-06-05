import db from './db.js'
import Usuario from './Usuario.js'

const Cotacao = db.sequelize.define('cotacoes', {
    prazo: {
        type: db.Sequelize.DATE
    }
})

Cotacao.Usuario = Cotacao.belongsTo(Usuario, {as: "solicitante", foreignKey: { allowNull: false }})

export default Cotacao;