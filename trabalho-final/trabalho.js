//Autor(a): Vanessa Sayuri Uchida
//Data: 31/05/2025


//TESTE: QUANDO informar um nome para o Pet, DEVE ser impresso na tag com letras maiúsculas'

function geradorDeTagsDeIdentificacao(nome) {
    return nome.toUpperCase()
}

//TESTE: QUANDO a idade = 1 + porte M, DEVE ser permitida a adoção

function verificarSePodeSerAdotado(idade, porte){
  if (idade >=1 && porte === 'M')  {
    return true
  }
  else{
    return false
  }
}

//TESTE: QUANDO o peso = 14.5, DEVE ser retornado 4350 gramas para o consumo diário

function calcularConsumoDeRacao(nome, idade, peso){
  let gramasPorDia = peso * 300
  return gramasPorDia
}


//TESTE: QUANDO o porte = pequeno, DEVE ser retornada a atividade adequada

function decidirTipoDeAtividadePorPorte(porte) {
let atividade
//decidir o tipo de atividade com base no porte
switch (porte) {
    case 'pequeno':
        atividade = `brincar dentro de casa`
    break;
    case 'médio':
        atividade = `caminhada no quarteirao`
    break;
    case 'grande':
        atividade = `correr no parque`
    break;

    default:
        atividade = `porte inválido`

}
    return atividade
    
}

//TESTE: QUANDO buscar dado de exemplo, DEVE retornar um valor de forma assíncrona

// Criando um array com alguns dados
const dados = ['Mimosa', 'Pipoca', 'Pituco'];

async function buscarDadoAsync() {

  for (let i = 0; i < dados.length; i++) {
    if (dados[i] === 'Pipoca') {
      // Quando encontrar, retorna o valor
      return dados[i];
    }
  }
}



 export{
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
 }

