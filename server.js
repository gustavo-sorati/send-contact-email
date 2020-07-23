const express = require('express');
const nunjucks = require('nunjucks')
const nodemailer = require('nodemailer');

const trap = require('./config/config-email');
const insertContato = require('./models/seeders/Contato/insertInto');

const server = express();

// Configuração do nunjucks
nunjucks.configure('views', {
    express: server,
    noCache: true,
    autoescape: false,
    watch: true
})


server.set('view engine', "njk");
server.use(express.urlencoded( { extended: false}))
server.use(express.static("public"));

server.get('/contact', (req, res) => {
    res.render("contact/contact");
});

server.post('/create', (req, res) => {
    // Captura os dados que chegam do corpo do formulário
    const dados = req.body;
    let {name, sobrenome, email, boxText:msg} = dados;
    
    // Invoca o método para inserir no banco
    insertContato.insert(name, sobrenome, email, msg);
 
    // Configuração do e-mail
    let transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        secure: false, // criptografia SSL/TLS
        auth: {
            user: trap.USER,
            pass: trap.PASS,
        },
        tls: {
            rejectUnauthorized: false,
        }
    });

    transporter.sendMail({
        from: `Gustavo <${email}>`,
        to: "iguts.sorati@gmail.com", // list of receivers
        subject: `Email de: ${name}`, // Subject line
        text: `${name} e ${sobrenome}`, // plain text body
        html: `${msg}`, // html body
    }).then(message => {
        console.log(message);
    }).catch(err => {
        console.log(err);
    })

    return res.redirect('contact');
})

server.listen(5000);