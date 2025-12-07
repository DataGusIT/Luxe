# LUXE - Loja de Design de Interiores

> Interface de e-commerce front-end moderna e minimalista, desenvolvida para explorar conceitos avançados de UI/UX, manipulação de DOM e persistência de dados local.

[![Status](https://img.shields.io/badge/Status-Concluído-success)](https://github.com/DataGusIT/luxe-store)
[![HTML5](https://img.shields.io/badge/HTML5-E65120)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Sobre o Projeto

O **LUXE** é uma aplicação web Front-End (Single Page Interface) desenvolvida com o objetivo de **aperfeiçoamento técnico** em desenvolvimento web. O foco do projeto foi criar uma experiência de compra de luxo, utilizando design minimalista e interações fluidas, sem a necessidade de um backend complexo.

O sistema simula o funcionamento completo de uma loja virtual, gerenciando o estado do carrinho de compras e da lista de desejos (wishlist) através do `LocalStorage` do navegador, garantindo que os dados do usuário persistam mesmo após recarregar a página.

## 🖼️ Demonstração Visual

| Landing Page (Hero) | Catálogo de Produtos | Responsividade Mobile |
| :---: | :---: | :---: |
| <img width="1919" height="914" alt="Image" src="https://github.com/user-attachments/assets/704e7f2e-9d02-41b4-bc82-ddcf51f1f1a6" /> | <img width="1900" height="1079" alt="Image" src="https://github.com/user-attachments/assets/8b56765e-eef0-4aec-8b33-433684b20e25" /> | <img width="356" height="620" alt="Image" src="https://github.com/user-attachments/assets/bb68cd1b-2485-4bf9-877a-7457c5e2cf3d" /> |

## ✨ Funcionalidades

### 🛍️ Experiência de Compra
-   **Carrinho de Compras Interativo:** Sidebar lateral (gaveta) que permite visualizar, remover e calcular o total dos itens dinamicamente.
-   **Sistema de Favoritos (Wishlist):** Funcionalidade para salvar produtos preferidos, com o status mantido visualmente nos cards.
-   **Busca em Tempo Real:** Barra de pesquisa que filtra os produtos instantaneamente por nome ou categoria.

### 🎨 UI & UX
-   **Design Minimalista de Luxo:** Foco em tipografia, espaço em branco e uma paleta de cores neutras.
-   **Micro-interações:** Efeitos de hover, transições suaves e notificações (toasts) para feedback visual.
-   **Animações de Scroll:** Elementos surgem na tela (Fade Up) utilizando a `IntersectionObserver API`.

### ⚙️ Aspectos Técnicos
-   **Persistência de Dados:** Uso de `LocalStorage` para manter o carrinho e os favoritos salvos no navegador.
-   **Responsividade Total:** Layout fluido que se adapta de desktops a dispositivos móveis, com menu hambúrguer e grid ajustável.
-   **Performance:** Carregamento otimizado de imagens (`lazy loading`) e manipulação eficiente do DOM.

## Tecnologias

### Estrutura e Estilo
-   **HTML5 Semântico**
-   **CSS3** (Variáveis CSS, Flexbox, Grid, Media Queries)
-   **Google Fonts** (Playfair Display, Montserrat)
-   **Remix Icons**

### Lógica e Comportamento
-   **JavaScript (Vanilla ES6+)**
-   **DOM Manipulation**
-   **LocalStorage API**
-   **Intersection Observer API**

## Primeiros Passos

Este projeto é puramente front-end e não requer um processo de build.

1.  **Clone o repositório**
    ```bash
    git clone https://github.com/DataGusIT/luxe-store.git
    cd luxe-store
    ```

2.  **Execute o projeto**
    -   Basta abrir o arquivo `index.html` diretamente no seu navegador.
    -   *Recomendado:* Use a extensão **Live Server** do VS Code para uma melhor experiência de desenvolvimento.

## Aprendizados

Este projeto foi fundamental para consolidar conhecimentos em:

-   Manipulação avançada de Arrays e Objetos em JavaScript (`filter`, `map`, `reduce`).
-   Gerenciamento de estado no Front-end sem frameworks.
-   Criação de layouts complexos com CSS Grid.
-   Lógica de programação aplicada a e-commerce.

## Suporte e Contato

-   **Email**: [g.moreno.souza05@gmail.com](mailto:g.moreno.souza05@gmail.com)
-   **LinkedIn**: [Gustavo Moreno](https://www.linkedin.com/in/gustavo-moreno-8a925b26a/)

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

<div align="center">
  Desenvolvido por Gustavo Moreno
  <br><br>
  <a href="https://www.linkedin.com/in/gustavo-moreno-8a925b26a/" target="_blank">
    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="24" alt="LinkedIn"/>
  </a>
</div>
