console.log("Aula inicial JS")

console.error("Falha na execução")

console.warn("Atenção")

console.table([{
    nome: 'Vanessa',
    Turma: '02',
    Disciplina:'Prog JS'

},
{
    nome: 'Lucas',
    Turma: '01',
    Disciplina:'Prog JS'
}])


/**
 * Constantes e Variáveis
 */

// const - para informações que nunca mudam
// var ou let - para informações que podem mudar

// informacoes de um dog que nao mudam
const nome = 'Loki'
const raca = 'SRD / vira lata'
const sexo = 'Macho'
const cor = 'Caramelo'
const dataDeNascimento = '01/01/2020'
const porte = 'M'

// informacoes que mudam
let idade = 5
let peso = 10.5
let vacinado = true
let castrado = false
let tamanho = 'M'


/**
 * Tipos de Dados - cadeia, inteiro, real, logico, vetor, matriz
 * (funcoes - leia e escreva)
 * 
  
  String - cadeia
  Number - inteiros/real
  Boolean - logico
  Array - vetor/matriz
  
  undefined
  null

  BigInt = Number para números extremamente grandes 
  Symbol = 'identificador único'

*/


const numeroAula = "03"
const turma = "02"
let data = "05 de abril"

console.log(`Aula ${numeroAula} da Turma ${turma} no sábado dia ${data}`)

console.log(data.length)

//split - separar string

const nomesDeAlunos = "Guiliana André Goku Lucas"

const nomeDeAlunosSplit = nomesDeAlunos.split(" ")

console.log(nomeDeAlunosSplit)

console.log(nomesDeAlunos.toLowerCase())
console.log(nomesDeAlunos.toUpperCase())


console.log(nomesDeAlunos.includes("Dennys")) // verificar se a constante nomesDeAlunos possui a string Dennys

console.log(nomesDeAlunos.replaceAll('a', 'i'))
console.log(nomesDeAlunos.toLowerCase().replaceAll('a', 'i'))

const conceitosLogica = "         inteiro real cadeia de ....            "
console.log(conceitosLogica.trim())

let dataParaCortar = "05 de abril"
const cpf ="04157426836"
console.log( dataParaCortar.slice(0,2));
console.log(cpf.slice(0,3))


