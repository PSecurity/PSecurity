---
layout: default
title: Tutoriais
description: Tutoriais técnicos da PeekSecurity sobre segurança, automação, Termux, Linux e ferramentas.
permalink: /category/tutoriais/
---

<section class="page-hero compact">
  <p class="eyebrow">Categoria</p>
  <h1>Tutoriais</h1>
  <p>Guias práticos, passo a passo e conteúdos educativos para organizar estudo, terminal, GitHub e tecnologia.</p>
</section>

<section class="section-block">
  <div class="posts-grid">
    {% for post in site.categories.tutoriais %}
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
