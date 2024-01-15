import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize; 

const Story = db.define('stories',{
    title: DataTypes.STRING, 
    author: DataTypes.STRING,
    synopsis: DataTypes.TEXT,
    category: DataTypes.STRING,
    cover: DataTypes.STRING,
    tags: DataTypes.STRING,
    status: DataTypes.STRING

}, {
    freezeTableName: true
});

export default Story; 

(async()=>{
    await db.sync();
})();