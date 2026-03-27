# Formulário Multi-Etapas com React

Este projeto é uma implementação de um formulário de cadastro multi-etapas, desenvolvido com React, TypeScript e Vite. O objetivo é oferecer uma experiência de usuário fluida e organizada para o preenchimento de informações em diferentes fases.

## Melhorias em Relação ao Projeto Original

Esta versão do projeto inclui várias melhorias de código, organização e funcionalidades em comparação com a versão original do curso:

- **Estrutura de Pastas Otimizada:** O código foi reorganizado em uma estrutura de pastas mais robusta e escalável, separando claramente `components`, `constants`, `contexts`, `enums`, `hooks`, `pages`, `providers`, `reducers`, `styles` e `types`.
- **Página de Conclusão:** Foi adicionada uma quarta etapa ao formulário, que exibe uma tela de "Cadastro Completo" com as informações do usuário, funcionalidade ausente no projeto original.
- **Gerenciamento de Estado com Reducer:** O estado do formulário é gerenciado de forma mais eficiente utilizando `useReducer`, centralizando a lógica de atualização de estado.
- **Tipagem com TypeScript:** A tipagem foi aprimorada em todo o projeto, garantindo maior segurança e manutenibilidade do código.
- **Estilização com Styled Components:** A estilização foi portada para Styled Components, permitindo um CSS-in-JS mais moderno e componentizado.
- **ESLint e Vite:** O projeto utiliza o Vite para um desenvolvimento mais rápido e o ESLint para garantir a qualidade e a padronização do código.

## Tecnologias Utilizadas

- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Styled Components](https://styled-components.com/)
- [ESLint](https://eslint.org/)

## Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/matheus-dev-fs/react-router-multiform.git
    ```
2.  **Acesse a pasta do projeto:**
    ```bash
    cd react-router-multiform
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    ```
4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
5.  **Acesse a aplicação em seu navegador:**
    [http://localhost:5173/](http://localhost:5173/)
