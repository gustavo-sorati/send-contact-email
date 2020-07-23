const Contato = require('../../migrations/contato/Contato');

async function insert(name, sobrenome, email, msg){
    await Contato.Contato.create({
        name: name,
        surname: sobrenome,
        email,
        mensagem: msg
    })
};

module.exports = {
    insert
}