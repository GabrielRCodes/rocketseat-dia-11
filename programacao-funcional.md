Programação funcional:
É um paradigma de programação como a Orientação a bojetos, uma maneira de resolver problemas.

Funções:

- Pequenas tarefas dentro de uma função
- Abstrair um problema e isolar ele dentro da função
- Não modificar os dados fora dela
- Pequenas e bem específicas no que fazem

* Um ou mais dados entram em uma função e novos dados saem dessa função.
* Uma função não altera dados.
* Uma função não guarda estado stateless (Estado).

Linguagens funcionais:

- JavaScript (multiparadigma)
- PHP (multiparadigma)
- Elixir
- Haskell

Pontos positivos:

- Fácil para manutenção
- Fácil para uso de testes

* Funções isoladas e consistentes

- Códigos mais confiáveis

Princípios

PARADIGMAS

- Programação Imperativa
- Programação Declarativa

DADOS

- Imutabilidade
- Stateless

FUNÇÕES

- Independentes
- Puras
- Higher-order
- Fist-class
- Composição

PROGRAMAÇÃO IMPERATIVA

- O código é pensado e gerado em sequência
- O código é pensado como um passo-a-passo, como uma receota de bolo
- Uma coisa depende da outra
- O estado de um dado é alterado constantemente causando mutações nas variáveis
- Orientação a Objetos é um tipo de paradigma imperativo

PROGRAMAÇÃO DECLARATIVA

- O código é gerado para fazer algo, não importa como
- O que fazer e não como fazer
- Não há necessidade de um passo a passo no código
- Programação funcional é um tipo de paradigma declarativo

IMUTABILIDADE

- Uma variável não pode variar
- Se você precisar mudar uma variável, você não muda, você cria uma nova

STATELESS

- Não guarda estado
- A função só conhece dados entregues à ela
- A resposta não poderá variar

FUNÇÕES INDEPENDENTES

- Deverá ter ao menos 1 argumento
- Deverá retornar algo
- Nada que aceontecer lá dentro afeta o mundo externo
- Dados imutáveis
- Não guardar estado
  - Não feremos uso de loops (for, while), mas se houver necessidade de tal, usaremos recursão (a função chama ela mesma)

FUNÇÕES PURAS

- Não deverá depender de nenhum dado externo a não ser o que foi passado como argumento
- Não deverá sofrer nenhuma interferência do mundo externo a ela
- Se o argumento é o mesmo, o retorno não poderá ser diferente quando a função for chamada novamente
- Não terá nenhum efeito colateral no seu código
- Não irá modificar nenhum dado
- Não irá guardar nenhum estado

FIRST-CLASS FUNCTION

- Podem estar em qualquer lugar, inclusive, como parâmetro de outras funções
- A função poderá ser entendida como uma variável

HIGHER-ORDER FUNCTION

- Funções que recebem funções como argumentos
- Funções que poderão retornar outras funções

COMPOSIÇÃO DE FUNÇÕES

- Um encadeamento de funções
- Uma função que retorna um dado e vai para outra função, que retorna um dado e vai para outra função, que retorna...
