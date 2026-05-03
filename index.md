---
layout: default
title: Home
---

<div class="divider"></div>

## 📱 Termux
<div class="posts-grid">
{% for post in site.posts %}
  {% if post.category == "termux" %}
    <div class="post-card">
      <a href="{{ post.url | relative_url }}">
        <h3>{{ post.title }}</h3>
      </a>
    </div>
  {% endif %}
{% endfor %}
</div>

## 🐉 Kali Linux
<div class="posts-grid">
{% for post in site.posts %}
  {% if post.category == "kali" %}
    <div class="post-card">
      <a href="{{ post.url | relative_url }}">
        <h3>{{ post.title }}</h3>
      </a>
    </div>
  {% endif %}
{% endfor %}
</div>

## ⚡ Scripts
<div class="posts-grid">
{% for post in site.posts %}
  {% if post.category == "scripts" %}
    <div class="post-card">
      <a href="{{ post.url | relative_url }}">
        <h3>{{ post.title }}</h3>
      </a>
    </div>
  {% endif %}
{% endfor %}
</div>

## 📝 Tutoriais
<div class="posts-grid">
{% for post in site.posts %}
  {% if post.category == "tutoriais" %}
    <div class="post-card">
      <a href="{{ post.url | relative_url }}">
        <h3>{{ post.title }}</h3>
      </a>
    </div>
  {% endif %}
{% endfor %}
</div>

<div class="divider"></div>