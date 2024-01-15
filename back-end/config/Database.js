import { Sequelize } from "sequelize";

const db = new Sequelize('bigio_web', 'root', '',{
    host: 'localhost', 
    dialect: 'mysql'
});

export default db; 