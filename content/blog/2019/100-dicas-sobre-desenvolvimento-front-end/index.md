---
title: "100 dicas sobre desenvolvimento Front-end"
date: 2019-01-14 00:00:01
description: "👉 Brincadeira que virou uma thread bem legal: 💯 dicas rápidas sobre Desenvolvimento Front-end"
image: featured.png
tags: ["html", "javascript", "css"]
---

Nos últimos dias o Twitter recebeu várias threads super úteis partindo do principio: “Dá um RT ou uma curtida que eu faço um tweet sobre o tema”.

Achei a brincadeira legal e adaptei para o cenário developer com essa thread:

https://twitter.com/felipefialho_/status/1083160362642522112

A verdade é que achei que teria poucos RTs na minha thread, não imaginava que a brincadeira pegasse tanto entre devs, mas a parada pegou!

Além do alto número de retweets, outras pessoas resolveram aproveitar para também brincarem com a temática dev e quem usa Twitter teve uma semana com dicas sensacionais.

Foi um desafio legal pensar nesse monte de dicas, e até tinhas outras várias em mente, mas escrever essa sequência cansou mais do que achei que cansaria e resolvi parar no 100 que é um número legal (quem sabe não vem mais daqui um tempo? 😜).

Também [criei um Moment para facilitar a visualização dentro do Twitter](https://twitter.com/i/moments/1083766796321243138).

Mas na internet nada escala melhor que texto escrito, então vamos a ele.

## 100 dicas rápidas sobre Front-end

1\. Visualmente `<b>` e `<strong>` deixam o elemento negrito. A diferença é que o `<b>` não carrega qualquer semântica e o `<strong>` representa um texto importante.

2\. `<i>` e `<em>` deixam o elemento itálico e ambos possuem carga semântica, sendo que o `<i>` costuma ser usado para coisas como expressões em outros idiomas e o `<em>` para indicar ênfase no texto.

3\. Isso significa que não é uma boa ideia usar o `<i>` para representar coisas como ícones, elementos sem semântica como o `<span>` funcionam melhor pra isso.

4\. Alguns elementos não carregam qualquer valor semântico, `<div>` e `<span>` são bons exemplos disso.

5\. Por padrão a `<div>` é display: block e o `<span>` é display: inline, não vale gastar linhas de CSS para definir ou alterar isso.

6\. Quando for desenvolver seus componentes, foque primeiro em garantir a semântica do HTML.

7\. Se você garantir semântica, pode usar classes CSS para estilizar as coisas (pensando em CSS padrão).

8\. Ainda sobre semântica, você pode pensar na hierarquia das informações como se estivesse diagramando um livro.

9\. Use apenas tags de `<h1>` até `<h6>` para criar títulos de cabeçalhos.

10\. Uma curiosidade é que atualmente você pode usar o `<a>` para envolver outros elementos (menos outro `<a>`).

11\. No passado quando precisávamos criar , por exemplo, um card com link, tínhamos que fazer gambiarras como deixar o `<a>` dentro do card com position absolute 0.

12\. Se usar libs baseadas em componentes, não caia na tentação de remover toda a semântica do HTML. Continue escrevendo código acessível.

13\. Usamos lang, na tag `<html>`, mas uma dica legal é que você pode usar lang em qualquer elemento e informar o idioma padrão do texto.

14\. E mais, você também pode estilizar qualquer elemento CSS baseado no uso do lang, tipo:

```css
.description[lang=”en”] { color: red };
.description[lang=”pt-br”] { color: blue };
```

15\. Isso se estende para qualquer propriedade nos elementos HTML, isso significa que é possível combinar WAI-ARIA com CSS e criar coisas bem legais, como esse Tooltip no CSS Components.

[![CSS Components](css-components.jpg)](https://www.felipefialho.com/css-components/#component-tooltip)

16\. Interessante notar, que até classes, podem ser usadas dessa forma, por exemplo:

```css
a[class=”active”]
```

17\. Sendo possível usar classes dessa forma, também é possível fazer coisas legais, como selecionar apenas elementos que tenham determinada palavra em algum lugar da classe:

```css
span[class*=”icon-”]
```

18\. Ou melhor ainda, capturando palavras separadas por espaço.

```css
span[class~=”icon arrow-right”]
```

19\. Também é possível selecionar apenas elementos que começam com determinada palavra:

```css
span[class^=”icon”]
```

20\. Com isso da pra fazer coisas bem legais, como selecionar apenas os links seguros (quem sabe pra botar um ícone de cadeado?):

```css
a[href^=”https://”]
```

21\. Também é possível fazer coisas como selecionar todos os elementos disabled do projeto e adicionar estilo:

```css
[disabled] { cursor: not-allowed; }
```

22\. No passado era comum adicionar classe, por exemplo, nos últimos items de uma lista para zerar estilos:

```html
<li class=”last”></li>
```

```css
li {
  border: black solid 1px;
}

.last {
  border: 0;
}
```

23\. Com o surgimento de pseudo-classes no CSS3, anos atrás, isso já não é necessário:

```css
:last-child {
  border: 0;
}
```

24\. Mas a dica acima é bem ruim, o ideal mesmo é não zerar propriedades no CSS, isso não faz mais sentido desde que o :not passou a ser aceito nos navegadores:

```css
li:not(:last-child} {
  border: black solid 1px;
}
```

25\. O :not é uma das minhas pseudo-classes favoritas do CSS, [já escrevi um artigo inteiro](/blog/2016/css-o-fodastico-not) falando disso:

26\. Usando apenas CSS é possível remover um elemento da tela caso ele não tenha conteúdo:

```css
div:empty {
  display: none;
}
```

27\. Rola até mesmo de misturar pseudo-classes, por exemplo, para que o elemento tenha um comportamento caso ele seja o último filho, mas não se ele for ao mesmo tempo o primeiro filho:

```css
.btn:last-child:not(:first-child)
```

28\. Dá pra fazer combinações muito loucas de pseudo-classes e pseudo-seletores, por exemplo, pegar uma classe .title apenas se ela não for um h2 e o .header não estiver ativo:

```css
.header:not(.active) + .main .title:not(h2)
```

29\. Pseudo-seletores, inclusive, ajudam demais para evitar resetar propriedades e fazer coisas legais com CSS.

30\. É possível, por exemplo, selecionar apenas o elemento seguinte e trocar o estilo baseado na classe do irmão, algo como:

```css
.btn.active + .btn {
  margin-left: 20px;
}
```

31\. Ou mesmo selecionar todos os elementos irmãos seguintes para adicionar estilo:

```css
.btn.active ~ .btn {
  margin-top: 20px;
}
```

32\. Também temos possibilidade de combinar pseudo-classes e pseudo-seletores para fazer coisas do tipo:

```css
input[type=”checkbox”]:checked ~ p {
  color: red;
}
```

33\. Partindo dessa base, podemos fazer um CSS super-interativo aproveitando dos estados de elementos como radio e checkbox e fazer um elemento aparecer ou sumir:

```css
p {
  display: none;
}

input[type=”checkbox”]:checked ~ p {
  display: block;
}
```

34\. Com isso dá pra fazer coisas surreais com CSS, sem usar JavaScript.

Essa é a base de todos os joguinhos e componentes desenvolvidos somente com CSS e apesar de parecer bruxaria, você acabou de ver que é super simples.

35\. Anos atrás (muitos anos) [escrevi um artigo mostrando como fiz todos os componentes do CSS Componentes](/blog/2014/e-possivel-utilizar-componentes-desenvolvidos-apenas-com-css):

36\. Falando em seletores, eles possuem performance de leitura nos navegadores. E é importante levar isso em conta na hora de escrever seu código.

37\. A performance de carregamento, do maior pro menor é

1. `#header`
2. `.header`
3. `header`
4. `nav + header`
5. `main > h1`
6. `main header`
7. `*`
8. `[type=”text”]`
9. `.header:before, header: after`

38\. Evite aninhar elementos fazendo coisas como:

```css
body header ul li
```

39\. O ideal mesmo, caso não esteja usando CSS-in-JS, é usar classe para estilizar elementos e evitar fazer aninhamentos grandes.

40\. Já escrevi um [artigo explicando todas as vantagens de usar classe](https://www.felipefialho.com/blog/2016/porque-usar-classes-para-estilizar-elementos)

41\. Justamente para deixar o CSS menos caótico e facilitar a manutenção de código que metodologias como BEM ou RCSS foram criadas.

42\. Mas elas não resolvem o principal problema do CSS, que chama especificidade. Colisão de estilos é a maior causa de problemas quando trabalhamos com CSS em grandes projetos.

43\. Para resolver o problema da especificidade, nosso companheiro de todas as horas, chamado JavaScript entrou em cena, trazendo soluções como:

- CSS Modules
- CSS-in-JS

Elas garantem que o estilo não vaze para outros componentes.

44\. A desvantagem de algumas libs de CSS-in-JS é a necessidade de ter aplicações baseadas em componentes (como React, Angular e Vue) para funcionar.

45\. Porém é possível utilizar, por exemplo CSS Modules, caso esteja utilizando Webpack no projeto, usei essa solução no meu [Kratos Boilerplate](https://github.com/LFeh/kratos-boilerplate) e pode servir para seus projetos estáticos:

46\. Uma das coisas legais do CSS Modules e outras libs CSS-in-JS, é não precisar mais pensar muito no nome das classes.

Ao invés de usar: `.header__title`
Você pode usar só: `.title`

47\. Se você desenvolve para navegadores modernos, após o avanço do Flexbox e CSS Grid, você não precisa usar mais float nos projetos para a construção dos grids.

48\. CSS Grid também tira bastante a necessidade de apostar em libs de grid systems, como a do Boostrap ou mesmo nas baseadas em PostCSS como Lost ou Jeet.

49\. CSS Grid e Flexbox podem e devem ser usadas juntas, mesmo resolvendo questões parecidas, cada uma tem sua especificidade de uso.

50\. Flexbox é unidimensional e ideal pra parte interna no layout dos componentes.

Tipo em um header com logo na esquerda e um botão de menu na direita, na qual você pode usar:

```css
.header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 60px;
}
```

51\. CSS Grid é multidimensional e ideal para a parte macro do layout, como grids.

Também funciona muito bem para criar uma lista de cards por exemplo. Além de escalar fácil no mobile.

52\. Faça bom uso das media-queries. O ideal é que você não crie pensando em desktop e depois sobrescreva as coisas no mobile. Funciona melhor usar o conceito mobile-first e escalar o componentes subindo o tamanho das resoluções.

53\. Você pode criar escopos dentro da classe através das media-queries.

Isso significa que pode manter tudo que for genérico pra todas as resoluções fora das media-queries e dentro dela apenas o que for especifico daquela resolução.

54\. Anos atrás escrevi esse [artigo explicando como criar escopos de media-queries](https://www.felipefialho.com/blog/2015/otimizando-e-organizando-as-media-queries), e de lá pra cá a ideia não mudou muito:

55\. No passado, usávamos `<div>` e `<span>` pra muita coisa que deveria carregar semântica. As tags inseridas a partir do HTML5 resolveram boa parte desses problemas.

56\. Quando estiver criando um componente, sempre faça uma analise se está fazendo bom uso dos elementos HTML e se pode utilizar outras que façam mais sentido.

57\. Atualmente existem aproximadamente ~110 tags HTML. É bastante improvável que não exista uma que sirva exatamente para cada ocasião.

58\. O `<main>` por exemplo, deve ser usado apenas uma vez no projeto e serve para definir o conteúdo principal dentro do `<body>`.

Eu costumo adicionar como irmão das tags `<header> `e `<footer>` principais.

```html
<body>
  <header><header>
  <main></main>
  <footer></footer>
</body>
```

59\. Você pode ter múltiplos `<header>` e `<footer>` pelo projeto.

Eles podem ser usados para definir cabeçalho ou rodapé de qualquer contexto, como dentro de `<article>` ou `<section>` por exemplo.

60\. `<article>` e `<section>` costumam gerar certa confusão quanto ao uso. Importante dizer que você pode ter um `<article>` dentro do `<section>` e vice versa.

61\. Anos atrás rolou uma [discussão sensacional sobre article x section](https://github.com/frontendbr/forum/issues/23) no [@frontendbr](https://twitter.com/frontendbr) e recomendo fortemente dar uma olhada:

62\. Sempre que for escrever um endereço dentro de um texto, use o elemento `<address>`, que possui exatamente a função de deixar esse conteúdo semântico.

63\. É ideal que você use a tag `<nav>` para todas as sessões do projeto, que represente navegação.

Você também pode ter múltiplos `<nav>` pela aplicação.

64\. Faça uso da tag `<noscript>`. Ele permite fornecer um feedback para o usuário caso o JavaScript não esteja disponível por algum motivo.

65\. Pode ver um apanhado das [tags HTML mais usadas nessa sessão do MDN (Mozilla Developer Network)](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element).

66\. Inclusive, essa é outra dica. [Sou apaixonado pelo MDN](https://developer.mozilla.org/). É o lugar que mais sinto confiança em validar as coisas e sempre aprendo alguma coisa nova.

67\. E é super válido lembrar que todo mundo pode contribuir com geração e tradução de conteúdo no MDN. Dica de ouro da [@larienmf](https://twitter.com/larienmf) 😄

68\. Você pode melhorar ainda mais a semântica e acessibilidade do projeto usando WAI-ARIA, que é dividido em duas categorias: `roles` e `states / properties`.

69\. Você pode por exemplo usar a [role=”dialog”] para componentes de modal.

```html
<div role=”dialog”>
```

70\. Também é possível definir quais são o `<header>` e o `<footer>` principais.

```html
<header role=”banner”>
<footer role=”contentinfo”>
```

71\. Outra possibilidade legal é deixar elementos apenas visuais, invisíveis para leitores de tela.

Funciona bem com ícones:

```html
<svg aria-hidden=”true”>
```

72\. Dá pra fornecer informações sobre o elemento caso o texto não esteja disponível na tela.

De novo um exemplo com ícone:

```html
<svg aria-label=”Facebook”>
```

73\. WAI-ARIA se torna ainda mais importante a medida que criamos componentes com elementos sem semântica HTM, por exemplo em componentes abstraídos por JavaScript.

É uma maneira de fornecer acessibilidade e significado para as tags que você criou.

74\. Rola ainda de acessar todos os valores das propriedades WAI-ARIA com :before e :after no CSS e fazer umas coisas muito loucas como essa:

<blockquote class="twitter-tweet"><p lang="pt" dir="ltr">👉 Criei um exemplo de código usando React, daquela solução em Pure CSS p/ adicionar label no Slider do Material.<br><br>Observe que uso apenas:<br><br>- [aria-valuenow]<br>- :after<br><br>Sem modificar nada no JavaScript do componente.<br><br>CSS é incrível, confia 💙<a href="https://t.co/7TsG1kkZgH">https://t.co/7TsG1kkZgH</a></p>&mdash; felipe.js (@felipefialho_) <a href="https://twitter.com/felipefialho_/status/1067093417451290624?ref_src=twsrc%5Etfw">November 26, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

75\. Já escrevi um [artigo sobre WAI-ARIA com alguns exemplos legais](https://www.felipefialho.com/blog/2016/sobre-wai-aria-acessibilidade-e-semantica).

76\. Nunca se esqueça que :after e :before no CSS não funcionam sem a propriedade content 😋

```css
:before { content: “Já acabou?”; }
:after { content: “Ainda não”; }
```

Detalhe que por padrão eles são inline.

77\. A propósito, gosto muito de :before e :after, me permitem fazer diversas coisas com CSS sem encostar no HTML.

Pensa que com apenas 1 elemento HTML, você na verdade tem 3\. Isso abre um mar de possibilidades.

78\. Mas vale o aviso: Todo o conteúdo que você adicionar no content do `:before` e `:after` não tem valor semântico e não renderiza no HTML.

Significa que o texto não será acessível. Use apenas para complementos puramente visuais.

79\. Quando receber um projeto, faça uma analise e veja tudo que poderia ser componente. Não pense em páginas inteiras.

Desenvolva componentes separados e faça com que o agrupamento deles vire a página. Isso vale tanto para aplicações SPAs como pra projetos estáticos.

80\. Você não trabalha sozinho ou sozinha.

Converse com sua equipe, principalmente designers, e explique sobre componentes e como todas as aplicações modernas são baseadas neles.

Isso vai fazer seus códigos ficarem muito mais assertivos.

81\. A unidade de medida que mais utilizo é rem e para usar como se fosse px, basta adicionar:

```css
html { font-size: 10px; }
```

E 1.6rem passa a ser aproximadamente 16px.

82\. Uma vantagem do rem, é escalar em diferentes resoluções, já que a proporção é baseada no root. Se quiser que as medidas fiquem proporcionalmente menor ou maior, basta diminuir ou aumentar o font-size do root:

```css
media (max-width: 600px) {
  html {
    font-size: 10px;
  }
}
```

83\. Deixando automagicamente o font-size fluido:

```css
html {
  font-size: calc(#{$minimum-size}px + (#{$maximum-size} — #{$minimum-size}) * ((100vw — #{$minimum-viewport}px) / (#{$maximum-viewport} — #{$minimum-viewport})));
}
```

Confuso? Olha esse exemplo que deixei pra vocês no Codepen:

https://codepen.io/felipefialho/pen/wRYoPN

84\. Evite usar números mágicos, seja no CSS, seja no JavaScript. Uma dica é escalar suas variáveis CSS:

```scss
$space-xxs : .4rem;
$space-xs : .8rem;
$space-sm : 1.6rem;
$space : 2.4rem;
$space-md : 3.2rem;`
$space-lg : 4.8rem;
```

85\. Cuidado com loucuras no z-index. Crie variáveis pra isso e coloque lint para impedir que sejam feito commits sem o uso dessas variáveis no z-index.

```scss
$zindex-default: 1;
$zindex-footer: 10;
$zindex-header: 30;
$zindex-overlay: 40;
```

86\. Entendendo facilmente como `em` funciona: Ele é baseado no tamanho do pai, ou seja.

```css
.pai { font-size 10px; }
.filho1 { font-size: .8rem; }
.filho2 { font-size: 1.2rem; }
```

`.filho1` vai ter aproximadamente `8px` e `.filho2` vai ter aproximadamente `12px`.

87\. Se quiser testar se uma variável JavaScript possui valor:

```js
const xis = 'x'
const hasXis = !!xis
console.log(hasXis) // true
```

88\. Para garantir integridade e evitar bugs, o ideal é sempre testar por tipo:

```js
console.log(1 === '1') // false
```

89\. Mas você pode comparar valores ignorando o tipo:

```js
console.log(1 == '1') // true
```

90\. Variáveis const não são imutáveis por padrão:

```js
const felipe = ['corinthiano', 'maloqueiro']
felipe.push('sofredor')
console.log(felipe) // ['corinthiano', 'maloqueiro', 'sofredor']
```

91\. Para variáveis const serem imutáveis é necessário adicionar Object.freeze:

```js
const d2k = Object.freeze(['javascript', 'ninja', 'react])
d2k.push('jquery') // Uncaught TypeError: Cannot add property 3, object is not extensible
```

92\. Você pode facilmente concatenar strings usando template literal:

```js
const f = (s = '❤️') => `I ${s} CSS`
console.log(f())
// I ❤️ CSS
```

93\. Com spread operator você consegue concatenar arrays facilmente:

```js
const skills1 = [ 'css', 'html' ]
const skills2 = [ 'js', 'ts' ]
const newSkills = [ …skills1, …skills2, 'ux' ]
console.log(newSkills) // [ 'css', 'html', 'js', 'ts', 'ux' ]
```

94\. Também dá pra mergear objetos:

```js
const felipe = { name: 'Felipe', company: 'Cubo' }
const xhamps = { nickname: 'Xhamps Monstro' }
const xhampelipe = { …xhamps, …felipe }
console.log(xhampelipe)
// { nickname: "Xhamps Monstro", name: "Felipe", company: "Cubo" }
```

95\. Também rola de transformar string em array com spread operator:

```js
const s = 'HTML'
const c = [ …s ]
console.log(c) // [ 'H', 'T', 'M', 'L' ]
```

96\. A combinação spread operator com destructuring é simplesmente matadora:

```js
const person = { name: 'Felipe', lastName: 'Fialho', age: 28 }
const { name, age } = person
console.log(name, age) // Felipe 28
```

97\. Se quiser fazer o oposto e criar um novo objeto (ou array) com o resto do original, temos o rest operator:

```js
const person = { name: 'Felipe', lastName: 'Fialho', age: 28 }
const { name, …restOfPerson } = person
console.log(restOfPerson) // { lastName: "Fialho", age: 28 }
```

98\. Uma dica é usar parameters destructuring nas funções, isso a torna mais descritiva na hora do uso, e evita precisar “advinhar” a ordem dos parâmetros.

```js
const person = ({ name, age }) => `${name} tem ${age} anos`
person({ age: '28', name: 'Felipe'})
// Felipe tem 28 anos
```

99\. Para imagens, com a propriedade CSS object-fit você consegue usar proporções que antes só eram possíveis com background-image:

```css
img { object-fit: cover; }
```

100\. Combinando `position: relative` e `:before`, é possível tratar do aspect-ratio das imagens. Isso é especialmente útil para cuidar da proporção de vídeos e iframes.

Fiz esse exemplo no Codepen para darem uma olhada:

https://codepen.io/felipefialho/pen/MBdrer/

Gostaram? 😄
