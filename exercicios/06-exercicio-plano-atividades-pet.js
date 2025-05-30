const nome = 'Pantera'
const porte = 'médio'
const tempo = 30


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

let mensagem

//ajustar a mensagem de acordo com o tempo
    if(tempo < 15) {
        mensagem = 'atividade rápida: '
    } else if (tempo <= 30){
        mensagem =  'tempo ideal:'
    } else if (tempo > 30) {
        mensagem = 'hora da diversão: '
    }


console.log(`${mensagem} : [${atividade}]`)