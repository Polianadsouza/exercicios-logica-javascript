const prompt = require('prompt-sync')()  //adiciona pacote para entrada de dados
const salario = Number(prompt("Salário: R$ "))
const tempo = Number(prompt("Quantidade de anos trabalhados: "))
const quadrienios = Math.floor(tempo / 4) // calcula a quantidade de quadrienios
const acrescimo = salario * quadrienios /100
console.log(`Quadrienios: ${quadrienios}`)
console.log(`Salário final: R$ ${(salario + acrescimo).toFixed(2)}`)