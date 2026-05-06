---
layout: post
title: "PS.Chat Admin & CLI – Comunicação Offline, Segura e Terminal-Based"
date: 2026-05-05
category: termux
tags: [PSecurity, PS.Chat, Admin, CLI, Python, Terminal, E2EE]
---

Fala rapaziada, suavidade? Eu sou o Peek. Hoje vou apresentar duas ferramentas essenciais que desenvolvi para comunicação offline segura: **PS.Chat-Admin** e **PS.Chat-CLI**. Elas funcionam juntas para criar chats privados, criptografados e totalmente controlados via terminal.

<hr class="divider">

## 👾 PS.Chat Admin

O **PS.Chat-Admin** é o servidor central para suas salas de chat privadas, com administração completa.

### Funcionalidades principais

- 🔒 **Criptografia ponta a ponta (E2EE)** – X25519 + AES‑GCM + Ed25519  
- 👑 **Painel administrativo completo** – criar salas, gerir membros, promover/rebaixar usuários  
- 🛡️ **Moderação avançada** – kick, mute, unmute, ban (por dispositivo e chave pública)  
- 📜 **Logs de acesso e moderação** – histórico persistente para auditoria  
- 🌐 **Descoberta automática de rede** – mDNS detecta clientes na mesma rede  
- ⚡ **Salas efêmeras** – desaparecem quando todos saem  
- 🧪 **Testado em Termux, Linux, Windows e macOS**


### Instalação

```bash
git clone https://github.com/PSecurity/ps.chat-admin
cd ps.chat-admin
pip install -r requirements.txt
python3 ps.chat-adm.py
```

> ⚠️ A primeira execução cria a senha padrão PeekAdmin2025. Altere imediatamente no painel!

**Uso básico**

1. Acesse o painel admin via navegador: `http://localhost:5000/admin/login`

2. Faça login, crie salas e copie os tokens

3. Gerencie participantes e moderação diretamente pelo painel

4. Configure segurança extra com pergunta de segurança e 2FA offline

<hr class="divider">

## 💻 PS.Chat CLI

O PS.Chat-CLI é o cliente Python que permite participar das salas criadas pelo PS.Chat-Admin via terminal.

Funcionalidades principais

🔒 **Mensagens E2EE** – comunicação segura, privada e anônima

👑 **Admin e moderação** – use a senha do painel para privilégios de moderação

📩 **Mensagens diretas (DM)** – criptografadas individualmente

⚡ **Mensagens efêmeras*? – /sumir

📎 **Envio de arquivos** – /send arquivo.txt (até 5 MB)

📜 **Histórico local criptografado** – /log on/off/show + /export

🎯 ?*Filtragem de subcanais** – /filter <tag>

🤫 **Modo anônimo** – gera chaves temporárias e nome aleatório

🌐 **Descoberta automática** – mDNS encontra o servidor na rede


**Instalação**
```
git clone https://github.com/PSecurity/ps.chat-cli
cd ps.chat-cli
pip install -r requirements.txt
python3 pschat.py
```

> 💡 No Termux, instale python-cryptography antes do pip install.

**Uso básico**

`python3 pschat.py`

1. Escolha entrar como anônimo ou não


2. Informe IP do servidor e porta (padrão `5000`)


3. Informe token da sala e senha de admin, se aplicável


4. Comece a conversar com segurança total

## Comandos mais importantes

**Comando	Descrição**
```
/help	Lista todos os comandos disponíveis
/dm <Usuário> <mensagem>	Mensagem direta criptografada
/send <arquivo>	Envia arquivo até 5 MB
/sumir <mensagem>	Mensagem efêmera
/promote / /demote / /kick / /mute / /unmute / /ban	Comandos de moderação (admin/mod)
/log on/off/show	Ativa/desativa/exibe histórico local criptografado
/verify <Usuário>	Verificação de identidade criptográfica
```
<hr class="divider">

## 🔒 Segurança

**Ambas ferramentas foram desenvolvidas para máxima segurança:**

Criptografia ponta a ponta: servidor não lê mensagens

Chaves assimétricas e assinatura digital Ed25519

Forward secrecy com rotação de chave de sala

Banimento por chave pública + ID do dispositivo

Autenticação e verificação de identidade para admins

Modo anônimo para não deixar rastros

<hr class="divider">

## 🧩 Estrutura resumida dos projetos

PS.Chat-Admin:
```
ps.chat-admin/
├── ps.chat-adm.py
├── requirements.txt
├── admin.hash
├── salas.json
├── modlog.json
├── banned_devices.json
├── historico/
└── templates/
```
PS.Chat-CLI:
```
ps.chat-cli/
├── pschat.py
├── requirements.txt
└── ~/.pschat/
    ├── keys.json
    ├── device_id
    └── history/
```
<hr class="divider">

## 🤝 Contribuindo

1. Faça um fork


2. Crie branch (feature/nova-feature)


3. Commit (git commit -m "sua mudança")


4. Push (git push origin feature/nova-feature)


5. Abra Pull Request

<hr class="divider">

## 📄 Licença

MIT – veja LICENSE em cada repositório.

<hr class="divider">

**Desenvolvido por PeekSecurity – comunicação offline, segura e leve, direto no terminal.**
GitHub: PS.Chat-Admin | PS.Chat-CLI

<hr class="divider">
