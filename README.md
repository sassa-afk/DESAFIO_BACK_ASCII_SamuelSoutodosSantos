👋 Olá , eu sou o Samuel Souto dos Santos / @sassa-afk 👀 ..
- Sou estudante de Sistemas de Informação e desenvolvedor em formação, com projetos voltados à aplicação prática dos conhecimentos adquiridos tanto na graduação quanto na experiência de trabalho.
- Atualmente estudo e crio projetos com intenção aplicar meus conhecimentos passados ao longo de minha experiência academica e no mercado de trabalho 
- Você consegue chegar até mim através do email samuelsouto21@gmail.com .

# Desafio ASCII backend APIrest
---

Este projeto é um desafio técnico, com o objetivo de avaliar habilidades em desenvolvimento backend, organização de código e boas práticas de arquitetura. A aplicação consiste em uma API REST construída em Node.js com TypeScript, projetada para ser escalável, modular e de fácil manutenção.

O foco principal do projeto é criar endpoints para gerenciar produtos, incluindo informações como, mostrando e meus conceitos e skil tecnicas

No momento as APIS  estão disponiveis no diretorio GitHub e funcionando no endpoint free do render documentado e acessivo atraves do swagger no link: https://api-node-ts-kuin.onrender.com/api-docs/

**OBS:**

- Este projeto está hospedado em um servidor gratuito Render, o qual entra em modo de hibernação (sleep mode) após um período de inatividade.
- Tanto o servidor node da api e o dba postgres foram hospedados no serviço render free
- O primeiro acesso após o modo sleep pode levar alguns segundos ou minutos extras.
- Após o servidor ser reativado, todas as requisições funcionam normalmente.

# Tecnologia utilizadsa
---

├── Node.js (Servidor)
├── Postgres (Banco de dados)
├── Swagger (documentação)
└── Sequelize (ORM)


# Depedencias instaladas no node.js
---

├── @types/express@5.0.3s
├── @types/swagger-jsdoc@6.0.4
├── @types/swagger-ui-express@4.1.8
├── express@5.1.0
├── donten@5.9.3
├── pg@8.16.3
├── sequelize@6.37.7
├── swagger-jsdoc@6.2.8
├── swagger-ui-express@5.0.1
├── ts-node-dev@2.0.0
└── typescript@5.9.3




# Estrutura aplicada do projeto
---

A aplicação tem como estrutura Camadas (Layered Architecture / N-tier) dividas entre pastas na quais cada diretorio apresenta uma organização para criação e execução aplicação 

--- 
	├──src
	│   │
	│	├── api-node-ts@1.0.0
	│	├── controllers
	│	│       ├── routsDelete.ts
	│	│       ├── routsGet.ts
	│	│       ├── routsPost.ts
	│	│       └── routsPut.ts
	│	├── database
	│	│       └── index.ts
	│	├── dtos
	│	│       └── ProdutoDTO.ts
	│	├── models
	│	│       └── ProdutoModel.ts
	│	├── utils
	│	│    └── funcoesDefalt.ts
	│	├── node
	│	├── render.yaml
	│	├── service
	│	├── swagger.ts
	│	├── tsc
	│	├── main.ts
	│	└── main.ts
	│ 
	└── dist 
---

O projeto é composto por camadas e organizações sendo elas :

**Camada de controllers** : Responsável por gerenciar as rotas da aplicação e controlar o fluxo das requisições HTTP. Nessa camada estão disponíveis os endpoints POST, GET, PUT e DELETE, implementados nos seguintes arquivos:


	─ controllers
	       ├── routsDelete.ts
	       ├── routsGet.ts
	       ├── routsPost.ts
	       └── routsPut.ts

Cada arquivo é responsável por tratar requisições específicas e direcioná-las à camada de serviços para processamento da lógica de negócio.

**Camada database** : Esta camada é responsável por gerenciar a conexão com o banco de dados e armazenar as configurações necessárias para que a aplicação interaja com o PostgreSQL.

	├── database
	│	    └── index.ts

Aqui ficara as configuraçãos permite que a aplicação se conecte de forma segura e consistente ao banco de dados, facilitando operações de CRUD através das camadas de Model e Service atraves das funcionalidades import Sequelize ;

**Camada DTOS** : Responsavel por padronizar os dados que entram e saem da aplicação, garantindo consistência entre a API, a lógica de negócio e o banco de dados.

	├── dtos
	│     └── ProdutoDTO.ts

O ProdutoDTO.ts define a estrutura de dados do produto, especificando quais campos são esperados em requisições (entrada) e respostas (saída), evitando que informações indesejadas ou incorretas sejam processadas. Sua criação foi visando garantir a tipagem forte e validação de dados antes de chegar à camada de serviço ou ao banco de dados.

**Camada models** : Responsável por representar as entidades do banco de dados dentro da aplicação e abstrair as operações de persistência, como consultas, inserções, atualizações e exclusões.

	├── models
	│       └── ProdutoModel.ts

Ela define o modelo do produto, incluindo campos, tipos de dados, chaves primárias, relacionamentos e validações básicas.
Ele atua como ponte entre o banco de dados e a camada de Service, permitindo que a aplicação manipule os dados usando objetos e métodos do Sequelize, sem precisar escrever SQL manualmente.

Em conjunto com o Sequelize, essa camada facilita a execução de operações de CRUD, transações e consultas avançadas, mantendo o código organizado, seguro e escalável.

**Camada uteis** : Esta camada é responsável por fornecer funções auxiliares e padrões que podem ser utilizadas em toda a aplicação, com o objetivo de reduzir a repetição de código e padronizar operações comuns, como validações e respostas da API.

	├── utils
	│    └── funcoesDefalt.ts

Com essa camada, a aplicação mantém consistência na validação de dados e respostas da API, evitando duplicação de código em Controllers e Services, além de melhorar a legibilidade e manutenção do projeto.

**Arquivos importante de configutação de ambiente do servidor**

- node/ → Diretório padrão do Node.js, normalmente contém dependências e arquivos gerenciados pelo NPM.
- render.yaml → Arquivo de configuração para deploy em plataformas como Render, definindo ambiente, build e start da aplicação.
- service/ → Camada onde fica a lógica de negócio da aplicação, responsável por processar dados antes de enviar à camada de Controller ou ao banco.
- swagger.ts → Configuração do Swagger, usada para documentar e testar os endpoints da API.
- tsc/ → Diretório de saída ou configuração do TypeScript Compiler, gerando os arquivos JavaScript compilados.
- main.ts → Ponto de entrada da aplicação, inicializa servidor, rotas, middlewares e conexão com o banco.

# Banco de dados 
---

O banco de dados PostgreSQL foi instalado localmente na máquina de desenvolvimento.No mesmo foi criada uma tabela simples chamada produtos para a aplicação, com as seguintes configurações:

---
	  Column   |         Type          | Collation | Nullable |               Default                |
	-----------|-----------------------|-----------|----------|--------------------------------------| 
	 id        | integer               |           | not null | nextval('produtos_id_seq'::regclass) |
	 nome      | character varying(50) |           |          | 									 | 
	 valor     | double precision      |           | not null | 									 |
	 categoria | character varying(50) |           | not null |  									 |

	Indexes:
	    "produtos_pkey" PRIMARY KEY, btree (id)
---

 **Tabela acessos**

---
	CREATE TABLE produtos (
	    id SERIAL PRIMARY KEY, 
	    nome VARCHAR(50),
	    valor DOUBLE PRECISION NOT NULL,
	    categoria VARCHAR(50) NOT NULL
	);
---


# Construção do projeto localmente
---

	#========================================================================
	# Cria o diretório raiz do projeto :

	mkdir api-node-ts@1.0.0
	cd api-node-ts@1.0.0

	#========================================================================
	# Cria pastas principais :

	mkdir controllers database dtos models node service tsc utils

	#========================================================================
	# Cria arquivos dentro de cada pasta :

	touch controllers/routsDelete.ts
	touch controllers/routsGet.ts
	touch controllers/routsPost.ts
	touch controllers/routsPut.ts
	touch database/index.ts
	touch dtos/ProdutoDTO.ts
	touch models/ProdutoModel.ts
	touch utils/funcoesDefalt.ts

	#========================================================================
	# Cria arquivos na raiz : 

	touch main.ts
	touch render.yaml
	touch swagger.ts

	#========================================================================
	# Instalado o node e depencia dos serviços : 

	npm init -y
	npm install express@5.1.0 pg@8.16.3 sequelize@6.37.7 swagger-jsdoc@6.2.8 
	swagger-ui-express@5.0.1 \
	&& npm install -D @types/express@5.0.3 @types/swagger-jsdoc@6.0.4 @types/swagger-ui-express@4.1.8 ts-node-dev@2.0.0 typescript@5.9.3
	npm install express @types/express --save-dev
	npm install --save-dev undici-types
 
	#========================================================================
	# Comando para iniciar o servidor apos instalação e criação dos diretorios

	npx tsc --init
	npm run biud
	npm start

	#========================================================================

	# Gerenciador de dados postgres PSQL
	apt install postgresql postgresql-contrib -y
	sudo -u postgres

	#========================================================================
	# Vercionando o codigo no git hub
	git init
	git commit -m "first commit"
	git branch -M main
	git remote add origin https://github.com/meu_repositorio
	git push -u origin main






 
# Apis construidas e seus retornos
---


| Rota                 | Descrição                             | Método     |
| -------------------- | ------------------------------------- | ---------- |
| `/api/produtos`      | Lista todos os produtos               | **GET**    |
| `/api/produtos/{id}` | Busca um produto pelo ID              | **GET**    |
| `/api/produtos`      | Cria um novo produto                  | **POST**   |
| `/api/produtos/{id}` | Atualiza as informações de um produto | **PUT**    |
| `/api/produtos/{id}` | Remove um produto                     | **DELETE** |



# Possiveis melhorias futuras
---

- Adicionar uma camada de testes automatizados para garantir a estabilidade da aplicação.
- Criar uma tabela de usuários e senhas para controle de autenticação.
- Implementar JWT (JSON Web Token) para autenticação e autorização segura nas APIs.
- Desenvolver uma API para cadastro de usuários e gerenciamento de credenciais.
- Criar uma API de geração de token JWT, permitindo o acesso autenticado às demais rotas.