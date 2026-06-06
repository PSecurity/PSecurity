---
layout: default
title: Android
description: Apps Android, segurança mobile e projetos oficiais PeekSecurity.
permalink: /category/android/
---

<section class="ps-workspace ps-public-head ps-directory-workspace">
  <div class="ps-workspace-head">
    <p class="ps-section-label">CATEGORIA</p>
    <h1>Android</h1>
    <p class="ps-workspace-subtitle">Apps oficiais, segurança mobile, Kotlin, privacidade local e projetos Android da PeekSecurity.</p>
  </div>
</section>

<section class="ps-workspace ps-directory-workspace">
  <div class="ps-workspace-head">
    <p class="ps-section-label">PUBLICAÇÕES</p>
    <h2 class="ps-workspace-title">Conteúdos Android em action rows</h2>
  </div>

  <div class="ps-row-list ps-inventory-list">
    {% for post in site.categories.android %}
    <article class="ps-action-row">
      <div class="ps-row-icon" aria-hidden="true"><svg class="ps-vector-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="3" width="10" height="18" rx="2"></rect><path d="M10 6h4"></path><path d="M10 18h4"></path></svg></div>
      <div class="ps-row-copy">
        <h3 class="ps-row-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p class="ps-row-subtitle">{{ post.excerpt | strip_html | truncate: 150 }}</p>
        <div class="ps-chip-strip"><span class="ps-chip">Android</span>{% if post.date %}<span class="ps-chip">{{ post.date | date: "%d/%m/%Y" }}</span>{% endif %}</div>
      </div>
      <a class="ps-row-trailing" href="{{ post.url | relative_url }}">Open</a>
    </article>
    {% else %}
    <article class="ps-action-row">
      <div class="ps-row-icon" aria-hidden="true"><svg class="ps-vector-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h8l4 4v14H6z"></path><path d="M14 3v5h5"></path><path d="M9 12h6"></path><path d="M9 16h6"></path></svg></div>
      <div class="ps-row-copy">
        <h3 class="ps-row-title">Nenhum conteúdo publicado ainda</h3>
        <p class="ps-row-subtitle">Esta categoria será atualizada quando houver novas publicações Android.</p>
      </div>
    </article>
    {% endfor %}
  </div>
</section>
