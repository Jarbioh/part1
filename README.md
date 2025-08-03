# Full Stack Open - Part 1

Este repositório contém as soluções dos exercícios do **Part 1** do curso [Full Stack Open](https://fullstackopen.com/), incluindo os projetos **unicafe** e **anecdotes**.

## Estrutura

```
part1/
├── anecdotes/   # Aplicação de anedotas (exercícios 1.12–1.14)
└── unicafe/     # Aplicação de feedback Unicafe (exercícios 1.6–1.11)
```

## Como rodar

Cada aplicação é independente. Para rodar qualquer uma delas:

1. Navegue até a pasta do app desejado:
   ```sh
   cd unicafe
   # ou
   cd anecdotes
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```sh
   npm start
   ```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Exercícios

- **Unicafe:** Sistema de coleta e exibição de feedbacks (bom, neutro, ruim), com estatísticas.
- **Anecdotes:** Exibição de anedotas aleatórias, sistema de votos e destaque para a mais votada.

## Observações

- Cada pasta contém seu próprio `.gitignore` e configuração.
- O feedback coletado é armazenado apenas em memória
