---
name: revisar-post
description: >-
  Revisa e lapida um post existente do blog (src/content/blog/pt|en/*.md)
  antes de publicar: ajusta a voz pra não soar "IA", confere a estrutura,
  valida o frontmatter, checa o par PT/EN e faz a checagem de segurança (nada
  proprietário/segredo/cliente). Use quando o Matheus disser "revisa esse
  post", "dá uma passada nesse texto", "tá pronto pra publicar?".
---

# Skill: revisar-post

Passa o pente fino num post já escrito. Não reescreve do zero — melhora o que já existe.

## Antes de revisar

1. Leia o guia de estilo: `.claude/skills/novo-post/estilo.md`.
2. Releia o post-modelo `src/content/blog/pt/cqrs-nao-e-dois-bancos.md`
   (e sua tradução em `src/content/blog/en/cqrs-nao-e-dois-bancos.md`) pra calibrar.
3. Leia o post a revisar por inteiro — PT e, se existir, o par em EN.

## Checklist

### 1. Segurança (bloqueante — resolve antes de tudo)
- [ ] Sem código/nome proprietário (classe, serviço, tabela, produto interno).
      Se houver, generalize (`Order`, `Product`, `Invoice`, `User`).
- [ ] Sem segredo, token, credencial ou URL interna.
- [ ] Sem dado/nome de cliente ou de terceiros.
- [ ] Sem sinal que comprometa o emprego atual (ex.: vontade de sair da empresa).

### 2. Voz (não soar "IA")
- [ ] Abre por um gancho real (crença/mito/situação), em primeira pessoa —
      não com "Neste artigo..." nem "No mundo acelerado de hoje...".
- [ ] Tem opinião e admite trade-offs; não é neutro e genérico.
- [ ] Concreto > abstrato: o exemplo carrega o peso da explicação.
- [ ] Sem buzzword de enfeite. DDD/Clean Arch só se forem o assunto.
- [ ] Sem metáfora forçada empilhada; no máximo uma tirada bem colocada.
- [ ] Fecho é uma "moral"/takeaway curto — não um "Em resumo, vimos que...".

### 3. Estrutura
- [ ] Gancho → `## O que X realmente é/faz` → `## Um exemplo prático` → fecho.
- [ ] Entre 250 e 500 palavras (direto ao ponto). Corte o que não agrega.

### 4. Frontmatter (schema em `src/content.config.ts`)
- [ ] `title` presente e sem ponto final.
- [ ] `description` em 1 frase.
- [ ] `pubDate` no formato `AAAA-MM-DD`.
- [ ] `tags`: 2–4, minúsculas, sem acento, reaproveitando as já usadas.

### 5. Par PT/EN
- [ ] Existe `src/content/blog/pt/<slug>.md` **e**
      `src/content/blog/en/<slug>.md` com o mesmo basename. Se faltar um dos
      dois, avise o Matheus (não gere a tradução sem confirmar) — sem par, o
      toggle de idioma naquele post cai pro índice do blog em vez de linkar
      direto (fallback correto, mas não o ideal).
- [ ] `pubDate` igual nos dois arquivos.
- [ ] `tags` equivalentes traduzidas (mesma quantidade, mesmo sentido).
- [ ] EN é tradução fiel do PT — mesma estrutura, mesmo código, mesma voz —
      não um resumo nem uma reescrita solta.

## Como reportar

- Aplique as correções direto no arquivo (edições cirúrgicas, preservando a voz do Matheus).
- Liste o que mudou e por quê, em bullets curtos.
- Se achar algo de segurança, **destaque em separado** antes de qualquer coisa.
- Valide no fim:
  `cd /home/matheus.oliveira@db1.com.br/personal/blog && pnpm build`.
