import { timeStamp } from "console";
import  Sequelize  from "sequelize";
const db= new Sequelize('bienesraices_node_mvc','root','admin',{
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    define:{
        timeStamp:true
    },
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    operatorAliases: false
});

export default db;