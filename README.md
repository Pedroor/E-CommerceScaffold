<h1 align="center">
  <img alt="Joker" src="https://c.tenor.com/sqwr0sIibDIAAAAM/joker-movie-joker.gif" width="250px" />
</h1>



<p align="center">
  <a href="#page_with_curl-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#hammer-iniciando-mobile">Tecnologias</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#books-requisitos">Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-começando">Começando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#thought_balloon-começando">Inspiração</a>
</p>

<h1 align="center">
 <img alt="Home" src="https://i.imgur.com/2Nv7iF7.png" width="400" />
 <img alt="Home" src="https://i.imgur.com/GiwUdxo.png" width="400" />
  <h1 align="center">
 <img alt="Home" src="https://i.imgur.com/RJxwcSG.png" width="400" />
 <img alt="Home" src="https://i.imgur.com/EpR9CYY.png" width="400" />


</h1>


</h1>

## :page_with_curl: Sobre
Este repositório contém um boilerplate de um pequeno e-commerce, feito utilizando as principais ferramentas do ecossistema react-native.

Para a listagem de produtos foi utilizado a https://fakestoreapi.com/.
Como ferramenta de gerenciamento de estado e persistência de alguns dados foi utilizado o - [Zustand](https://github.com/pmndrs/zustand)

O objetivo principal desse projeto foi seguir alguns requisitos tanto de layout, quanto de regras de negócio.

Logo abaixo segue alguns pontos do que foi implementado

```bash
1- Splash screen

2= Home
Listagem de produtos:

- Deve apresentar a lista de produtos e categorias consumidas através da API indicada nos pré-requisitos;
- Se atentar para o carrossel horizontal para o filtro e novidades;
- Os produtos no carrossel de novidades devem ser os primeiros cinco produtos retornados pela API;
- Apenas pode ter um filtro marcado a cada solicitação.
Adicionar item ao carrinho:

- Pode ser adicionado mais de um item para o carrinho;
- Quando existir itens no carrinho deve ser exibida uma interface no rodapé da tela permitindo ir para o carrinho (frame do Figma 02.01- ITEM_ON_CART);
- A quantidade de produtos no carrinho deve ser apresentada através de um badge no ícone do carrinho na Navigation Bar.
Persistência de estado:

- O estado do carrinho deve ser persistido entre sessões, até a finalização do checkout.

3- Carrinho
Listagem de itens adicionados ao carrinho:

- Deve apresentar os itens adicionados ao carrinho;
- Deve ser possível adicionar ou remover os itens do carrinho;
- Deve apresentar o valor total do carrinho.
Modal remoção de itens

- Ao remover um item com apenas uma unidade, deve ser apresentado um modal perguntando sobre a remoção do item do carrinho (frame do Figma 03.01 - CART).
Carrinho vazio

- Deve ser apresentado uma interface amigável caso o carrinho não possua itens adicionados (frame do Figma 03.02 - CART_EMPTY).

4- Confirmação
Ao pressionar o botão "FINALIZAR COMPRA" o usuário deve ser levado para a tela de confirmação e ter seu carrinho zerado (frame do Figma 04 - CONFIRMATION).

```

Segue o link para consulta do layout: - - [FIGMA](https://www.figma.com/file/eBNLxQP4rQCmu28s2JmTPN/E-commerce?node-id=0%3A1) 


Funcionalidades a serem implementadas futuramente.

- [Integração com um gateway de pagamentos. STRIPE ](https://stripe.com/br)
- - [Integração com o React-Query para data fetching ](https://react-query.tanstack.com/)
- Implementar um tema dark para a aplicação


## :hammer: Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [React-Native CLI](https://reactnative.dev/docs/environment-setup)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Navigation](https://reactnavigation.org/)
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/)
- [Axios](https://github.com/axios/axios)
- [Styled Components](https://styled-components.com/)
- [VS Code](https://code.visualstudio.com/) com [Prettier](https://prettier.io/)

## :books: Requisitos
- Ter [**Git**](https://git-scm.com/) para clonar o projeto.
- Ter [**React-Native**](https://reactnative.dev/docs/environment-setup) configurado para executar o projeto.
- Ter [**Node.js**](https://nodejs.org/en/) instalado.
- Um dispositivo ou emulador iOS ou Android

## :rocket: Começando
``` bash
  # Clonar o projeto:
  $ https://github.com/Pedroor/dev-cinemapp

  # Entrar no diretório:
  $ cd cinemapp
  
  # Instalar as dependências:
  $ yarn
  
  # Caso esteja usando IOS
  $ pod install
```

## :iphone: Iniciando mobile
```bash
  # No mesmo diretorio abrir um console no terminal:
  # No console basta digitar:
  
  $ yarn android ou yarn ios
```

# :thought_balloon: Créditos

Feito com ❤️ por Pedro Arthur 👋🏻 [Get in touch!](https://github.com/Pedroor)
