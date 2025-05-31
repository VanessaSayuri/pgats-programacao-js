/**
 
Sintaxe CommonJs:
    module.exports = {} / require('')

ESM - Ecmascript Standard Modules
    export {} / import


 */


    const BRINQUEDOS = [
  'Osso',
  'Peteca',
  'Chocalho'
]

function exibirNomePet(paramNomePet = 'valor padrao') {

  if (paramNomePet === undefined) {
    console.log()
    return
  }

  console.log(`O nome do pet é ${paramNomePet}`)
}

function exibirIdade(paramIdadePet) {
  console.log(`Idade do Pet é ${paramIdadePet}`)
}

//  export {} / import 
export {
  exibirNomePet,
  exibirIdade,
  BRINQUEDOS
}