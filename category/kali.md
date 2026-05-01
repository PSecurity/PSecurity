---
layout: default
title: Kali Linux
---

# 🐉 Kali Linux

{% for post in site.posts %}
  {% if post.category == "kali" %}
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
  {% endif %}
{% endfor %}
