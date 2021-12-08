//Teste extra for + if:
let valor = 0;
for(let i = 0; i < 5; i++) {
    valor +=i
    if(valor === 6){
        console.log(valor)
}
} //6

//Exercícios de interpretação de código:
//1. 10
//2. 
/*a)
19 
21
23
25
27
30

b)for (let numero of lista) {
      console.log(numero)
}
 */
/*
//3. 
*
**
***
****
3
*/
//Exercícios de escrita de código:
//1.
let animal = Number(prompt('Quais bichos de estimação você tem? (número)'))
if(animal === 0){
    console.log('Que pena! Você pode adotar um pet!')
}else if(animal > 0){   
    for(let i = 0; i < animal; i++){
    let animalNames = []
    animalNames.push((prompt('Digite  nome dos seus pets: ')))
    }
    console.log(animalNames)
}

//2.
