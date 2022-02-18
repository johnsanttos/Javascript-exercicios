// let nomes = ["Ana","paulo","maria"]
// for ( let i = 0 ; i <= nomes.length; i++){

// console.log(nomes[i])
// }



// let nomes = ["Ana","paulo","maria"]

// let elementoRemovido = nomes.pop()

// console.log(elementoRemovido)

// console.log(nomes)

// nomes.push('Pedro')

// console.log(nomes)


// let nomes = ["Ana","paulo","maria"]

// nomes.forEach ( n => {
//     console.log ("O nome é " + nome)
// })

// let produtos = "banana;bola;tv;faca;fita;dvd"

// console.log(produtos.split(';'))

// let palavra = "Repetir "

// console.log(palavra.repeat(10))


// let num = 1
// let num1 = 4
// let num2 = 5

// function imprimaNumero (...args){
//     for(let i = 0; i <args.length; i++){
//         console.log (args[i])
//     }
// }

// imprimaNumero(num,num1,num2)
// console.log ('pausa')

// imprimaNumero(num1,num2)
// console.log ('pausa')


// imprimaNumero(2,6,8,4,5,6,3,2,1)
// console.log ('pausa')

// const arr = [5,5,2]

// const newArr =[...arr,3,4]

// console.log(newArr)

// function somar (a,b,c){
//     return a+b+c
// }
// console.log(somar(...arr))


// JSON
let pessoa = {
    "nome" : "john",
    "idade" : 30,
    "sexo" :" masculino",
    "Profissao":"Devloper",
    "Linguagens":["PHP", "Javascript", "Python"]
}

let pessoaTexto = JSON.stringify(pessoa)
console.log(pessoa)
