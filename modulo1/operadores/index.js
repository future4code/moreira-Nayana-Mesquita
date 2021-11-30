/*Exercícios de interpretação de código: 
1.
//a. false
//b. false
//c. true
//d. boolean

2. 
É necessário converter o tipo string que o método prompt() nos trás como
padrão para o tipo Number. Assim será possível realizar o objetivo final
do código que é somar dois números e não concatenar como está acontencendo.

3.Então, o código ficaria assim:

let primeiroNumero = Number(prompt('Digite um numero!'))
let segundoNumero = Number(prompt('Digite outro numero!'))

const soma = primeiroNumero + segundoNumero

console.log(soma)
*/

//Exercícios de escrita de código:
//1.
let ageUser = Number(prompt('Qual a sua idade?'))
let ageBestFriend = Number(prompt('Qual a idade do seu melhor amigo(a)?'))

console.log('Sua idade é maior que do seu melhor amigo? - ',ageUser > ageBestFriend)
console.log('A diferença de idade entre vocês é de',ageUser - ageBestFriend,'anos.')

//2.
let number1 = Number(prompt('Digite um número par: '))
let division = number1 % 2
console.log('O resto da divisão por 2 é: ', division)

/*
c. Apenas 0 e 1 são exibido como resultado. Depende se o número digitado
pelo usuário é par ou ímpar. Números pares exibem 0 e números ímpares 
exibem 1 como resto da divisão.
*/

//d. Será exibido o resto 1. 

//3.
let ageUser = Number(prompt('Qual a sua idade?'))
console.log('Você tem', ageUser, 'anos.')

console.log('Sua idade em meses é:', ageUser * 12)

console.log('Sua idade em dias é:', ageUser * 12 * 365)

console.log('Sua idade em horas é:', ageUser * 12 * 365 * 24)

//4.
let number1 = Number(prompt('Digite um número: '))
let number2 = Number(prompt('Digite outro número: '))

console.log('O primeiro numero é maior que segundo? - ', number1 > number2)
console.log('O primeiro numero é igual ao segundo? - ', number1 === number2)
console.log('O primeiro numero é divisível pelo segundo? - ', number1 % number2 === 0)
console.log('O segundo numero é divisível pelo primeiro? - ', number2 % number1 === 0)

//Desafio
//1. 
//Conversão de ºC para ºF: (9 * C)/5 + 32
//Conversão de ºF para K: (F - 32) * (5/9) + 273.15
//Conversão de ºC para K: ºC + 273.15

let f 
let k
let c
//a)
f = (77 - 32) * (5/9) + 273.15
console.log('77 ºF convertido em K é:',f)

//b)
c = (9 * 80)/5 + 32
console.log('80 ºC convertido em ºF é:',c)

//c)
c = (9 * 30)/5 + 32
console.log('30 ºC convertido em ºF é:',c)
c = 30 + 273.15
console.log('30 ºC convertido em ºK é:',c) 

//d)
let number= Number(prompt('Insira uma temperatura em Celsius:'))
c = (9 * number)/5 + 32
console.log( number,'ºC convertido em ºF é:',c) 
c = number + 273.15
console.log( number, 'ºC convertido em ºK é:',c)

//Farei o restante do desafio amanhã. Minha cabeça dói de tanto pensar! :)