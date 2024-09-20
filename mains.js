'use strict'; //modo restrito//Este modo faz com que o JavaScript opere de forma mais segura e rigorosa, ajudando a evitar erros comuns de programação
/*consumo de APIA - https://viacep.com.br/*/

//Função para Limpar formulario
const LimparFormulario = () =>{
    document.getElementById('logradouro').Value = '';
    document.getElementById('bairro').Value = '';
    document.getElementById('localidade').Value = '';
    document.getElementById('uf').Value = '';
}

const eNumero = (numero) => /^[0-9]=$/.test(numero);
// length e uma propiedade que identifca a quantidade de caracteres dentro do argumento cep
const cepValido = (cep) => cep.length == 8 &&
eNumero (cep);

//Função para preencher formulario como campos de API

const preencherFormulario = (endereço) =>{
    document.getElementById('Logradouro').Value = endereço.logradouro;
    document.getElementById('bairro').Value = endereco.bairro;
    document.getElementById('localidade').Value = endereco.localidade;
    document.getElementById('uf').Value = endereco.uf;
  

    
    
}



