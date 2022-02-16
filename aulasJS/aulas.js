// console.log ('ola')

// var x = 0

// while( x < 5) {

//     console.log ("testando rep" + x)

//     x ++
// }


// for (var i = 0; i < 10; i++) {
//     console.log ('Repetindo for ' + i)
// }

// for (var i = 10; i> 0; i --) {

//     console.log (i)

// if (i === 5) {
//     break
// }

// }
// console.log ("Deu um break")

// var nome = "john"

// console.log (nome.length)


// var frase = " O meu pai e alto"

// console.log (frase.indexOf ("pai"))

// var lista = [1,2,3,4,5,]

// console.log (lista.length)

// lista.push(6)

// console.log (lista)

// lista.unshift("inicio")


// console.log (lista)

// lista.shift

// const nome = "amapa"

// if(nome != undefined && nome ==="joaquin" ){
// console.log ("nome esta definido")
// } else if ( nome == "john" && nome.length > 3 ) {
// console.log ("Bem vindo John")
// } else {
//     console.log ("nao é john")
// }


// const number1 = 3;
// const number2 = 4

// console.log (number1 + number2)

// console.log ( 5>6)
// console.log ( 5<=5)
// console.log ( 5!=6)

// AND && OR ||  NOT !

// console.log( 5 > 4 && "john" != "goku")
// console.log( 3 > 4 || "john" != "john")
// console.log(!( 3 > 4 || "john" != "john"))


// let idade = prompt("qual é sua idade")

// console.log (idade)

// let nome = prompt ("qual é seu nome ?")

// console.log (`O seu nome é ${nome}`)


// for (let i = 0; i < 100; i = i + 2) {
//     console.log(`a soma de i com 2 é ${i + 2}`)
// }

// const nome = "paul"

// switch (nome) {
//     case "jubileu":
//         console.log ("O nome é jubila")
//         break;
//         case "john":
//             console.log ( "o nome e john")
//             break;
//             default: 
//             console.log ("O nome nao foi encontrado")
// }


// const user = {
//     idade: 17,
//     cnh: 'sim',
// }

// if(user.idade >= 18 && user.cnh != 'sim'){
//     console.log('Usuário é maior de idade porém não possui CNH')
// }else if(user.idade >= 18 && user.cnh == 'sim'){
//     console.log('Usuário é maior de idade e possui CNH')
// }else if(user.idade <= 18){
//     console.log('Usuário é menor de idade')
// }




// let idade = 18
// let cnh = false

// if (idade >= 18 && cnh == false) {
//     console.log("Não pode dirigir")

// } else if (idade >= 18 && cnh == true) {
//     console.log("Pode dirigir")

// } else if (idade < 18 || cnh == false) {
//     console.log ("não pode dirigir")
// }

// var teste = 100

// for (let index = 50; index <= teste; teste--) {
//     console.log(teste)
// }



//Exercicios

// const nome = "john"

// const number1 = 1

// const blue = false

// console.log ( typeof nome )
// console.log ( typeof number1 )
// console.log ( typeof blue )


// let idade = 17

// if ( idade >= 18 ){
// console.log ("Pode entrar")
// } else {
//     console.log ("Proibida entrada de menores de 18 anos!")
// }

// const nome = "john"

// if (nome === "john"){
//     console.log (` Bem vindo ${nome}, seu lindooo!`)
// }

// const num = 18

// console.log (Math.pow(2,2))
// console.log (Math.pow(3,2))
// console.log (Math.pow(num,2))

// const vel = 81

// if ( vel > 80 ) {
//     console.log ('Levou multa')
// } else {
//     console.log ('Não levou multa')
// }

// function imprimirAlgo () {
//     console.log ("Isto é uma função")
// }

// imprimirAlgo()


// function imprimaNumero(num) {
//     console.log(" o numero é " + num)
// }

// imprimaNumero(2)


// const numeroAleatorio = function () {

//     console.log (Math.random())
// }

// numeroAleatorio()

// function multTresNumber (a,b,c) {
// return a*b*c
// }

// console.log(multTresNumber (2,3,4))

// const mult = multTresNumber (5,4,8)

// console.log (" o valor de mult é " + mult )


// function podeDirigir (idade, cnh){
//     if (idade >= 18 && cnh == true){
//         console.log ("pode dirigir")
//     } else {
//         console.log("não pode dirigir")
//     }
// }

// console.log( podeDirigir (17,true))
// console.log ( podeDirigir (19,false))
// console.log ( podeDirigir (30,true))


// Escopo


// function tipoPessoa (idade,beleza) {
//     if (idade >=60 || beleza == false){
//         console.log("feia para caralho")
//     } else{
//         console.log ("Voce é bonito!")
//     }

// }

// console.log ( tipoPessoa( 50, 0))

// let a = 5

// function multiplicador (x,y){

//   let a = x * y

//   if (a > 10)

//   console.log ("a conta foi cara")

// }


// console.log (multiplicador(2,6))

// console.log (a)

// ARROW FUNCTION

// const johnEgol = (gol, partida) => {
//  return gol / partida
// }

// console.log (johnEgol(100, 1000))


// let soma = (a,b) => {
// return a + b
// }

// console.log (soma(10,30))

// const soma = x => x + 10

// console.log (soma(50))

// function pessoa(nome,idade) {
//  if (nome === undefined || idade === undefined)    {
//      console.log ('Precisa preencher os campos')
//  } else if (nome === 'john' && idade ===30){
//      console.log ('Bem vindo John')
//  }

// }

// console.log (pessoa('john', 30))

// let pessoa = {
//     nome: "john",
//     idade: 30,
//     sexo: "masculino"
// }

// console.log (pessoa)

// if (pessoa.nome === 'john' && pessoa.idade === 30) {
//     console.log ("Ola john")
// }


// function saudacao (nome,idade){
//     if( idade === undefined){
//         console.log ("Ola" + nome)
//     } else { 
//         console.log ("Olá " + nome + ", voce tem " + idade + " anos")
//     }
// }

// saudacao("john")

// saudacao( "john", 30)

// function olaMundo() {
//     console.log ("Hello Word!")
// }

// olaMundo()


// function pessoa (idade){
//     console.log ("voce tem " + idade + " anos")

//     console.log (`voce tem ${idade} anos`)
// }

// console.log (pessoa(30))

// function somaDois (a,b) {
//     return a + b
// }

// console.log(somaDois(25,40))


// function pessoa (idade) {
//     if (idade >= 18) {
//         console.log("Pode matricular na auto escola")
//     }else {
//         console.log("Não pode matricular na auto escola")
//     }
// }

// pessoa(18)

// pessoa(14)

// function verificarDado(dado) {
//     if (typeof dado === "string") {
//         console.log("este dado é uma string")

//     } else if (typeof dado === "number") {
//         console.log("este dado é um numero")

//     } else if (typeof dado === "boolean") {
//         console.log("este dado é um booelan")

//     }
// }

//     verificarDado(18)
//     verificarDado(true)
//     verificarDado("john")



// function checaTexto(texto){
//     if(texto.length>=10){
//         console.log ("Texto muito longo")
//     } else {
//         console.log("Texto dentro do limite")
//     }
// }

// checaTexto("pica-pau ")


function soma(a, b) {
    return a + b
}

console.log(soma(5, 5))

let pessoa = {
    idade: 17,
    cnh: true
}

function checaHabilitação() {
    if (pessoa.idade >= 18 && pessoa.cnh === true) {
        console.log("Habilitado!")
    } else {
        console.log("Não apto a habilitação")
    }
}

checaHabilitação()

const soma = () => {

}

