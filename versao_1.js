confirm("Bem vindo(a) ao Jogo de Blak Jack")

let partida = confirm("Gostaria de jogar uma rodada ?")

if(partida){

let card1User = comprarCarta()
let card2User = comprarCarta()
let card1Pc = comprarCarta()
let card2Pc = comprarCarta()

let userScore = card1User.valor + card2User.valor
let pcScore = card1Pc.valor + card2Pc.valor

console.log(`Suas cartas são: ${card1User.texto} e ${card2User.texto} Pontuação: ${userScore}`)
console.log(`Cartas do oponente: ${card1Pc.texto} e ${card2Pc.texto} Pontuação ${pcScore} `)

if (userScore > pcScore){
   console.log("Você Ganhou !!!")
}else if(userScore < pcScore){
   console.log("Uma pena, você perdeu")
}else if(userScore === pcScore){
   console.log("Empate !")
}

}else{
   console.log("Fim de Jogo")
}



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