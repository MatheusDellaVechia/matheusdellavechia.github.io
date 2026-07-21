---
title: 'CQRS não é sobre ter dois bancos'
description: 'Uma curiosidade comum: CQRS separa modelos, não necessariamente bancos de dados.'
pubDate: 2026-07-18
tags: ['arquitetura', 'cqrs', 'ddd']
---

Toda vez que CQRS entra numa conversa, alguém resume como "um banco de escrita
e um banco de leitura". Já perdi a conta de quantas vezes ouvi isso. E não é
que esteja errado — é que isso é uma _possível_ consequência, não a definição.

## O que CQRS realmente separa

CQRS (Command Query Responsibility Segregation) separa o **modelo de escrita**
do **modelo de leitura**. Você pode aplicar isso com:

- o mesmo banco e as mesmas tabelas;
- o mesmo banco com projeções/views dedicadas à leitura;
- bancos diferentes, sincronizados por eventos.

A escolha depende de escala, consistência e complexidade que você aceita pagar.

## Um exemplo prático

Imagine uma API só de leitura que devolve um catálogo paginado pra quem consome
de fora. Ela não precisa de `@Entity`, nem de contexto de persistência, nem do
peso do JPA. Projetar o SQL direto num _record_ de leitura costuma ser mais
simples, mais rápido e muito mais fácil de dar manutenção:

```java
public record ProductSummary(long id, String name, BigDecimal price) {}

public List<ProductSummary> findAll(String category, int offset, int limit) {
    return jdbcClient.sql(SELECT_PRODUCTS)
            .param("category", category)
            .param("offset", offset)
            .param("limit", limit)
            .query(ProductSummary.class)
            .list();
}
```

Repare que o modelo de leitura (`ProductSummary`) não tem nada a ver com o
agregado que você usaria pra _escrever_ um produto, com suas regras e
invariantes. São dois modelos, mesmo banco. Isso já é CQRS.

Moral da história: escolha a separação pelo problema que você tem na frente,
não pela regra que decorou num artigo — inclusive este.
