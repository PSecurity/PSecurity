---
title: "Editando Repositórios GitHub no Termux"
date: 2026-05-03
categories: [tutorial, termux, git]
tags: [github, termux, git, android]
author: Peek
---

# Editando Repositórios GitHub no Termux

Se você usa o Termux no Android, aqui está um guia rápido para clonar, editar e fazer commits diretamente no seu dispositivo.

---

### 1. Instalar o Git

Para instalar o **Git** no Termux, execute o comando:

```bash
pkg update && pkg install git```

---

### 2. Configurar o Git

Defina seu nome e e-mail para associar aos commits:

git config --global user.name "Seu Nome"
git config --global user.email "seuemail@dominio.com"

---

### 3. Clonar um Repositório

Clone seu repositório GitHub com:

git clone https://github.com/usuario/repository.git
cd repository

Substitua usuario/repository pela URL do seu repositório.

---

### 4. Editar os Arquivos

Edite arquivos com vim ou nano. Por exemplo:

vim nome_do_arquivo
# ou
nano nome_do_arquivo

---

### 5. Adicionar e Comitar Alterações

Após editar, adicione e comite as mudanças:

git add .
git commit -m "Mensagem do commit"

---

### 6. Subir para o GitHub

Envie suas alterações para o GitHub com:

git push origin main

Se estiver usando uma branch diferente, substitua main.

---

### 7. Atualizar o Repositório Local

Para pegar as últimas atualizações, use:

git pull origin main

---

### 8. Configurar SSH (Opcional)

Para evitar digitar a senha a cada push, configure o SSH:

ssh-keygen -t rsa -b 4096 -C "seuemail@dominio.com"

Siga as instruções aqui para adicionar sua chave SSH no GitHub.

---

Agora você pode gerenciar seus repositórios GitHub diretamente pelo Termux no Android. Rápido e prático!