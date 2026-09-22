# 📚 Biblioteca Virtual

Aplicação web de uma biblioteca virtual desenvolvida com Next.js, TypeScript e PostgreSQL.

O projeto está sendo desenvolvido como parte de estudos práticos de Next.js, com foco em construção de aplicações full stack, autenticação, validação de formulários, persistência de dados e boas práticas de organização de código.

---

## 🚀 Tecnologias

### Front-end

- [Next.js](https://nextjs.org/) 16
- [React](https://react.dev/) 19
- TypeScript
- React Hook Form
- Zod
- CSS

### Back-end

- Next.js Server Actions
- Prisma ORM 7
- PostgreSQL
- bcrypt

### Ferramentas

- Node.js
- npm
- Git
- ESLint
- Prisma Studio

### Serviços

- Resend — envio de e-mails

---

## 📋 Funcionalidades

### Autenticação

- [x] Tela de login
- [x] Tela de cadastro
- [x] Validação de formulários
- [x] Cadastro de usuários no PostgreSQL
- [x] Hash de senha com bcrypt
- [x] Verificação de credenciais no login
- [x] Verificação de e-mail duplicado
- [ ] Sessão de autenticação
- [ ] Proteção de rotas
- [ ] Logout
- [ ] Recuperação de senha
- [ ] Código de verificação por e-mail
- [ ] Redefinição de senha

### Biblioteca

- [ ] Dashboard
- [ ] Cadastro de livros
- [ ] Listagem de livros
- [ ] Busca de livros
- [ ] Filtros
- [ ] Detalhes do livro
- [ ] Edição de livros
- [ ] Exclusão de livros
- [ ] Categorias
- [ ] Sistema de empréstimos

---

## 📁 Estrutura do projeto

```text
minha-biblioteca/
│
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   ├── register/
│   │   └── forgot-password/
│   │
│   └── ...
│
├── components/
│   └── ui/
│       ├── Button/
│       └── Input/
│
├── features/
│   └── auth/
│       ├── actions/
│       │   ├── login.ts
│       │   └── register.ts
│       │
│       ├── components/
│       │   ├── LoginForm.tsx
│       │   ├── RegisterForm.tsx
│       │   └── AuthForm.css
│       │
│       └── validation/
│           ├── login.schema.ts
│           └── register.schema.ts
│
├── lib/
│   ├── generated/
│   │   └── prisma/
│   │
│   ├── prisma.ts
│   └── resend.ts
│
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── public/
│   └── images/
│
├── prisma7.config.ts
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- Node.js
- npm
- Git

Para verificar:

```bash
node --version
npm --version
git --version
```

---

## 📥 Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre na pasta:

```bash
cd minha-biblioteca
```

Instale as dependências:

```bash
npm install
```

---

## 🔐 Variáveis de ambiente

Crie um arquivo:

```text
.env.local
```

na raiz do projeto.

Exemplo:

```env
DATABASE_URL="postgres://..."
SHADOW_DATABASE_URL="postgres://..."

RESEND_API_KEY="re_..."
```

### Importante

O arquivo `.env.local` não deve ser versionado.

As credenciais e chaves utilizadas no ambiente local devem permanecer privadas.

---

# 🗄️ Banco de dados

O projeto utiliza PostgreSQL com Prisma ORM.

Durante o desenvolvimento, o PostgreSQL local pode ser iniciado através do Prisma:

```bash
npx prisma dev
```

Mantenha esse processo em execução durante o desenvolvimento.

---

## 🔄 Migrations

Para verificar o estado das migrations:

```bash
npx prisma migrate status
```

Para criar uma nova migration:

```bash
npx prisma migrate dev --name nome-da-migration
```

Exemplo:

```bash
npx prisma migrate dev --name add-auth-models
```

Depois de alterações no schema, gere o Prisma Client:

```bash
npx prisma generate
```

---

## 🧬 Prisma Schema

O schema do banco está localizado em:

```text
prisma/schema.prisma
```

Atualmente existem os seguintes modelos principais:

### User

Representa os usuários da aplicação.

Principais campos:

```text
id
name
email
password
createdAt
updatedAt
```

A senha armazenada no banco é um hash gerado pelo bcrypt.

### PasswordResetCode

Utilizado para o futuro fluxo de recuperação de senha.

Principais campos:

```text
id
codeHash
expiresAt
usedAt
createdAt
userId
```

---

## 🖥️ Prisma Studio

Para visualizar os dados do banco durante o desenvolvimento:

```bash
npx prisma studio
```

O Prisma Studio permite visualizar e manipular os registros das tabelas.

> O PostgreSQL iniciado por `npx prisma dev` precisa estar rodando para que o Studio consiga acessar o banco.

---

# ▶️ Executando o projeto

É necessário manter o banco e o Next.js em execução.

### Terminal 1 — PostgreSQL

```bash
npx prisma dev
```

### Terminal 2 — Next.js

```bash
npm run dev
```

Depois acesse:

```text
http://localhost:3000
```

---

## 🔑 Rotas atuais

### Autenticação

```text
/register
/login
/forgot-password
```

As páginas de autenticação estão organizadas utilizando Route Groups do App Router:

```text
app/
└── (auth)/
```

O `(auth)` é um Route Group e não aparece na URL.

Por exemplo:

```text
app/(auth)/login/page.tsx
```

corresponde a:

```text
/login
```

---

# 🧪 Fluxo atual de autenticação

## Cadastro

O cadastro segue o fluxo:

```text
RegisterForm
     ↓
React Hook Form
     ↓
Zod
     ↓
Server Action
     ↓
Prisma
     ↓
PostgreSQL
```

Durante o cadastro:

1. Os dados são validados pelo Zod.
2. O e-mail é verificado no banco.
3. É verificado se já existe um usuário com aquele e-mail.
4. A senha é transformada em hash usando bcrypt.
5. O usuário é persistido no PostgreSQL.

---

## Login

O login atualmente segue:

```text
LoginForm
     ↓
React Hook Form
     ↓
Zod
     ↓
Server Action
     ↓
Prisma
     ↓
bcrypt.compare()
```

O sistema:

1. Valida o formulário.
2. Procura o usuário pelo e-mail.
3. Compara a senha informada com o hash armazenado.
4. Retorna o resultado da autenticação.

A sessão de autenticação ainda será implementada.

---

# 🧩 Arquitetura

O projeto utiliza uma organização baseada em funcionalidades.

Por exemplo, os recursos relacionados à autenticação ficam agrupados em:

```text
features/auth/
```

Enquanto componentes reutilizáveis ficam em:

```text
components/ui/
```

A comunicação com infraestrutura externa fica em:

```text
lib/
```

Essa organização busca separar:

- interface;
- validação;
- regras da funcionalidade;
- acesso ao banco;
- integrações externas.

---

# 🔒 Segurança

Algumas medidas já implementadas:

- Senhas não são armazenadas em texto puro.
- Senhas são protegidas com bcrypt.
- E-mail possui restrição `UNIQUE` no banco.
- Variáveis de ambiente não são versionadas.
- Validação de dados utilizando Zod.
- Acesso ao banco através de Server Actions.
- Mensagem genérica para credenciais inválidas no login.

Ainda serão implementados:

- Sessão baseada em cookie seguro.
- Proteção de rotas.
- Logout.
- Rate limiting.
- Recuperação de senha segura.
- Expiração de códigos de recuperação.
- Uso único dos códigos de recuperação.
- Tratamento completo de erros de autenticação.

---

# 📧 Resend

O projeto utiliza o Resend para envio de e-mails.

A configuração está em:

```text
lib/resend.ts
```

A chave da API deve ser configurada através de:

```env
RESEND_API_KEY="re_..."
```

O serviço será utilizado principalmente no fluxo de recuperação de senha.

---

# 📦 Scripts

Os principais comandos disponíveis são:

### Desenvolvimento

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Produção

```bash
npm start
```

### Lint

```bash
npm run lint
```

### Prisma

```bash
npx prisma generate
```

```bash
npx prisma migrate dev
```

```bash
npx prisma migrate status
```

```bash
npx prisma studio
```

---

# 🌱 Git e Commits

O projeto utiliza **Conventional Commits**.

Exemplos:

```text
feat(auth): implement user registration and login
```

```text
feat(auth): implement authentication session
```

```text
fix(auth): handle duplicated email
```

```text
style(auth): improve authentication form
```

```text
refactor(auth): simplify login action
```

### Principais tipos

| Tipo | Utilização |
|---|---|
| `feat` | Nova funcionalidade |
| `fix` | Correção de bug |
| `refactor` | Refatoração |
| `style` | Alterações visuais/formatação |
| `docs` | Documentação |
| `test` | Testes |
| `chore` | Configuração/manutenção |

---

# 🚧 Status do projeto

O projeto está em desenvolvimento.

### Autenticação

- [x] Estrutura das páginas de autenticação
- [x] Cadastro
- [x] Validação com Zod
- [x] Persistência com Prisma
- [x] PostgreSQL
- [x] Hash de senha com bcrypt
- [x] Login e validação de credenciais
- [ ] Sessão
- [ ] Cookies de autenticação
- [ ] Proteção de rotas
- [ ] Logout
- [ ] Recuperação de senha
- [ ] Redefinição de senha

### Biblioteca

- [ ] Estrutura principal
- [ ] Livros
- [ ] Categorias
- [ ] Busca
- [ ] Empréstimos
- [ ] Dashboard

---

## 📚 Objetivo do projeto

Além de desenvolver uma aplicação funcional, este projeto tem como objetivo consolidar conhecimentos em:

- Next.js App Router
- React
- TypeScript
- Server Actions
- React Hook Form
- Zod
- Prisma ORM
- PostgreSQL
- Autenticação
- Segurança de aplicações
- Organização de projetos
- Git e Conventional Commits

---

## 👩‍💻 Desenvolvimento

Projeto desenvolvido para fins de estudo e prática de desenvolvimento web full stack.

**Tecnologias principais:** Next.js + TypeScript + PostgreSQL + Prisma.
