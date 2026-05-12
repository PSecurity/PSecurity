---
layout: default
title: Termux
description: Conteúdos sobre Termux, automação e terminal mobile.
permalink: /category/termux/
---

<section class="page-hero compact">
  <p class="eyebrow">Categoria</p>
  <h1>Termux</h1>
  <p>Conteúdos sobre terminal mobile, automação, ferramentas educacionais, comandos e fluxo técnico no Android.</p>
</section>

<section class="section-block">
  <div class="posts-grid">
    {% for post in site.categories.termux %}
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
