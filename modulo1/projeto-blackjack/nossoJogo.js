/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
//1.
let welcome = alert( 'Boas vindas ao jogo de Blackjack!' );
let namePlayer = prompt( 'Digite seu nome:' );
   if(confirm( `Quer iniciar uma nova rodada, ${ namePlayer }?` )){   
         alert( `Vamos iniciar o jogo, ${ namePlayer }` );   
   }else{
         alert( `O jogo acabou! ${ namePlayer }` );   
} 

//Distribuição das 2 cartas iniciais do jogo:
let playerCards = []; //mão do jogador
let pcCards = [];  //mão do pc
function getTwoCards(){
   for( let i = 0; i < 2; i++ ){
    playerCards.push( comprarCarta() );
    pcCards.push( comprarCarta() ); 
   }
}
getTwoCards();
console.log( playerCards,pcCards );

//Definindo a pontuação dos jogadores:
const addingPointsPlayer = playerCards.reduce( ( prevVal, value ) => prevVal + value.valor, 0)
console.log( addingPointsPlayer )
const addingPointsPc = pcCards.reduce( ( prevVal, value ) => prevVal + value.valor, 0)
console.log( addingPointsPc )

//Definindo as cartas dos jogadores:
const cardsPlayer = playerCards.map( card => card.texto )
console.log( cardsPlayer )
const cardsPc = pcCards.map( card => card.texto ) 
console.log( cardsPc )

//Exibindo cartas e pontos:
console.log( `Jogador - cartas: ${ cardsPlayer }, Pontos: ${ addingPointsPlayer }` )
console.log( `PC - cartas: ${ cardsPc }, Pontos: ${ addingPointsPc }`)

//Informando vencedor ou empate:
if( addingPointsPlayer > addingPointsPc ){
   console.log( `VOCÊ GANHOU !!! PARABÉNS!` );
   console.log ( `Você fez ${ addingPointsPlayer } pontos, contra ${ addingPointsPc }!` );
}else if(addingPointsPlayer === addingPointsPc){
   console.log( `JOGADORES EMPATADOS !!! VAMOS JOGAR MAIS UMA VEZ?` );
   console.log ( `Você fez ${ addingPointsPlayer } pontos e o adversário ${ addingPointsPc } pontos!` );
}else{
   console.log( `VOCÊ PERDEU!!! TENTE NOVAMENTE!!!` );
   console.log ( `O PC fez ${ addingPointsPc } pontos, contra ${ addingPointsPlayer }!` );
}

