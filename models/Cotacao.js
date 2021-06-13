import db from './db.js'
import Usuario from './Usuario.js'
import Produto from './Produto.js'
import Fornecedor from './Fornecedor.js'
import Produto_Cotacao from './Produto_Cotacao.js'
import Fornecedor_Cotacao from './Fornecedor_Cotacao.js'

const Cotacao = db.sequelize.define('cotacoes', {
    prazo: {
        type: db.Sequelize.DATE
    }
})

Cotacao.Usuario = Cotacao.belongsTo(Usuario, {as: "solicitante", foreignKey: { allowNull: false }})

Cotacao.Produto = Cotacao.belongsToMany(Produto, {as: "produtos", through: Produto_Cotacao})

Produto.Cotacao = Produto.belongsToMany(Cotacao, {through: Produto_Cotacao})

Cotacao.Fornecedor = Cotacao.belongsToMany(Fornecedor, {as: "fornecedores", through: Fornecedor_Cotacao})

Fornecedor.Cotacao = Fornecedor.belongsToMany(Cotacao, {through: Fornecedor_Cotacao})

export default Cotacao;