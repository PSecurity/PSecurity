---
layout: default
title: Home
---

<div class="home-wrapper">

  <div class="main-content">

    <div class="divider"></div>

    <div class="category-section">
      <h2>📱 Termux</h2>
      <div class="posts-grid">
        {% for post in site.posts %}
          {% if post.category == "termux" %}
            <div class="post-card">
              <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </div>
          {% endif %}
        {% endfor %}
      </div>
    </div>

    <div class="category-section">
      <h2>🐉 Kali Linux</h2>
      <div class="posts-grid">
        {% for post in site.posts %}
          {% if post.category == "kali" %}
            <div class="post-card">
              <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </div>
          {% endif %}
        {% endfor %}
      </div>
    </div>

    <div class="category-section">
      <h2>⚡ Scripts</h2>
      <div class="posts-grid">
        {% for post in site.posts %}
          {% if post.category == "scripts" %}
            <div class="post-card">
              <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </div>
          {% endif %}
        {% endfor %}
      </div>
    </div>

    <div class="category-section">
      <h2>📝 Tutoriais</h2>
      <div class="posts-grid">
        {% for post in site.posts %}
          {% if post.category == "tutoriais" %}
            <div class="post-card">
              <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </div>
          {% endif %}
        {% endfor %}
      </div>
    </div>

    <div class="divider"></div>

  </div>

  <aside class="sidebar-latest">
    <div class="sidebar-header">🔥 Últimos conteúdos</div>
    <ul class="sidebar-list">
      {% for post in site.posts limit:6 %}
        <li class="sidebar-item">
          <a href="{{ post.url | relative_url }}">
            <span class="sidebar-category">{{ post.category }}</span>
            <span class="sidebar-title">{{ post.title }}</span>
          </a>
        </li>
      {% endfor %}
    </ul>
  </aside>

</div>
