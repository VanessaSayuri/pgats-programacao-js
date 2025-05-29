let nomeOriginal = "     tHoR         "
let nomeSemEspacos = nomeOriginal.trim()
let nomeMaiuscula =  nomeSemEspacos.charAt(0).toUpperCase() + nomeSemEspacos.slice(1, nomeSemEspacos.length).toLowerCase()
console.log(`Nome original: ${nomeOriginal} - Nome formatado ${nomeMaiuscula}`);


// usei este código para remover espaços e caracteres especiais
//let nomeFormatado = nomeTrim.replace(/\s+/g, "").replace(/[^a-zA-ZÀ-ÿ]/g, "");


/*
const nomeCachorro = "Princesa";
validadorNome(nomeCachorro);
const nomeCachorroDois = "Snop Dog";
validadorNome(nomeCachorroDois);
function validadorNome(nome) {
    let espaco = " ";
    let nomeOriginal = nome;
    console.log("Nome cadastrado: ", nomeOriginal);
    if (nomeOriginal.includes(espaco)) {
        console.log("O nome do cachorro na identificação não pode ser composto, ou seja entrada inválida");
    } else {
        let nomeFormatado = nomeOriginal.toUpperCase();
        console.log("O nome será formatado convertido para maiusculo");
        console.log("Nome formatado: ", nomeFormatado);
    }
}
    */



/**

Validador de nomes para as tags

Alguns donos estão registrando os dogs com nomes mal formatados. Crie um script para limpar e padronizar os nomes.

Aplique as formatações e exiba:
- O nome original, como foi cadastrado
- O nome formatado

Extra: aplique uma regra que confira se o nome informado possui apenas uma palavra. Exiba se o nome é válido ou não.

Exemplos:

  - nomes válidos
    - Pipoca
    - Guaraná
    - Paçoca
  - nomes inválidos
    - Peggy Carter
    - Pantera Negra

 */

// const nomeDog = "tH   oR@!%  "
const nomeDog = '   Ba!ley Mari@    '

let nomeFormatado = nomeDog.trim()
nomeFormatado = removerCaracteresEspeciais(nomeFormatado)
nomeFormatado = tornarAPrimeiraLetraMaiuscula(nomeFormatado)

// const palavras = nomeFormatado.split(/\s+/);
// const palavras = nomeFormatado.split(" ");
// const valido = palavras.length === 1;

// 10 == '10'
// 10 === '10'



/*

  operadores = comparacao, logica, aritmética

    VALOR A maior que VALOR B
    VALOR A menor que VALOR B

    == -> VARIAVEL A 'possui o mesmo valor que' VARIAVEL B 
    === -> VARIAVEL A 'possui o mesmo valor E possui o mesmo tipo de dado que' VARIAVEL B

*/

const valido = verificarSeONomeEValido(nomeFormatado)

console.log(nomeDog)
console.log(nomeFormatado)
console.log(valido)

function removerCaracteresEspeciais(nome) {
  // return nome.replace(/[^a-zA-ZÀ-ÿ]/g, "");
  return nome.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
}

function removerEspacosEntreAPalavra(nome) {
  return nome.replace(/\s+/g, "")
}

function tornarAPrimeiraLetraMaiuscula(nome) {
  return nome.charAt(0).toUpperCase() + nome.slice(1, nome.length).toLowerCase()
}

function verificarSeONomeEValido(nome) { 
  return nome.split(" ").length === 1 //? {{}}
}

