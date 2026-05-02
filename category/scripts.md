---
layout: default
title: Scripts
---

# ⚡ Scripts

{% for post in site.posts %}
  {% if post.category == "scripts" %}
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
  {% endif %}
{% endfor %}
