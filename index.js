//Criando instância do express
    const express = require("express");
    const app = express();

//Importanto modulo Registro
    const Registro = require('./models/Registro');

//Criando instância body-parse
    const bodyParser = require('body-parser');

    //Configuração Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())


//Criação e rota principal
    app.get("/", function(req, res){
        res.sendFile(__dirname + "/views/index.html");
    });

//Rota para envio do formulario, para uma rota de envio de informação/formulario é preciso que seja usado o metodo POST
    app.post("/registro",function(req, res){
        Registro.create({
            tipo: req.body.registro,
            dataRegistro: req.body.data,
            linha: req.body.linha,
            mot: req.body.mot,
            veiculo: req.body.veiculo,
            carreta: req.body.carreta
        }).then(function(){
            res.redirect('/')
        })
        .catch(error => {
            // Tratamento de erro
            console.error('Erro ao inserir dados no banco de dados:', error);
            res.status(500).send('Erro ao inserir dados no banco de dados');
        });
        })

//Rota para exibir dados
        app.get("/registro", function(req, res){
            Registro.findAll().then(registro => {
                res.json(registro);
            }).catch(error => {
                console.log("Erro ao recuperar dados do banco de dados", error);
                res.status(500).json({ erro:"Erro ao recuperar dados do banco de dados"})
            })
        })

/*Abertura de servidor na porta 8081
    app.listen(8081,function(){
        console.log("Servidor Rodando!!")
    });*/
