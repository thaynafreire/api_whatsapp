const contatosN = require('./contatos.js')


const getDadosUsuarioN = function (id) {
    let dadoNaoAlteravel = null


    contatosN.contatos["whats-users"].forEach(function (usuario) {
        if (usuario.id === id) {
            dadoNaoAlteravel = {
                id: usuario.id,
                account: usuario.account,
                "created-since": usuario["created-since"],
                number: usuario.number
            }
        }
    })

    return dadoNaoAlteravel|| false
}


//console.log(getDadosUsuarioN(4))

const contatosM = require('./contatos.js')


const getDadosUsuarioA = function (id) {
    let dadoAlteravel = null


    contatosM.contatos["whats-users"].forEach(function (usuario) {
        if (usuario.id === id) {
            dadoAlteravel = {
                nickname: usuario.nickname,
                "profile-image": usuario["profile-image"],
                background: usuario.background
            }
        }
    })

    return dadoAlteravel || false
}

//console.log(getDadosUsuarioA(4))

const contatosU = require('./contatos.js')


const getDadosDeCadaUsuario = function (id) {
    let dadoUsuario = null


    contatosU.contatos["whats-users"].forEach(function (usuario) {
        if (usuario.id === id) { 
    
            dadoUsuario = {
                nome: usuario.contacts[0].name,
                descrição: usuario.contacts[0].description,
                imagem: usuario.contacts[0].image
            }
        }
    })

    return dadoUsuario || false
}

//console.log(getDadosDeCadaUsuario(1))

const contatosL = require('./contatos.js')


const getListaDeConversas = function (id) {
    let ConversasUsuario = null


    contatosL.contatos["whats-users"].forEach(function (usuario) {
        if (usuario.id === id) {
            ConversasUsuario = {
               conversas: usuario.contacts


            }
        }
    })

    return ConversasUsuario || false
}

//console.log(getListaDeConversas(1))

const ContatosFiltro = require('./contatos.js')
const usuarios = ContatosFiltro.contatos["whats-users"]

function filtroIdENome(id, Contato) {
    const idUsuario = id
    const nome = Contato
    const dadosDoUsuario = { id: idUsuario, messages: [] }
    let encontrado = false

    usuarios.forEach(function(user) {
        if (user.id === idUsuario) {
            user.contacts.forEach(function(contact) {
                if (nome === contact.name) {
                    encontrado = true
                    dadosDoUsuario.messages = contact.messages
                }
            })
        }
    })

    return encontrado ? dadosDoUsuario : encontrado
}


//console.log(filtroIdENome((1), "Ana Maria"))


function filtroPalavraChave(idDoUsuario, Contatos, palavraChave) {
    const idUsuario = idDoUsuario
    const nome = Contatos
    const palavra = palavraChave.toLowerCase()
    const dadosDoUsuario = { id: idUsuario, contact: nome, messages: [] }
    let encontrado = false

    usuarios.forEach(function(user) {
        if (user.id === idUsuario) {
            user.contacts.forEach(function(contact) {
                if (nome === contact.name) {
                    contact.messages.forEach(function(message) {
                        if (message.content.toLowerCase().includes(palavra)) {
                            encontrado = true
                            dadosDoUsuario.messages.push(message)
                        }
                    })
                }
            })
        }
    })

    return encontrado ? dadosDoUsuario : encontrado
}


//console.log(filtroPalavraChave((1), "Ana Maria", "great"));


module.exports = {
    getDadosUsuarioN,
    getDadosUsuarioA,
    getDadosDeCadaUsuario,
    getListaDeConversas,
    filtroIdENome,
    filtroPalavraChave
}

