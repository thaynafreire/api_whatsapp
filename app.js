/**********************************
 * Objetivo: API para retornar dados de perfil, contatos e conversas do usuário
 * Data: 11/02/2025
 * Autora: Thayná de Oliveira Freire
 * Versão 1.0
 */

const express = require('express');
const cors = require('cors');
const functionsContatos = require('./modulo/funcoes.js');

const app = express();
app.use(cors());


app.get('/v1/whatsapp/data/user/contacts/', async function(request, response) {
    let id = parseInt(request.query.id);
    let contatos = functionsContatos.getTodosOsContatos(id);

    if (contatos) {
        response.status(200).json(contatos);
    } else {
        response.status(404).json({ 'status': 404, 'message': "Not found" });
    }
});


app.get('/v1/whatsapp/data/user/unalterable/', async function(request, response) {
    let id = parseInt(request.query.id);
    let dados = functionsContatos.getDadosUsuarioN(id);

    if (dados) {
        response.status(200).json(dados);
    } else {
        response.status(404).json({ 'status': 404, 'message': "Not found" });
    }
});

app.get('/v1/whatsapp/data/user/editable/', async function(request, response) {
    let id = parseInt(request.query.id);
    let dados = functionsContatos.getDadosUsuarioA(id);

    if (dados) {
        response.status(200).json(dados);
    } else {
        response.status(404).json({ 'status': 404, 'message': "Not found" });
    }
});

app.get('/v1/whatsapp/data/contact/user/', async function(request, response) {
    let id = parseInt(request.query.id);
    let dados = functionsContatos.getDadosDeCadaUsuario(id);

    if (dados) {
        response.status(200).json(dados);
    } else {
        response.status(404).json({ 'status': 404, 'message': "Not found" });
    }
});

app.get('/v1/whatsapp/data/user/conversations/', async function(request, response) {
    let id = parseInt(request.query.id);
    let dados = functionsContatos.getListaDeConversas(id);

    if (dados) {
        response.status(200).json(dados);
    } else {
        response.status(404).json({ 'status': 404, 'message': "Not found" });
    }
});

app.get('/v1/whatsapp/filter/contact/', async function(request, response) {
    let id = parseInt(request.query.id);
    let name = request.query.name;
    let dados = functionsContatos.filtroIdENome(id, name);

    if (dados) {
        response.status(200).json(dados);
    } else {
        response.status(404).json({ 'status': 404, 'message': "Not found" });
    }
});

app.get('/v1/whatsapp/filter/messages/', async function(request, response) {
    let id = parseInt(request.query.id);
    let name = request.query.name;
    let word = request.query.word;
    let dados = functionsContatos.filtroPalavraChave(id, name, word);

    if (dados) {
        response.status(200).json(dados);
    } else {
        response.status(404).json({ 'status': 404, 'message': "Not found" });
    }
});

app.listen(8080, function() {
    console.log('API aguardando requisição');
});


//testes
//http://localhost:8080/v1/whatsapp/data/user/unalterable/?id=1
//http://localhost:8080/v1/whatsapp/data/user/editable/?id=1
//http://localhost:8080/v1/whatsapp/data/contact/user/?id=1
//http://localhost:8080/v1/whatsapp/data/user/conversations/?id=1
//http://localhost:8080/v1/whatsapp/filter/contact/?id=1&name=Ana Maria
//http://localhost:8080/v1/whatsapp/filter/messages/?id=1&name=Ana Maria&word=hello