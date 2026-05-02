---
layout: default
title: Kali Linux
---

# 🐉 Kali Linux

<div class="posts-grid">
{% for post in site.categories.kali %}
  <div class="post-card">
    <a href="{{ post.url | relative_url }}">
      <h3>{{ post.title }}</h3>
    </a>
  </div>
{% endfor %}
</div>
