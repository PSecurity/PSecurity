---
layout: default
title: Android
description: Apps Android, segurança mobile e projetos oficiais PeekSecurity.
permalink: /category/android/
---

<section class="page-hero compact">
  <p class="eyebrow">Categoria</p>
  <h1>Android</h1>
  <p>Apps oficiais, segurança mobile, Kotlin, privacidade local e projetos Android da PeekSecurity.</p>
</section>

<section class="section-block">
  <div class="post-grid">
    {% for post in site.categories.android %}
      <article class="post-card">
        <span>{{ post.category }}</span>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt | strip_html | truncate: 150 }}</p>
      </article>
    {% endfor %}
  </div>
</section>
