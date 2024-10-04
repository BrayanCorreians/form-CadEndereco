## Formulário de Cadastro de Endereço
Este projeto é uma aplicação simples de um formulário para cadastro de endereços, onde os campos são preenchidos automaticamente por uma API ao informar o CEP.
Funcionalidades

## Funções do JAVA SCRIPT
1. Limpar Formulário: Função responsável por limpar todos os campos do formulário.
2. Validação de CEP: Função para validar o formato do CEP, aceitando apenas números com 8 dígitos.
3. Preencher Formulário: Função que preenche os campos do formulário com os dados de endereço, como logradouro, bairro, localidade e UF, obtidos através de uma API ao digitar um CEP válido.

## Estrutura do Código
• O arquivo principal de lógica do projeto é mains.js.
• O HTML interage com o JavaScript através de elementos de formulário com os IDs:
• logradouro
• bairro
• localidade
• uf
(Essas ligações entre JavaScript e html sao os responsaveis pela interface e por toda parte funcional do codigo).

## Funções Implementadas
1. LimparFormulario()
Responsável por limpar os campos do formulário após uma interação, garantindo que os valores dos campos estejam vazios.
const LimparFormulario = () => {
   document.getElementById('logradouro').value = '';
   document.getElementById('bairro').value = '';
   document.getElementById('localidade').value = '';
   document.getElementById('uf').value = '';


2. eNumero(numero)
/Valida se o valor inserido é um número e se segue o padrão de 8 dígitos.

const eNumero = (numero) => /^[0-9]+$/.test(numero);
3. preencherFormulario(endereco)
Preenche os campos do formulário com os dados retornados pela API (como logradouro, bairro, localidade e UF).
const preencherFormulario = (endereco) => {
   document.getElementById('logradouro').value = endereco.logradouro;
   document.getElementById('bairro').value = endereco.bairro;
   document.getElementById('localidade').value = endereco.localidade;
   document.getElementById('uf').value = endereco.uf;


## Url do tipo JSON
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;

    Uma URL do tipo JSON é um endereço da web que, quando acessado, retorna dados no formato JSON (JavaScript ObjectNotation). O JSON é um formato leve e fácil de interpretar, usado para a troca de informações entre um cliente (como um navegador) e um servidor. URLs que retornam JSON são comuns em APls, como as que fornecem informações sobre endereços, clima, redes sociais, etc. Essas URLs permitem que programas obtenham e manipulem dados de forma eficiente.

## Como Executar o Projeto
1. Clone o repositório para a sua máquina.
2. Abra o projeto em um editor de sua escolha.
3. Execute o arquivo index.html em um navegador com o botão “Go Live” ou outro servidor local.
4. Insira um CEP válido no formulário para verificar a funcionalidade de preenchimento automático.
5. Utilize o botão para limpar o formulário quando necessário.

## Esse projeto foi desenvolvido com o intuito de:
• Otimizar o processo de preenchimento de endereços, evitando que o usuário tenha que digitar cada campo manualmente.
• Reduzir erros ao preencher dados de localização, já que as informações são diretamente consultadas em uma base de dados oficial.
• Facilitar a integração com sistemas maiores, como plataformas de e-commerce ou sistemas de gestão de clientes, onde o cadastro de endereços é uma parte fundamental.
• Proporcionar uma melhor experiência ao usuário, tornando o processo mais rápido e confiável.

## METODO VALUUE

O Método Value consiste em investir em ativos subvalorizados, ou seja, cujo valor intrínseco é maior que o preço de mercado, com base na análise de fundamentos econômicos. A estratégia busca lucrar quando o mercado ajustar os preços.

## METODO FETCH

O Método Value consiste em investir em ativos subvalorizados, ou seja, cujo valor intrínseco é maior que o preço de mercado, com base na análise de fundamentos econômicos. A estratégia busca lucrar quando o mercado ajustar os preços.

// Função de consumo de API  ViaCep
// função assincrona
const pesquisarCep = async () => {
    limparFormulario();
    // Url do tipo JSON
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;.


## TECNOLOGIAS USADAS
-HTML.
-CSS.
-JAVA.
-API viaCEP.
-GitHub.