/*Exercícios de interpretação de código: 
1. 
console.log(b) 
//10
console.log(a, b)
//10 , 5

2. 
console.log(a, b, c)
//10, 10, 10

3.
let workHours = prompt("Quantas horas você trabalha por dia?")
let dailySalary = prompt("Quanto você recebe por dia?")
alert(`Você recebe ${dailySalary/workHours} por hora.`)

*/

//Exercícios de escrita de código:
//1.
let name1
let age
console.log (typeof name1)
console.log (typeof age)

//d) undefined foi impresso porque não há um valor atribuido a essas variáveis.
 
name1 = prompt('Qual é o seu nome?')
age = prompt ('Qual é a sua idade?')
console.log(typeof name1)
console.log(typeof age)

//f) Notei que um tipo foi definido. prompt é um comando que por si só traz dentro uma string.

console.log('Olá',name1, ', você tem', age, 'anos.')

//2.
const questionStudent = 'Você é estudante?'
const questionWork = 'Você trabalha?'
const questionChildren = 'Você tem filhos?'

const answerStudent = prompt(questionStudent)
const answerWork = prompt(questionWork)
const answerChildren = prompt(questionWork)

console.log(questionStudent, ' - ', answerStudent)
console.log(questionWork, ' - ', answerWork)
console.log(questionChildren, ' - ', answerChildren)

//3.
let a = 10
let b = 25
let c = a
a = b
b = c
console.log('O novo valor de a é', a)
console.log('O novo de b é', b)

//desafio
const number1 = Number(prompt('Digite um número: '))
const number2 = Number(prompt ('Digite outro número: '))

console.log('O primeiro número somado ao segundo número resulta em', number1 + number2)
console.log('O primeiro número multiplicado ao segundo número resulta em', number1 * number2)

