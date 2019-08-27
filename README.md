# Cifra de César

## Índice

* [1. Resumo do projeto](#2-resumo-do-projeto)
* [2. Checklist](#10-checklist)

***

## 1. Resumo do projeto

Esse foi o produto final do primeiro sprint do bootcamp da Laboratoria. O desafio foi criar uma plataforma para cifrar e decifrar uma palavra ou mensagem.
O projeto foi feito em javascript, com o básico de HTML e CSS.


### Definição do produto

Os usuários são pessoas que queiram criar uma senha codificada para suas redes sociais e/ou decodifica-las.
O produto pega o texto digitado, efetua uma cifra tanto com letras maiusculas quanto minusculas com o número de deslocamento
indicado pelo próprio usuário, transformando o texto em um código que somente terá coerência para o usuário ou para a pessoa que use 
o "Decodificar" no proprio site.

### Interface do usuário

A interface permite ao usuário:

* Escolher um número indicando quantas posições de deslocamento de caracteres quer que a cifra utilize.
* Inserir uma mensagem (texto) para ser cifrada.
* Ver o resultado da mensagem cifrada.
* Inserir uma mensagem (texto) para ser decifrada.
* Ver o resultado da mensagem decifrada.

### Scripts / Arquivos

* `README.md`: Explica como executar a aplicação, assim como uma introdução a aplicação e suas funcionalidades.
* `src/index.html`: aqui é o ponto de entrada da aplicação. Este arquivo
  contém a marcação HTML e chama o CSS e JavaScript necessários.
* `src/cipher.js`: aqui é inplementado o objeto cipher, o qual deve estar
  _exportado_ no objeto global (`window`). Este objeto (`cipher`) contém
  dois métodos:
  - `cipher.encode(offset, string)`: `offset` é o número de posições que
      queremos mover para a direita no alfabeto e `string` é a mensagem (texto)
      que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` é o número de posições que
      queremos mover para a esquerda no alfabeto e `string` é a mensagem (texto)
      que queremos decifrar.
* `src/index.js`: aqui são executados os eventos de DOM, chamando as funções
  `cipher.encode()` e `cipher.decode()`.
* `test/cipher.spec.js`: este arquivo contem alguns testes implementados para `cipher.encode()` e `cipher.decode()`.

## 2. Checklist

Essa seção é para ter um controle do que consegui completar no projeto.

### Parte Obrigatória

* [x] `README.md` adicionar informação sobre o processo e decisões do desenho.
* [x] `README.md` explicar claramente quem são os usuários e as suas relações
  com o produto.
* [x] `README.md` explicar claramente como o produto soluciona os
  problemas/necessidades dos usuários.
* [x] Usar VanillaJS.
* [x] **Não** usar `this`.
* [x] Implementar `cipher.encode`.
* [x] Implementar `cipher.decode`.
* [x] Passar o linter com a configuração definida.
* [x] Passar as provas unitárias.
* [x] Testes unitários cubrindo 70% dos _statements_, _functions_ e _lines_, e
  no mínimo 50% das _branches_.
* [x] Interface que permita escolher o `offset` (chave de deslocamento) usava
  para cifrar/decifrar.
* [x] Interface que permita escrever um texto para ser cifrado.
* [x] Interface que mostre o resultado da cifra corretamente.
* [x] Interface que permita escrever um texto para ser decifrado.
* [x] Interface que mostre o resultado decifrado corretamente.

### Parte Opcional: "Hacker edition"

* [x] Cifrar/decifrar minúsculas.
* [x] Cifrar/decifrar _outros_ caractéres (espações, pontuação, `ç`, `á`, ...).
* [x] Permitir usar `offset` negativo.
