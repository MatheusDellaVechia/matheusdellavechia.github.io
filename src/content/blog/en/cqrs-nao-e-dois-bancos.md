---
title: 'CQRS is not about having two databases'
description: 'A common misconception: CQRS separates models, not necessarily databases.'
pubDate: 2026-07-18
tags: ['architecture', 'cqrs', 'ddd']
---

Every time CQRS comes up in a conversation, someone sums it up as "a write
database and a read database." I've lost count of how many times I've heard
that. It's not exactly wrong — it's that this is a _possible_ consequence,
not the definition.

## What CQRS actually separates

CQRS (Command Query Responsibility Segregation) separates the **write model**
from the **read model**. You can apply that with:

- the same database and the same tables;
- the same database with projections/views dedicated to reads;
- different databases, kept in sync through events.

The choice depends on the scale, consistency and complexity you're willing to pay for.

## A practical example

Picture a read-only API that returns a paginated catalog to outside consumers.
It doesn't need `@Entity`, a persistence context, or the weight of JPA.
Mapping the SQL straight into a read record is usually simpler, faster, and
much easier to maintain:

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

Notice that the read model (`ProductSummary`) has nothing to do with the
aggregate you'd use to _write_ a product, with all its rules and invariants.
That's two models, one database. That's already CQRS.

Moral of the story: pick the separation based on the problem in front of you,
not the rule you memorized from some article — this one included.
