[![Portfólio](https://img.shields.io/badge/Clique_aqui-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://edson-garcia-portfolio.vercel.app)

📖 Sobre
Meu portfólio pessoal. Ele apresenta meus projetos, minhas habilidades e um pouco de como eu penso ao desenvolver software, com foco em backend Python e interfaces modernas e animadas.

| Categoria | Ferramentas |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| UI | [React 19](https://react.dev) |
| Linguagem | [TypeScript](https://www.typescriptlang.org) |
| Animações | [Framer Motion](https://www.framer.com/motion/) |
| Ícones | [Lucide React](https://lucide.dev) |
| Qualidade | ESLint + React Compiler |
| CI/CD | GitHub Actions + Vercel |

 Como rodar localmente  
Pré-requisitos: Node.js 20.9 ou superior e npm.  

bash  
# 1. Clone o repositório 
```
git clone https://github.com/BigodeMarine/Portfolio.git  
```
```
cd portfolio-mechanicus  
```

# 2. Instale as dependências  
```
npm install  
```

# 3. Inicie o servidor de desenvolvimento  
npm run dev  

```
Abra http://localhost:3000 no navegador.  
```

📜 Scripts disponíveis  
Comando	Descrição  
npm run dev	Inicia o servidor de desenvolvimento 

npm run build	Gera o build de produção  

npm run start	Inicia o build de produção  

npm run lint	Executa o ESLint    

```
📁 Estrutura do projeto  
├── .github/workflows/   # Pipeline de CI (lint, tipos e build)  
├── app/                 # Rotas e layouts (App Router)  
├── components/          # Componentes reutilizáveis  
├── public/              # Imagens e arquivos estáticos  
├── next.config.ts       # Configuração do Next.js  
└── tsconfig.json        # Configuração do TypeScript  
```

🔄 CI/CD  
A cada push ou pull request na main, o GitHub Actions executa:  

1. Instalação das dependências (npm ci)  
2. Lint (npm run lint)  
3. Geração de tipos (next typegen) e checagem (tsc --noEmit)  
4. Build de produção (npm run build)  
5. O deploy é feito automaticamente pela Vercel a cada push na main.  


<p align="center">Feito com ☕, Typescript e um pouco de engrenagem.</p>  

