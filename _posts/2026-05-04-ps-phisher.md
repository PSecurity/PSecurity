---
layout: post
title: PS.Phisher - Ferramenta de Phishing Educacional
category: termux
tags: [phishing, engenharia social, hacking, termux, kali]
author: Peek
date: 2026-05-04
---

## 🚀 O que é o PS.Phisher?

O **PS.Phisher** é uma ferramenta voltada para **engenharia social e testes educacionais**, permitindo simular páginas de login falsas para demonstrar como ataques de phishing funcionam.

Ela foi desenvolvida para uso em **Termux** e **Kali Linux**, facilitando a criação de ambientes de teste para aprendizado em segurança ofensiva.

> O phishing é uma das técnicas mais utilizadas em ataques reais, explorando o fator humano ao invés de falhas técnicas.

<hr class="divider">

## ⚡ Instalação

### 📱 Termux / 💻 Kali

<div class="code-box">
<button onclick="copyCode(this)">Copiar</button>
<pre><code>pkg update -y && pkg upgrade -y
pkg install git -y
git clone https://github.com/PSecurity/ps.phisher.git
cd ps.phisher
chmod +x ps.phisher
</code></pre>
</div>

<hr class="divider">

## ▶️ Execução

<div class="code-box">
<button onclick="copyCode(this)">Copiar</button>
<pre><code>bash ps.phisher</code></pre>
</div>

<hr class="divider">

## 🧠 O que esse script faz

- Cria páginas falsas de login (simulação)
- Gera links públicos para testes
- Coleta dados inseridos (em ambiente controlado)
- Automatiza ataques de engenharia social para estudo
- Pode usar túneis como Ngrok ou Cloudflare

<hr class="divider">

## ⚙️ Como funciona na prática

O fluxo básico de um ataque de phishing:

1. Criar página falsa (login)
2. Gerar link público
3. Enviar para o alvo (simulação)
4. Capturar dados inseridos

Exemplo de execução do túnel:

<div class="code-box">
<button onclick="copyCode(this)">Copiar</button>
<pre><code>ngrok http 8080</code></pre>
</div>

Ou usando Cloudflare:

<div class="code-box">
<button onclick="copyCode(this)">Copiar</button>
<pre><code>cloudflared tunnel --url http://localhost:8080</code></pre>
</div>

<hr class="divider">

## ⚠️ Aviso MUITO IMPORTANTE

- Use apenas para fins **educacionais**
- Não utilize contra pessoas reais sem autorização
- Phishing é crime quando usado de forma maliciosa

Esse tipo de ferramenta deve ser usada para:

✔ aprendizado  
✔ demonstração  
✔ testes em ambiente controlado  

<hr class="divider">

## 💡 Dica PeekSecurity

Se quiser aprender de verdade:

- Teste em você mesmo
- Analise como a vítima reage
- Entenda o psicológico por trás do ataque

Phishing não é sobre código… é sobre **pessoas** 😈

<hr class="divider">

## 🔥 Testa aí

Roda o script, gera um link e vê como funciona na prática.

Isso aqui abre a mente pra segurança ofensiva real.

<hr class="divider">

## 📦 Repositório

👉 https://github.com/PSecurity/ps.phisher

---

**PeekSecurity**  
*Fala rapaziada, suavidade? Eu sou o Peek.* 😈  
TikTok: @peeksecurity  
YouTube: PeekSecurity
