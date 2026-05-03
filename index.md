---
layout: default
title: Home
---

<div class="home-wrapper">

  <!-- CONTEÚDO PRINCIPAL -->
  <div class="main-content">

    <div class="divider"></div>
</div>
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

  <!-- /main-content -->

  <!-- SIDEBAR FIXA DIREITA -->
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

</div><!-- /home-wrapper -->
