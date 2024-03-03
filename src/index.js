const express = require('express')
const app = express()

app.use(express.json())



const { gerarNumero } = require('./gerador_numerico')

app.get('/gerarNumeros', gerarNumero);










app.listen(3000);