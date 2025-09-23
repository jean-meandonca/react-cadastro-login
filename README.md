# Projeto React + Vite + Tailwind + Axios

Esse é o frontend de um sistema simples de cadastro e listagem de usuários, feito em React (iniciado com Vite) e estilizado com TailwindCSS. Feito seguindo tutorial do youtube, do canal DevClub  
Ele se conecta a uma API em Node.js que faz toda a parte de backend.

**API que esse projeto consome:** [[COLOQUE AQUI O LINK DO BACKEND](https://github.com/jean-meandonca/node-api-jwt-express)]

---

## Como rodar o projeto

1. Clone o repositório e entre na pasta do projeto:
   git clone [<URL_DESTE_REPOSITORIO>](https://github.com/jean-meandonca/react-cadastro-login)

2. Instale as dependências:
   npm install

3. Inicie o servidor de desenvolvimento:
   npm run dev

4. Suba também o backend (API):
   Sem ele nada vai funcionar. A API roda normalmente em http://localhost:3333.  
   Siga as instruções do repositório da API para iniciá-la.

5. Abra o navegador no endereço que o Vite fornecer (normalmente http://localhost:5173) e comece a usar o sistema.

---

## Funcionalidades

- Cadastro de usuários com nome, e-mail e senha.  
- Login com token JWT do backend e armazenamento no localStorage.  
- Listagem de usuários autenticada.  
- Uso de React Hooks (`useState`, `useEffect`, `useRef`).  
- Axios para requisições HTTP.  
- Layout e estilização com TailwindCSS.
