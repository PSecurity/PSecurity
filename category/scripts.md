---
layout: default
title: Scripts
description: Scripts, automações e ferramentas PeekSecurity.
permalink: /category/scripts/
---

<section class="page-hero compact">
  <p class="eyebrow">Categoria</p>
  <h1>Scripts</h1>
  <p>Ferramentas, automações, instaladores e utilitários técnicos criados para simplificar estudos e ambientes autorizados.</p>
</section>

<section class="section-block">
  <div class="posts-grid">
    {% for post in site.categories.scripts %}
    <article class="post-card">
      <span>{{ post.date | date: "%d/%m/%Y" }}</span>
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      {% if post.description %}<p>{{ post.description }}</p>{% endif %}
    </article>
    {% else %}
    <article class="post-card"><h3>Nenhum conteúdo publicado ainda.</h3></article>
    {% endfor %}
  </div>
</section>
