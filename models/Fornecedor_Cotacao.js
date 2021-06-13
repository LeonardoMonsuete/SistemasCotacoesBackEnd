import db from './db.js'

const Fornecedor_Cotacao = db.sequelize.define('Fornecedor_Cotacao',{}, { timestamps: false });

export default Fornecedor_Cotacao;