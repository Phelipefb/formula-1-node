# 🏎️ API REST de Fórmula 1 com Node.js e TypeScript

Este projeto foi inspirado no desafio de API da DIO, mas passou por uma refatoração para ficar mais organizado, didático e próximo de uma estrutura profissional. A ideia é expor dados de pilotos e equipes de Fórmula 1 por meio de uma API REST simples, com os dados sendo mantidos localmente em arrays em memória.

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-20%2B-339933?logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?logo=typescript&logoColor=white)
![Fastify](https://img.shields.io/badge/Fastify-4.x-000000?logo=fastify&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-green)

</div>

## 🚀 O que foi melhorado em relação ao projeto base da DIO

A versão atual recebeu melhorias importantes para deixar a API mais limpa e escalável:

- Separação por camadas: interfaces, repositório, serviço, controlador e rotas
- Organização mais clara do código para facilitar manutenção
- Endpoints completos para CRUD de pilotos
- Uso de arrays locais como fonte de dados temporária
- Tratamento de erros HTTP básico para entradas inválidas
- Estrutura pronta para evoluir com banco de dados no futuro

## 🧩 Tecnologias utilizadas

- Node.js
- TypeScript
- Fastify
- @fastify/cors
- tsx
- tsup

## 📦 Estrutura de pastas

```text
src/
  controllers/
  interfaces/
  repositories/
  routes/
  services/
  server.ts

```

### Descrição das pastas

- `controllers/`: recebe as requisições HTTP e retorna as respostas
- `interfaces/`: define as estruturas de dados usadas pela API
- `repositories/`: controla o acesso aos dados locais em arrays
- `services/`: contém a regra de negócio
- `routes/`: registra as rotas da aplicação
- `server.ts`: ponto inicial da API

## 🛣️ Rotas disponíveis

### Equipes

- `GET /teams`

### Pilotos

- `GET /drivers`
- `GET /drivers/:id`
- `POST /drivers`
- `PUT /drivers/:id`
- `DELETE /drivers/:id`

## 🧪 Exemplo de requisição POST

Body JSON:

```json
{
  "name": "Yuki Tsunoda",
  "team": "Red Bull Racing",
  "number": 22,
  "country": "Japan",
  "championships": 0,
  "age": 25
}
```

## ▶️ Como rodar o projeto

### Pré-requisitos

- Node.js 20+
- npm 10+

### Passos

```bash
git clone <url-do-repositorio>
cd node-api-f1
npm install
npm run start:dev
```

A API ficará disponível em:

```text
http://127.0.0.1:3333
```

## ⚙️ Scripts disponíveis

```bash
npm run start:dev
npm run start:watch
npm run dist
npm run start:dist
```

## ✅ Testes

Para executar os testes do repositório:

```bash
node --import tsx --test tests/driver.repository.test.ts
```

## 📌 Observação

Este projeto usa dados locais em memória, então as alterações feitas via API não persistem em banco de dados. Ele foi pensado como uma base para aprender arquitetura de API, separação de responsabilidades e consumo via REST.
