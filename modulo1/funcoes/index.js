//Exercícios de interpretação de código:

//1.
//a) 
//10 e 50

//b)
//No console do Google Chrome devolve o resultado da última chamada e 
//no VSCode não devolve nada e para mim, esse última me parece mais correta.

//2.
//a. 
//Essa função vai retornar a variável texto completamente em letras minúsculas e 
//método includes() vai checar se o elemento 'cenoura' exite dentro da variavel texto. 
//Caso exista retornará true e se não existir retornará false. 

//b.
//i. true
//ii. true
//iii. true

//Exercícios de escrita de código:
//1.
//a)
function infPersonal(){
    console.log('Eu sou Nayana, tenho 36 anos, moro em São Paulo e sou estudante de desenvolvimento web!')    
}
infPersonal()

//b. 
function infPersonal2(name, idade, city, occupation){
    console.log(`Eu sou ${name}, tenho ${idade}, moro em ${city} e sou ${occupation}.`)

}
infPersonal2('Nayana Loivos', 36, 'São Paulo', 'desenvolvera web')

//2.
//a) 
function doisNumeros(n1, n2){
    return n1 + n2
    
}
const answer = doisNumeros(120, 120)
console.log('A soma dos números digitados é:', answer)

//b)
function doisNumeros2(n1, n2){
    return n1 >= n2

}
const answer2 = doisNumeros2(25, 30)
console.log(answer2)

//c)
function parOuImpar(n){
    return n % 2 === 0
}
const answer3 = parOuImpar(3)
console.log('O número digitado é um número par?', answer3)

//d)
function printMsg (msg){
    console.log('Sua mensagem tem:', msg.length, 'letras')    
    console.log(msg.toUpperCase())
}
let writeMsg = 'Escreva uma mensagem: '
let answerWriteMsg = prompt(writeMsg)
const print = printMsg(answerWriteMsg)
console.log(print)

//3.
function add (n1, n2){
    console.log('A soma dos números é: ', Number(n1 + n2))
}

function less (n1, n2){
    console.log('A subtração dos números é: ', Number(n1 - n2))
}

function mult (n1, n2){
    console.log('A multiplicação dos números é: ', Number(n1 * n2))
}

function div (n1, n2){
    console.log('A divisão dos números é: ', Number(n1 / n2))
}
let twoNumber1 = 'Insira um número: '
let answerNumber1 = Number(prompt(twoNumber1))
let twoNumber2 = 'Insira outro número: '
let answerNumber2 = Number(prompt(twoNumber2))
console.log(`Os números inseridos foram ${answerNumber1} e ${answerNumber2}.`)
let numberAdd = add(answerNumber1, answerNumber2)
let numberLess = less(answerNumber1, answerNumber2)
let numberMult = mult(answerNumber1, answerNumber2)
let numberDiv = div(answerNumber1, answerNumber2)

