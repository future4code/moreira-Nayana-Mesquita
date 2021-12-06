// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const rectangleHeight = Number(prompt('Digite a altura (cm): '))
  const rectangleWidth = Number(prompt('Digite a largura (cm): '))
  const heightWidth = rectangleHeight * rectangleWidth
  console.log(`Altura: ${rectangleHeight}`)
  console.log(`Largura ${rectangleWidth}`)
  console.log(heightWidth)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const correntYear = Number(prompt('Ano em que estamos: '))
  const yearBorn = Number(prompt('Ano do seu nascimento: '))
  const ageUser = correntYear - yearBorn
  console.log(ageUser)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let name = prompt('Qual é o seu nome? ')
  let age = prompt ('Qual sua idade? ')
  let email = prompt('Qual é o seu e-mail? ')
  console.log(`Meu nome é ${name}, tenho ${age} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  colors = []
  preferedColor1 = prompt('Escreva sua cor favorita 1: ')
  preferedColor2 = prompt('Escreva sua cor favorita 2: ')
  preferedColor3 = prompt('Escreva sua cor favorita 3: ')
  colors.push(preferedColor1, preferedColor2, preferedColor3)
  console.log(colors)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  string = string.toUpperCase()
  return string
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let returnInvestiment = custo / valorIngresso
  return returnInvestiment
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  let size = string1.length === string2.length  
  return size
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  array = array[0]
  return array
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  let lastItem = array [array.length-1]
  return lastItem
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let indexZero = array[0]
  let indexLast = array[array.length-1]
  array [array.length-1] = indexZero
  array [0] = indexLast
  return array

  /* Otimizada:
  let array = [1, 2, 3, 4, 8, 7]
  let indexZero = array[0]
  array [0] = array [array.length-1]
  array [array.length-1] = indexZero
  console.log(array) */

  /* Por metodos:
  let indexZero = array[0]
  let indexLast = array.pop()
  array.push(indexZero)
  array [0] = indexLast
  return array */

  /* Otimização por Functions:
  function trocaPrimeiroEUltimo(array) {
    let array = [1, 2, 3, 4, 8, 7]
    let indexZero = array[0]
    array [0] = getLastItem(array)
    array [array.length-1] = indexZero
    return array
}
function getLastItem(array){
    return array[array.length-1]
} */
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  string1 = string1.toLowerCase()
  string2 = string2.toLowerCase()
  return string1 === string2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let correntYear = Numero(prompt('Em ano estamnos? '))
  let bithYear = Numero(prompt('Qual o ano do seu nascimento? '))
  let identity = Numero(prompt('Qual ano sua identidade foi emitida? '))
  let twentyYear = (correntYear - bithYear) < 20 
  let fityYear = (correntYear - bithYear) > 20 || (correntYear - bithYear) < 50
  let overFity = (correntYear - bithYear) > 50 
  let equal = (correntYear - bithYear) === 20 || (correntYear - bithYear) === 20
  //ainda incompleto
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {  
    let anoBissexto = (ano % 4 === 0) && (ano % 100 !== 0) || (ano % 400 === 0)
    return anoBissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}