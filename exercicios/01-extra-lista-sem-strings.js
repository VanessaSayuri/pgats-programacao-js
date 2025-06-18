function listarStrings(lista) {
  const novaLista = [];

  for (let i = 0; i < lista.length; i++) {
    if (typeof lista[i] === 'number') {
      novaLista.push(lista[i]);
    }
  }

  return novaLista;
}

const listaMista = [1, 'abc', 2, 'banana', 3, 'cachorro', 1548, 'abacaxi', 1022, 14, 'av3431dw'];
const apenasNumeros = listarStrings(listaMista);
console.log(apenasNumeros);  // Saída: [ 1, 2, 3, 1548, 1022, 14 ]




function contadorDeVogais(texto) {
  const vogais = ['a', 'e', 'i', 'o', 'u'];
  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    if (vogais.includes(texto[i])) {
      contador++;
    }
  }

  return contador;
}

let texto = 'o rato roeu a roupa do rei de roma'
console.log(`Número de vogais do texto "${texto}" é: ${contadorDeVogais(texto)}`);  // Saída: 16
