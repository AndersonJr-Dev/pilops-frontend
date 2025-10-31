# Projeto: Pilops - Frontend (Teste Técnico)

Interface frontend do teste técnico da Pilops, construída com React, Vite e TypeScript. Esta aplicação consome uma API backend separada para exibir um histórico de voos, seguindo um design fornecido pelo Figma.

## 🔗 Repositório do Backend (Obrigatório)

**Este projeto precisa do backend (API) rodando para funcionar.**
O repositório do backend pode ser encontrado aqui:
[https://github.com/SEU-USUARIO/pilops-backend](https://github.com/SEU-USUARIO/pilops-backend) 
*(Lembre-se de trocar pela URL real do seu repositório backend!)*

## 🚀 Como Rodar

1.  **Backend:** Primeiro, clone, instale e rode o [projeto backend](https://github.com/SEU-USUARIO/pilops-backend) seguindo as instruções do `README.md` dele. A API deve estar rodando em `http://localhost:3001`.

2.  **Frontend:**
    * Clone este repositório:
        `git clone [URL_DESTE_REPO_FRONTEND]`
    * Entre na pasta:
        `cd pilops-frontend`
    * Instale as dependências:
        `npm install`
    * Rode a aplicação:
        `npm run dev`

3.  A aplicação estará disponível em `http://localhost:5173`.

## 🛠️ Tecnologias Utilizadas

* **React (com Vite):** Biblioteca principal para a construção da UI.
* **TypeScript:** Para segurança de tipos e melhor desenvolvimento.
* **React Router DOM:** Para o roteamento entre as páginas (Lista e Detalhes).
* **Axios:** Para fazer as chamadas HTTP para a API backend.
* **React Icons:** Para a iconografia (setas, troféu, ícones de recompensa).
* **CSS Modules:** Para estilização componentizada e sem conflitos de classes.

## 📝 Decisões Técnicas ("Júnior Inteligente")

* **Componentes Reutilizáveis:** O Header (logo) e o `FlightInfoCard` (bloco de 4 colunas de informação do voo) foram criados em `src/components`. Isso segue o princípio DRY (Don't Repeat Yourself), já que ambos os componentes são usados nas telas de Lista e Detalhes.

* **Backend First:** Durante o desenvolvimento, foi notado que o design exigia dados (como `companhia` e `registro`) que a API `GET /flights` não fornecia. Em vez de "remendar" o frontend, a API no `pilops-backend` foi corrigida primeiro para prover os dados corretos.

* **Estilização "Pixel-Perfect":** Foi feito um esforço para replicar fielmente o design do Figma, incluindo o uso de Variáveis CSS (`:root`) em `index.css` para o tema escuro e a implementação do visual do trajeto com CSS Grid e Flexbox puros.