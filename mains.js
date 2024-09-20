'use strict'; //modo restrito//Este modo faz com que o JavaScript opere de forma mais segura e rigorosa, ajudando a evitar erros comuns de programação
/*consumo de APIA - https://viacep.com.br/*/

//Função para Limpar formulario
const LimparFormulario = () =>{
    document.getElementById('Logradouro').Value = '';
    document.getElementById('uf').Value = '';
    document.getElementById('Rua').Value = '';
    document.getElementById('CEP').Value = '';
    document.getElementById('Localidade').Value = '';
}

const eNumero = (numero) => /^[0-9]=$/.test(numero);
// length e uma propiedade que identifca a quantidade de caracteres dentro do argumento cep
const cepValido = (cep) => cep.length == 8 &&
eNumero (cep);



