//Exercícios de interpretação de código:

/* //1. a)
Matheus Nachtergaele
Virginia Cavendish
{canal: "Globo", horario: "14h"}
 */

/* //2. a)
{nome: 'Juca', idade: 3, raca: 'SRD'}
{nome: 'Juba', idade: 3, raca: 'SRD'}
{nome: 'Jubo', idade: 3, raca: 'SRD'} 

//b) Um o objeto criado como modelo para aa const criadas.
*/

/* //3.a)
false
undefined

b)Trouxe o valor false definido em "Backender" no objeto pessoa e undefined em "altura pois não 
foi definido."
 */

//Exercícios de escrita de código:
//1.a)
const pessoa = {
     nome: "Tatiane",
     apelido: ['Tata', 'Tati', 'Ane']

}
function recebePessoa(pessoa){
    console.log(`Eu sou ${pessoa.nome} mas pode me chamar de ${pessoa.apelido[0]}, ${pessoa.apelido[1]}, ${pessoa.apelido[2]}.`)
}
recebePessoa(pessoa)

//b)
const novaPessoa ={
    ...pessoa,
    apelido: ['Tay', 'Tatay', 'Tiane']
}
recebePessoa(novaPessoa)

//2.a)
const pessoa1 ={
    nome: 'Bruna',
    idade: 28,
    profissao: 'Desenvolvedora'
}
const pessoa2 ={
    nome: 'Silvia',
    idade: 30,
    profissao: 'Instrutora'
}

//b)
function caracteristica (pessoa1, pessoa2){
    
    const arrayCaracteristica =[]
    arrayCaracteristica.push(`Nome:${pessoa1.nome}, ${pessoa1.nome.length}, Idade:${pessoa1.idade}, Profissão: ${pessoa1.profissao}, ${pessoa1.profissao.length} `)
    arrayCaracteristica.push(`Nome:${pessoa2.nome}, ${pessoa2.nome.length}, Idade:${pessoa2.idade}, Profissão: ${pessoa2.profissao}, ${pessoa2.profissao.length}`)
    console.log(arrayCaracteristica)
}
caracteristica(pessoa1, pessoa2)

//3.a)
let carrinho = []

//b)
const fruta1 ={
    nome: 'Melão',
    disponibilidade: true
}

const fruta2 ={
    nome: 'Banana',
    disponibilidade: true
}

const fruta3 ={
    nome: 'Goiaba',
    disponibilidade: true
}

//c)
function recebeFrutas(){
    carrinho.push(fruta1,fruta2,fruta3)    
}

//d)
console.log(carrinho)
recebeFrutas()

//Desafio
//1.
function dadosPessoais (){
    const nome = prompt('Qual é o seu nome? ')
    const idade = prompt('Qual é o sua idade? ')
    const profissao = prompt('Qual é o sua profissão? ')
    const dados ={
        nome: nome,
        idade: idade,
        profissao: profissao
    }
    console.log(`Nome: ${nome}, Idade: ${idade}, Profissão ${profissao}`)
    console.log(`Tipo: ${typeof(dados)}.`)
}
dadosPessoais()

//2.
const filme1 = {
    nome: 'Titanic',
    anoLancamento: 1998,    
}
const filme2 = {
    nome: 'The Shining',
    anoLancamento: 1980,    
}

function filmes (filme1, filme2){
return `O primeiro filme foi lançado antes do segundo? ${filme1.anoLancamento < filme2.anoLancamento} \nO primeiro filme foi lançado no mesmo ano do segundo? ${filme1.anoLancamento === filme2.anoLancamento}.`
}
console.log(filmes(filme1, filme2))

//3.
