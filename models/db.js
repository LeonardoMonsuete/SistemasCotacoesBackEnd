import Sequelize from 'sequelize'

if(process.env.DATABASE_URL) {
    var sequelize = new Sequelize(process.env.DATABASE_URL,
        {
          dialect: "postgres",
          protocol: "postgres",
          port: 5432,
          host: "localhost",
          logging: false //false
       });
} else {
    var sequelize = new Sequelize('sistema_cotacao', 'root', 'admin', {
        host: 'localhost',
        dialect: 'mysql'
    })
}


sequelize.sync()

export default {
    Sequelize: Sequelize,
    sequelize: sequelize
}