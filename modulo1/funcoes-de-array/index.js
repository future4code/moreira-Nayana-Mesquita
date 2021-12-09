//Exercícios de interpretação de código:

//1. a) Todos os itens do objeto:
/*{ nome: "Amanda Rangel", apelido: "Mandi" },
{ nome: "Laís Petra", apelido: "Laura" },
{ nome: "Letícia Chijo", apelido: "Chijo" }*/

//2. a) "Amanda Rangel", "Laís Petra", "Letícia Chijo".

//3.a) {nome: 'Amanda Rangel', apelido: 'Mandi'},
    // {nome: 'Laís Petra', apelido: 'Laura'}

    //Exercícios de escrita de código:
    //1.
    //a) Array somente os nomes
    const pets = [
        { nome: "Lupin", raca: "Salsicha"},
        { nome: "Polly", raca: "Lhasa Apso"},
        { nome: "Madame", raca: "Poodle"},
        { nome: "Quentinho", raca: "Salsicha"},
        { nome: "Fluffy", raca: "Poodle"},
        { nome: "Caramelo", raca: "Vira-lata"},
     ]
     const dogName = pets.map((item, index) => {
            return item.nome
     })
     console.log(dogName)
     
     //b) Array somente as informações completas da raca salsicha
     const dogSalsichas = pets.filter((item, index) => {
            return item.raca === 'Salsicha'
     })
     console.log(dogSalsichas)

     //c) Mensagem aos clientes que possuem poodle
     const clientsPoodles = pets.filter((item, index) =>{
        return item.raca === "Poodle"        
    })
    console.log(clientsPoodles)

    const mensageClient = clientsPoodles.map((item, index) => {   
        return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
    })
    console.log(mensageClient)

    //2.
    //a)
    const produtos = [
        { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
     ]
     const name = produtos.map((item, index) =>{
         return item.nome 
    })
    console.log(name)

    //b)
    


