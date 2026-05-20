---
layout: default
title: Android
permalink: /category/android/
---

<section class="page-hero compact">
  <p class="eyebrow">Categoria</p>
  <h1>Android</h1>
  <p>Apps, estudos e publicações sobre Android, segurança mobile, Kotlin e projetos oficiais da PeekSecurity.</p>
</section>

<section class="section-block">
  <div class="post-grid posts-grid">
    {% for post in site.categories.android %}
      <article class="post-card">
        <span>{{ post.date | date: "%d/%m/%Y" }}</span>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt | strip_html | truncate: 140 }}</p>
      </article>
    {% endfor %}
  </div>
</section>
