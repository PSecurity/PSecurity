---
layout: default
title: Kali Linux
description: Conteúdos sobre Kali Linux, laboratórios e estudos técnicos.
permalink: /category/kali/
---

<section class="ps-workspace ps-public-head ps-directory-workspace">
  <div class="ps-workspace-head">
    <p class="ps-section-label">CATEGORIA</p>
    <h1>Kali Linux</h1>
    <p class="ps-workspace-subtitle">Guias, comandos e estudos técnicos para laboratórios autorizados, ambientes Linux e prática responsável.</p>
  </div>
</section>

<section class="ps-workspace ps-directory-workspace">
  <div class="ps-workspace-head">
    <p class="ps-section-label">PUBLICAÇÕES</p>
    <h2 class="ps-workspace-title">Conteúdos Kali Linux em action rows</h2>
  </div>

  <div class="ps-row-list ps-inventory-list">
    {% for post in site.categories.kali %}
    <article class="ps-action-row">
      <div class="ps-row-icon" aria-hidden="true"><svg class="ps-vector-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="14" rx="2"></rect><path d="M7 10l3 2-3 2"></path><path d="M12 15h5"></path></svg></div>
      <div class="ps-row-copy">
        <h3 class="ps-row-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        {% if post.description %}<p class="ps-row-subtitle">{{ post.description }}</p>{% else %}<p class="ps-row-subtitle">{{ post.excerpt | strip_html | truncate: 150 }}</p>{% endif %}
        <div class="ps-chip-strip"><span class="ps-chip">Kali</span>{% if post.date %}<span class="ps-chip">{{ post.date | date: "%d/%m/%Y" }}</span>{% endif %}</div>
      </div>
      <a class="ps-row-trailing" href="{{ post.url | relative_url }}">Open</a>
    </article>
    {% else %}
    <article class="ps-action-row">
      <div class="ps-row-icon" aria-hidden="true"><svg class="ps-vector-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h8l4 4v14H6z"></path><path d="M14 3v5h5"></path><path d="M9 12h6"></path><path d="M9 16h6"></path></svg></div>
      <div class="ps-row-copy">
        <h3 class="ps-row-title">Nenhum conteúdo publicado ainda</h3>
        <p class="ps-row-subtitle">Esta categoria será atualizada quando houver novas publicações Kali Linux.</p>
      </div>
    </article>
    {% endfor %}
  </div>
</section>
