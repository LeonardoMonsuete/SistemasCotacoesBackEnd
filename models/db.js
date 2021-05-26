import Sequelize from 'sequelize'
const sequelize = new Sequelize('sistema_cotacao', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.sync()

export default {
    Sequelize: Sequelize,
    sequelize: sequelize
}