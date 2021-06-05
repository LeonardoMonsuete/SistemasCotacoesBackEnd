import Sequelize from 'sequelize'

if(process.env.DATABASE_URL) {
    var sequelize = new Sequelize(process.env.DATABASE_URL,
        {
          dialect: "postgres",
          protocol: "postgres",
          dialectOptions: {
              ssl: true
          }
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