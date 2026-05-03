---
layout: default
title: Tutoriais
---

# 📝 Tutoriais

<div class="posts-grid">
{% for post in site.categories.tutoriais %}
  <div class="post-card">
    <a href="{{ post.url | relative_url }}">
      <h3>{{ post.title }}</h3>
      <p>{{ post.date | date: "%d/%m/%Y" }}</p>
    </a>
  </div>
{% endfor %}
</div>
