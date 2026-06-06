---
layout: default
title: Scripts
description: Scripts, automações e ferramentas PeekSecurity.
permalink: /category/scripts/
---

<section class="ps-workspace ps-public-head ps-directory-workspace">
  <div class="ps-workspace-head">
    <p class="ps-section-label">CATEGORIA</p>
    <h1>Scripts</h1>
    <p class="ps-workspace-subtitle">Ferramentas, automações, instaladores e utilitários técnicos criados para simplificar estudos e ambientes autorizados.</p>
  </div>
</section>

<section class="ps-workspace ps-directory-workspace">
  <div class="ps-workspace-head">
    <p class="ps-section-label">PUBLICAÇÕES</p>
    <h2 class="ps-workspace-title">Scripts e automações em action rows</h2>
  </div>

  <div class="ps-row-list ps-inventory-list">
    {% for post in site.categories.scripts %}
    <article class="ps-action-row">
      <div class="ps-row-icon" aria-hidden="true"><svg class="ps-vector-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 9l-4 3 4 3"></path><path d="M16 9l4 3-4 3"></path><path d="M13 6l-2 12"></path></svg></div>
      <div class="ps-row-copy">
        <h3 class="ps-row-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        {% if post.description %}<p class="ps-row-subtitle">{{ post.description }}</p>{% else %}<p class="ps-row-subtitle">{{ post.excerpt | strip_html | truncate: 150 }}</p>{% endif %}
        <div class="ps-chip-strip"><span class="ps-chip">Scripts</span>{% if post.date %}<span class="ps-chip">{{ post.date | date: "%d/%m/%Y" }}</span>{% endif %}</div>
      </div>
      <a class="ps-row-trailing" href="{{ post.url | relative_url }}">Open</a>
    </article>
    {% else %}
    <article class="ps-action-row">
      <div class="ps-row-icon" aria-hidden="true"><svg class="ps-vector-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h8l4 4v14H6z"></path><path d="M14 3v5h5"></path><path d="M9 12h6"></path><path d="M9 16h6"></path></svg></div>
      <div class="ps-row-copy">
        <h3 class="ps-row-title">Nenhum conteúdo publicado ainda</h3>
        <p class="ps-row-subtitle">Esta categoria será atualizada quando houver novas publicações de scripts.</p>
      </div>
    </article>
    {% endfor %}
  </div>
</section>
