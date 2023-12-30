const db = require('./db');

const Registro = db.sequelize.define('registros',{
    tipo: {
        type: db.Sequelize.STRING
    },
    dataRegistro: {
        type: db.Sequelize.DATE
    },
    linha: {
        type: db.Sequelize.STRING
    },
    mot: {
        type: db.Sequelize.STRING
    },
    veiculo: {
        type: db.Sequelize.STRING
    },
    carreta: {
        type: db.Sequelize.STRING
    },
},
{timestamps: false}
);

module.exports = Registro