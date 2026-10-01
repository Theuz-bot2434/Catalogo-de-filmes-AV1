# 🎬 CineCatálogo — Projeto AV1 (Front-end Frameworks)

Protótipo front-end de um catálogo de filmes feito com **React + Vite + React Router + CSS**.
Permite pesquisar, filtrar por gênero, favoritar, cadastrar e excluir filmes.

**Autor:** _(André Matheus Oliveira de Sá - 01822223)_

## Como executar

Pré-requisito: Node.js instalado.

```bash
npm install
npm run dev
```

Depois abra o endereço mostrado no terminal (normalmente http://localhost:5173).

## Páginas (rotas)

| Rota           | O que faz                                                        |
| -------------- | ---------------------------------------------------------------- |
| `/`            | Banner, busca por título, filtro por gênero e grid de filmes     |
| `/filme/:id`   | Detalhes do filme (sinopse, ano, diretor, avaliação, favoritar)  |
| `/novo-filme`  | Formulário para cadastrar um novo filme                          |

## Dados iniciais (JSON)

Os filmes iniciais ficam em `src/data/filmes.json` (5 filmes) com os campos
`id`, `titulo`, `categoria`, `imagemUrl`, `sinopse`, `nota`, `favorito`
(além de `ano` e `diretor`, usados na página de detalhes).

Esses são os dados **iniciais**: só aparecem na primeira vez que o app é aberto.

## Uso do localStorage

Todas as alterações (**favoritar, adicionar e excluir filmes**) são salvas no
`localStorage` do navegador, na chave `cinecatalogo-filmes`. Assim, os dados
**persistidos** continuam lá mesmo após recarregar a página.

Para voltar aos dados iniciais do JSON: abra o DevTools (F12) → Application →
Local Storage → apague a chave `cinecatalogo-filmes` e recarregue.

## Estrutura

```
src/
  data/        filmes.json e lista de categorias
  pages/       Home, Detalhes, NovoFilme
  components/  Header, CardFilme, Filtros, ImagemFilme
  styles/      global.css
  App.jsx      estado principal (useState) + rotas + localStorage
  main.jsx     ponto de entrada
```

## Requisitos atendidos

- Componentes funcionais, props e `useState`
- Listas com `key` estável (`id`)
- 3 rotas com React Router e navegação por links
- Busca e filtro controlados por estado
- Formulário controlado com validação (título, gênero e URL da imagem)
- Persistência no `localStorage`
- Mensagens condicionais: "Nenhum filme encontrado", sucesso e erro de validação
