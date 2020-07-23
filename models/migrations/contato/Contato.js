const db = require('../../database')

const Contato = db.sequelize.define('contatos', {
    name: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    surname: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    mensagem: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
})

Contato.sync();

module.exports = {
    Contato
}