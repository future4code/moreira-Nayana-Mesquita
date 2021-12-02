/*
Exercícios de interpretação de código:
1. 
a. //undefined
b. //Null
c. //11 
d. //3
e. //[3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. //9

2. 
//SUBI NUM ÔNIBUS EM MIRROCOS 27
*/

//Exercícios de escrita de código:
//1.
const nameUser = prompt('Insira seu nome: ')
const emailUser = prompt('Insira seu email: ')
console.log(`O e-mail ${emailUser} foi cadastrado com sucesso. Seja bem-vindo(a) ${nameUser}!`)

//2.
const PreferFood = ['Pinhão', 'Uvas passas', 'Tâmara', 'Tharine', 'Açai']
//a
console.log(PreferFood)
//b
console.log(`Essas são minhas comidas preferidas: \n${PreferFood[0]}\n${PreferFood[1]}\n${PreferFood[2]}\n${PreferFood[3]}\n${PreferFood[4]} `)
//c
const PreferFoodUser = 'Escreva a sua comida preferida: '
PreferFood[1] = prompt(PreferFoodUser)
console.log(PreferFood)

//3.
//a
const listTasks = []
//b
const task1 = 'Escreva a 1ª tarefa do seu dia: '
const answerTasks1 = prompt(task1)
listTasks.push(answerTasks1)
const task2 = 'Escreva a 2ª tarefa do seu dia: '
const answerTasks2 = prompt(task2)
listTasks.push(answerTasks2)
const task3 = 'Escreva a 3ª tarefa do seu dia: '
const answerTasks3 = prompt(task3)
listTasks.push(answerTasks3)
//c
console.log(listTasks)
//d
const viewlistTasks = 'Digite um número de 0 a 2 para visualizar uma tarefa: '
const answerViewListTasks = prompt(viewlistTasks)
console.log(listTasks[answerViewListTasks])
//e
listTasks.splice(2,1)

//f
console.log(listTasks)


