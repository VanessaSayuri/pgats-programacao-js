
function geradorDeTagsDeIdentificacao(nome) {
    return nome.toUpperCase()
}


function verificarSePodeSerAdotado(idade, porte){
  if (idade >=1 && porte == 'M')  {
    return true
  }
  else{
    return false
  }
}

function calcularConsumoDeRacao(nome, idade, peso){
  let gramasPorDia = peso * 300
  return gramasPorDia
}







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


// async function buscarDadoAsync() {
//   return 'Pipoca';
// }


const dados = ['Biscoito', 'Pipoca', 'Chocolate'];

async function buscarDadoAsync() {
  const resultado = dados.find(item => item === 'Pipoca');
  return resultado;
}




 export{
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
 }

