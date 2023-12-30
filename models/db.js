//Conexão com banco de dados
const Sequelize = require("sequelize");
const sequelize = new Sequelize('railway', 'root', 'Hcchc1g25GbaHD5befB54AFh1e6B1-CE', {
    host: "roundhouse.proxy.rlwy.net",
    port: 50627,
    dialect: 'mysql',
    dialectOptions: {
        connectTimeout: 60000
    },
});

/* Verificação de conexão ao banco de dados.
async function verificarConexao(){
    try{
        await sequelize.authenticate();
        console.log('conexão bem sucedida!!');
    }catch(error){
        console.error('erro ao conectar ao banco de dados:', error);
    }
}

verificarConexao()
*/

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}