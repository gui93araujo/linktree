# 🌳 Linktree Clone

Projeto desenvolvido para centralizar links de redes sociais e contatos em uma interface personalizada e responsiva. Este projeto faz parte da minha transição de stack para o ecossistema Web, focando em boas práticas com **React**, **TypeScript** e integração com serviços de Backend-as-a-Service (**Firebase**).

🔗 **Acesse o projeto online:** [linktree-aoky.vercel.app](https://linktree-aoky.vercel.app)

---

## 🛠️ Tecnologias e Ferramentas

O projeto foi construído utilizando as seguintes tecnologias:

* **Core:** [React](https://reactjs.org/) (Hooks para gestão de estado e efeitos).
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (Tipagem estática para maior segurança e produtividade).
* **Build Tool:** [Vite](https://vitejs.dev/) (Ambiente de desenvolvimento de alta performance).
* **Estilização:** [TailwindCSS](https://tailwindcss.com/) (Estilização baseada em utilitários e design responsivo).
* **Backend & Auth:** [Firebase](https://firebase.google.com/) (Firestore para persistência de dados e Authentication para controle de acesso).

---

## ✨ Funcionalidades

* **Dashboard Administrativo:** Área privada para gestão de links sociais.
* **Autenticação:** Sistema de login seguro via Firebase Auth.
* **Gestão de Links (CRUD):** Adição, edição e remoção de links em tempo real com persistência no Firestore.
* **Customização Dinâmica:** Alteração de cores e ordem dos links.
* **Página Pública:** Interface otimizada para o usuário final, com foco em dispositivos móveis.
* **Design Responsivo:** Adaptável para desktops, tablets e smartphones.

---

## ⚙️ Como executar o projeto localmente

Para rodar este projeto em sua máquina, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/gui93araujo/linktree.git](https://github.com/gui93araujo/linktree.git)

2. **Rodando o projeto**

   ```bash
   npm install
   npm run dev
   ```
3. **Configure as Variáveis de Ambiente:**  
Crie um arquivo .env na raiz do projeto e adicione suas chaves do Firebase (exemplo abaixo):

   ```bash
   VITE_FIREBASE_API_KEY=sua_chave_aqui
   VITE_FIREBASE_AUTH_DOMAIN=seu_projeto.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=seu_projeto_id
   VITE_FIREBASE_STORAGE_BUCKET=seu_projeto.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
   VITE_FIREBASE_APP_ID=seu_app_id
