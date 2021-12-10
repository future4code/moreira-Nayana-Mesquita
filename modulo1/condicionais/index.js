//Exercícios de interpretação de código:
//1. 
/*
a)O código testa se um número é divísivel por 2, se for, o teste é satisfeito.

b)Para números pares.

c)Para tipos números ímpares.
*/

//2.
/*
a) Para mostrar o preço da fruta que for escolhida.

b) O preço da fruta  Maçã  é  R$  2.25

c) O preço da fruta  Maçã  é  R$  5
*/

//3.
/*
a) recebendo elemento do tipo number.
b) 10 (true): "Esse número passou no teste"
        mensagem - não definida porque a variável não é acessível ao global.
   -10 (false): mensagem - não definida porque a variável não é acessível ao global.
c) mensagem - não definida porque a variável não é acessível ao global.
*/

//Exercícios de escrita de código:
//1.
let age = Number(prompt('Digite a sua idade:'))
console.log(`Você tem ${age} anos.`)
if(age > 18){
    console.log('Você pode dirigir!')
}else{
    console.log('Você não pode dirigir.')
}

//2.
let shift = prompt('Qual o período do dia em que você estuda?\nDigite:\nM(matutino)\nV(Vespetino)\nN(Noturno)')
if(shift === 'M'){
    console.log('Bom Dia!')
}else if(shift === 'V'){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}
//3.
let shift = prompt('Qual o período do dia em que você estuda?\nDigite:\nM(matutino)\nV(Vespetino)\nN(Noturno)')
switch (shift){
    case 'M':
        console.log('Bom Dia!')
        break
    case 'V':
        console.log('Boa tarde!')
        break
    default:
        console.log('Boa Noite!')
}
//4.
let kind = prompt('Qual gênero do filme vamos assistir? ') 
let ticket = Number(prompt('Qual o valor do ingresso?'))
if(kind === 'fantasia' && ticket === 15){
    console.log('Bom filme!')
}else{
    console.log('Escolha outro filme :(')
}


// Exemplos de for + if dentro da function:
function handleArr(ar){
    let sum = 0;
    for(const number of ar){
        sum += number
}
        if(sum > 0){
            return sum 
        }else{
            return 'É zero'
        }
} 
console.log(handleArr([12,8,30]))    //50
//-----------------
function comparaArr(a,b){
    let pontos = 0
    for(let i = 0; i < a.length; i++){
    pontos++
}
return pontos
}
console.log(comparaArr([1,2,2], [1,1,1]))  //2

//Exemplo de objeto + função:
const pokemons = [
    {nome: "Bulbasaur", tipo: "grama"},
    {nome: "Bulsprout", tipo: "grama"},
    {nome: "Charmander", tipo: "fogo"},
    {nome: "Vulpix", tipo: "fogo"},
    {nome: "Squirtle", tipo: "água"},
    {nome: "Psyduck", tipo: "água"},

]
const callback = (pokemon, indice, array) =>{
    if(pokemon.tipo ==="grama"){
        return true
    }else{
        return false
    }
}
const algunsPokemons = pokemons.filter(callback, 1)
console.log(algunsPokemons)
//0: {nome: 'Bulbasaur', tipo: 'grama'}
//1: {nome: 'Bulsprout', tipo: 'grama'}


//Desafio
//1.

//2.