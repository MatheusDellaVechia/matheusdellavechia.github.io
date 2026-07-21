---
name: novo-post
description: >-
  Cria um novo post para o blog (src/content/blog/pt|en/*.md) no estilo do
  Matheus, seguindo o post-modelo de CQRS, e já gera a versão traduzida em
  inglês junto. Use quando o Matheus disser algo como "quero escrever um
  post", "postar algo que aprendi/apliquei", "novo artigo para o blog".
  Coleta o tema, gera o frontmatter e escreve PT + EN na voz e no formato
  certos, sem vazar código/nome proprietário.
---

# Skill: novo-post

Escreve um post novo do zero, pronto pra publicar, no estilo do blog do Matheus.

## Antes de escrever (obrigatório)

1. Leia o guia de estilo: `.claude/skills/novo-post/estilo.md`.
2. Leia o post-modelo: `src/content/blog/cqrs-nao-e-dois-bancos.md` (é a régua de voz e formato).
3. Leia o esqueleto: `.claude/skills/novo-post/template.md`.
4. Confira o schema do frontmatter em `src/content.config.ts` (campos válidos: `title`, `description`, `pubDate`, `updatedDate?`, `tags`, `draft?`).

## Passos

1. **Entenda o tema.** Se o Matheus já descreveu o que aprendeu/aplicou, use isso.
   Se faltar substância pra um post concreto (o "exemplo prático"), pergunte 1–2
   coisas objetivas — não mais que isso:
   - Qual a ideia central / o mal-entendido que o post desfaz?
   - Tem um exemplo pequeno (código ou situação) que ilustra?
2. **Defina o slug.** kebab-case, sem acento, derivado do título — o mesmo
   nome de arquivo vai ser usado em `pt/` e em `en/`.
   Ex.: "CQRS não é sobre ter dois bancos" → `cqrs-nao-e-dois-bancos`.
3. **Cheque colisão.** Rode `ls src/content/blog/pt/ src/content/blog/en/`.
   Se `<slug>.md` já existe em alguma das duas, **não sobrescreva** — proponha
   outro slug ao Matheus.
4. **Pegue a data de hoje.** Rode `date +%F` e use em `pubDate` (mesma data
   nos dois arquivos).
5. **Escreva o arquivo PT** `src/content/blog/pt/<slug>.md` a partir do
   `template.md`, respeitando a voz e a estrutura de 4 partes do `estilo.md`:
   gancho → `## O que X realmente é/faz` → `## Um exemplo prático` → fecho ("moral").
   Alvo: 250–500 palavras.
6. **Escreva o arquivo EN** `src/content/blog/en/<slug>.md` — tradução fiel do
   PT (mesma estrutura, mesmo código, mesma voz), com frontmatter também
   traduzido (`title`, `description`, `tags`). Não pule esta etapa; só pule se
   o Matheus disser explicitamente "só PT por enquanto".
7. **Aplique a regra de segurança** (dura, do `estilo.md`) **nos dois arquivos**:
   nada de código/nome proprietário, cliente, segredo, URL interna ou sinal que
   comprometa o emprego. Na dúvida, generalize o exemplo (`Order`, `Product`,
   `Invoice`, `User`).
8. **Frontmatter:** `title` sem ponto final; `description` em 1 frase; 2–4 `tags`
   minúsculas e sem acento, reaproveitando as já usadas quando fizer sentido
   (`arquitetura`/`architecture`, `java`, `spring`, `cqrs`, `ddd`, ...).
9. **Valide o build:**
   `cd /home/matheus.oliveira@db1.com.br/personal/blog && pnpm build`.
   Se falhar por schema, ajuste o frontmatter e rode de novo.
10. **Rascunho vs. publicado.** Por padrão os dois posts já saem publicáveis.
    Se o Matheus quiser guardar algum sem aparecer no site, adicione
    `draft: true` no frontmatter daquele arquivo (pode ser só o EN, se a
    tradução ainda não estiver pronta).

## Depois

- Mostre ao Matheus os dois caminhos de arquivo (`pt/` e `en/`) e um resumo
  curto do que escreveu.
- Ofereça revisar com a skill `revisar-post` antes de publicar.
