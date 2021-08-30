const mongoose = require('mongoose');
const Candidate = require('../models/Candidates');

module.exports = { //Exportando as funcionalidades que meu candidate controller tenha
    async register(req, res) {

        const { nome, cargo, nascimento, ecivil, genero,
               endereco, bairro, cidade, cep, telefone1,
               telefone2, celular, contato, email, identidade,
               cpf, veiculo, habilitacao } = req.body;

        const newCandidate = new Candidate();
        
        newCandidate.nome = nome;
        newCandidate.cargo = cargo;
        newCandidate.nascimento= nascimento;
        newCandidate.ecivil = ecivil;
        newCandidate.genero = genero;
        newCandidate.endereco = endereco;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.cep = cep;
        newCandidate.telefone1 = telefone1;
        newCandidate.telefone2 = telefone2;
        newCandidate.celular = celular;
        newCandidate.contato = contato;
        newCandidate.email = email;
        newCandidate.identidade = identidade;
        newCandidate.cpf = cpf;
        newCandidate.veiculo = veiculo;
        newCandidate.habilitacao = habilitacao;

        await newCandidate.save();
        
        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Deu ruim');
        }

        return res.status(200).send(savedCandidate);
        
        });

    },
};

