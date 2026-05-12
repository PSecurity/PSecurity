---
layout: default
title: Kali Linux
description: Conteúdos sobre Kali Linux, laboratórios e estudos técnicos.
permalink: /category/kali/
---

<section class="page-hero compact">
  <p class="eyebrow">Categoria</p>
  <h1>Kali Linux</h1>
  <p>Guias, comandos e estudos técnicos para laboratórios autorizados, ambientes Linux e prática responsável.</p>
</section>

<section class="section-block">
  <div class="posts-grid">
    {% for post in site.categories.kali %}
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
