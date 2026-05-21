# PeekSecurity Portfolio v4.2.1 — Structural Jekyll + Markdown Fix

Esta versão mantém a identidade aprovada da v4.2 e corrige a estrutura dos arquivos antes do merge.

## Objetivo

- Preservar a identidade aprovada com `$ whoami`.
- Manter PS.Block como primeiro app oficial open source.
- Manter PS.Guardian como próximo app oficial.
- Preservar PS.Notes sem alteração funcional.
- Corrigir front matter das páginas principais em formato Jekyll seguro.
- Normalizar README, Markdown, HTML, quebras de linha e espaçamentos.
- Evitar textos grudados em chips, labels e readouts técnicos.

## Aplicação recomendada

```powershell
git checkout portfolio-v4-2-restore-approved-identity
git checkout -b portfolio-v4-2-1-structural-fix
```

Extraia este ZIP na raiz do repositório `PSecurity/PSecurity`, substituindo os arquivos quando solicitado.

Depois rode:

```powershell
git add .
git commit -m "fix: correct portfolio v4.2 structure and markdown"
git push origin portfolio-v4-2-1-structural-fix
```

## Validações feitas

- Front matter em múltiplas linhas nas páginas principais.
- `_layouts/default.html` preservado com HTML completo.
- README em Markdown legível.
- Nenhum padrão conhecido de texto grudado encontrado.
- PS.Notes preservado.
- Posts antigos preservados.
- Currículo preservado.
