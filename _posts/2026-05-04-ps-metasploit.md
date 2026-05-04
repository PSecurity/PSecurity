---
layout: post
title: PS.Metasploit - Automação e Exploração no Termux e Kali
category: termux
tags: [metasploit, pentest, hacking, termux, kali]
author: Peek
date: 2026-05-04
---

## 🚀 O que é o PS.Metasploit?

O **PS.Metasploit** é uma ferramenta desenvolvida para automatizar o uso do **Metasploit Framework**, facilitando tarefas de **reconhecimento, exploração e testes de segurança** tanto no **Termux** quanto no **Kali Linux**.

O objetivo é simples: **reduzir a complexidade do Metasploit** e permitir que qualquer pessoa consiga rodar testes de forma prática e rápida.

> O Metasploit é um dos frameworks mais usados no mundo para testes de invasão, permitindo explorar vulnerabilidades reais em sistemas. :contentReference[oaicite:0]{index=0}

<hr class="divider">

## ⚡ Instalação

### 📱 Termux / 💻 Kali

<div class="code-box">
<button onclick="copyCode(this)">Copiar</button>
<pre><code>pkg update -y && pkg upgrade -y
pkg install git -y
git clone https://github.com/PSecurity/ps.metasploit.git
cd ps.metasploit
chmod +x ps.metasploit
</code></pre>
</div>

<hr class="divider">

## ▶️ Execução

<div class="code-box">
<button onclick="copyCode(this)">Copiar</button>
<pre><code>bash ps.metasploit</code></pre>
</div>

O script vai iniciar o processo automatizado de configuração e uso do Metasploit.

<hr class="divider">

## 🧠 O que esse script faz

- Automatiza o uso do **Metasploit**
- Facilita a exploração de vulnerabilidades
- Ajuda na fase de reconhecimento
- Integra fluxo com ferramentas como Nmap
- Reduz comandos manuais complexos

Na prática, ele encaixa exatamente no fluxo de pentest:

1. Reconhecimento (Nmap)
2. Enumeração
3. Exploração (Metasploit)

Esse tipo de abordagem é padrão em testes reais de segurança. :contentReference[oaicite:1]{index=1}

<hr class="divider">

## ⚙️ Exemplo de uso (conceito)

Depois de rodar o script, você pode usar o Metasploit assim:

<div class="code-box">
<button onclick="copyCode(this)">Copiar</button>
<pre><code>msfconsole</code></pre>
</div>

Buscar exploits:

<div class="code-box">
<button onclick="copyCode(this)">Copiar</button>
<pre><code>search exploit</code></pre>
</div>

Selecionar módulo:

<div class="code-box">
<button onclick="copyCode(this)">Copiar</button>
<pre><code>use exploit/multi/handler</code></pre>
</div>

<hr class="divider">

## 🔥 Integração com Nmap

Uma das coisas mais fortes do Metasploit é trabalhar junto com o Nmap.

Exemplo:

<div class="code-box">
<button onclick="copyCode(this)">Copiar</button>
<pre><code>nmap -sV -A target_ip</code></pre>
</div>

Depois usar os dados no Metasploit para exploração.

O Nmap ajuda a identificar portas e serviços, enquanto o Metasploit realiza os ataques baseados nessas informações. :contentReference[oaicite:2]{index=2}

<hr class="divider">

## ⚠️ Aviso Importante

- Use apenas para fins **educacionais**
- Não ataque sistemas sem permissão
- Testes devem ser feitos em ambientes controlados

Pentest sem autorização é ilegal.

<hr class="divider">

## 💡 Dica PeekSecurity

Se você ainda está começando:

- Use **Termux** para praticar no celular
- Teste em máquinas vulneráveis como **Metasploitable**
- Entenda o processo (não só rodar script)

Script ajuda, mas conhecimento é o que te diferencia 😈

<hr class="divider">

## 🔥 Testa aí

Clona, roda e vê o poder do Metasploit na prática.

Se aparecer exploit funcionando… já sabe 😏

<hr class="divider">

## 📦 Repositório

👉 https://github.com/PSecurity/ps.metasploit

---

**PeekSecurity**  
*Fala rapaziada, suavidade? Eu sou o Peek.* 😈  
TikTok: @peeksecurity  
YouTube: PeekSecurity
