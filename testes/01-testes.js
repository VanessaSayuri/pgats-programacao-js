/**
 
    describe -> agrupador de testes
    it       -> implementacao do teste
 


    TDD
    crio o teste
    vejo o teste falhar
    crio a implementação para o teste passar
    rodo o teste de novo
    refatoro o código
    
    
    ASSERTION/ASSERCAO
     verificar se um comportamento está de acordo com o esperado
*/

import { exibirNomeDogFormatado } from "../conceitos/testes-de-unidade.js";
import assert from "node:assert";

describe('Testes do Projeto', () =>{
    it('deve exibir nome do dog com letras maiusculas', () => {
        assert.strictEqual(exibirNomeDogFormatado('Mimosa'), 'MIMOSA')
        //verifique se: <valor atual> É IGUAL A <valor esperado>
    });
    it('primeiro teste', () =>{

    })
    it('segundo teste', () =>{
        
    })
})