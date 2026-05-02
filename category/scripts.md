---
layout: default
title: Scripts
---

# ⚡ Scripts

<div class="posts-grid">
{% for post in site.categories.scripts %}
  <div class="post-card">
    <a href="{{ post.url | relative_url }}">
      <h3>{{ post.title }}</h3>
      <p>{{ post.date | date: "%d/%m/%Y" }}</p>
    </a>
  </div>
{% endfor %}
</div>
