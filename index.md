## 📱 Termux
{% for post in site.posts %}
  {% if post.category == "termux" %}
    - <a href="{{ post.url }}">{{ post.title }}</a>
  {% endif %}
{% endfor %}


## 🐉 Kali Linux
{% for post in site.posts %}
  {% if post.category == "kali" %}
    - <a href="{{ post.url }}">{{ post.title }}</a>
  {% endif %}
{% endfor %}


## ⚡ Scripts
{% for post in site.posts %}
  {% if post.category == "scripts" %}
    - <a href="{{ post.url }}">{{ post.title }}</a>
  {% endif %}
{% endfor %}

## 🔥 Últimos conteúdos

{% for post in site.posts %}
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
{% endfor %}
