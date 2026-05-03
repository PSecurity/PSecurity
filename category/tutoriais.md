---
layout: default
title: Tutoriais
---

# 📝 Tutoriais

Aqui você encontrará uma série de tutoriais sobre **Termux**, **Kali**, **Git**, e outras ferramentas úteis para hackers e desenvolvedores. Explore os artigos abaixo para aprender novas técnicas e melhorar suas habilidades.

{% for post in site.categories.tutorials %}
  <div class="post-card">
    <a href="{{ post.url | relative_url }}">
      <h3>{{ post.title }}</h3>
    </a>
    <p>{{ post.date | date: "%d/%m/%Y" }}</p>
  </div>
{% endfor %}