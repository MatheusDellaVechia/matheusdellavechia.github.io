# Guia de estilo — posts do blog do Matheus

Referência de voz e formato para escrever posts em `src/content/blog/`.
O post-modelo é **`src/content/blog/cqrs-nao-e-dois-bancos.md`** — releia-o antes
de escrever. Sempre leia também 1–2 posts existentes para calibrar o tom.

## Voz (o mais importante)

Escreva como o Matheus falaria explicando algo pra um colega — não como um
artigo genérico de IA.

- **Primeira pessoa, PT-BR, conversacional mas profissional.** "Já perdi a conta
  de quantas vezes ouvi isso."
- **Comece por um gancho real:** uma crença comum, um mito, ou uma situação do
  dia a dia. Nada de "Neste artigo vamos explorar...".
- **Opinião tem valor.** Pode discordar do senso comum e defender um ponto.
- **Honestidade > perfeição.** Admitir trade-offs e o que custa caro é bem-vindo.
- **Concreto vence abstrato.** Um exemplo pequeno explica mais que três parágrafos.
- **Fecho com uma "moral"/takeaway curto e direto**, às vezes com uma pitada de
  autoironia. Ex.: "escolha pelo problema, não pela regra que decorou — inclusive
  este artigo."

### Evitar (soa "IA")
- Introduções infladas ("No mundo acelerado de hoje...", "É importante notar que...").
- Listas de bullet points genéricas sem conteúdo próprio.
- Buzzword em excesso. **Cite DDD, Clean Architecture etc. com parcimônia** —
  só quando forem realmente o assunto, nunca como enfeite.
- Metáforas forçadas e piadinhas empilhadas. Uma tirada bem colocada > cinco.
- Conclusões que só repetem o texto ("Em resumo, vimos que...").

## Formato (estrutura do post de CQRS)

1. **Gancho** (1–2 parágrafos): a crença comum / o problema, em primeira pessoa.
2. **`## O que X realmente é/faz`**: desfaz o mal-entendido; aqui uma lista curta
   de nuances/opções é ok quando agrega.
3. **`## Um exemplo prático`**: um trecho de código **neutro** + explicação do que
   ele mostra e por quê.
4. **Fecho**: a "moral da história" / takeaway direto.

Tamanho alvo: 250–500 palavras. Direto ao ponto.

## Segurança (regra dura — nunca violar)

O blog é público. **Nunca** inclua:
- Código proprietário do empregador ou de clientes; nomes reais de classes,
  serviços, tabelas ou produtos internos (ex.: nada de `OrderExtractQueryResult`
  ou nomes de projeto internos). **Generalize** para domínios neutros: `Order`,
  `Product`, `Invoice`, `User`.
- Segredos, tokens, URLs internas, credenciais.
- Sinais que comprometam o emprego atual (ex.: "buscando sair pra outra empresa").
- Dados de terceiros / nomes de clientes.

Na dúvida, generalize o exemplo e siga em frente.

## Frontmatter (schema — ver `src/content.config.ts`)

```yaml
---
title: 'Título curto e específico'
description: 'Uma frase que resume a ideia central (aparece nos cards e no SEO).'
pubDate: AAAA-MM-DD   # data de hoje
tags: ['tag1', 'tag2']  # minúsculas, sem acento; 2–4 tags
# updatedDate: AAAA-MM-DD   # opcional
# draft: true               # opcional; true esconde do site
---
```

Regras: `title` sem ponto final; `description` 1 frase; `tags` reaproveite as já
usadas quando fizer sentido (ex.: `arquitetura`, `java`, `spring`, `cqrs`, `ddd`).

## Arquivo

- Local: `src/content/blog/<slug>.md`
- `slug`: kebab-case, sem acento, derivado do título. Ex.: "CQRS não é sobre ter
  dois bancos" → `cqrs-nao-e-dois-bancos`.
- Não sobrescreva um arquivo existente — confira antes com `ls src/content/blog/`.
