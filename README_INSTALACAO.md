# PeekSecurity Portfolio v4.0 — Official Apps & Enterprise Identity Refresh

Esta versão atualiza o portfólio para refletir a nova fase da PeekSecurity:

- PS.Block v1.0.0 como primeiro app Android open source oficial.
- PS.Guardian como próximo produto oficial em desenvolvimento.
- Visual mais alinhado ao padrão PeekSecurity / PS.Guardian Enterprise Typography.
- README reformulado para funcionar como entrada técnica do repositório.
- Home preservando o início aprovado com `$ whoami`.
- PS.Notes preservado como ferramenta autoral.

## Aplicação recomendada

```bash
git checkout -b portfolio-v4-official-apps-enterprise-refresh
```

Extraia o ZIP na raiz do repositório, substituindo os arquivos quando solicitado.

Depois rode:

```bash
git add .
git commit -m "feat: refresh portfolio with official apps and enterprise identity"
git push origin portfolio-v4-official-apps-enterprise-refresh
```

## Arquivos principais alterados

```text
_config.yml
README.md
README_INSTALACAO.md
FILES_INCLUDED.txt
_layouts/default.html
index.md
projects.md
about.md
contact.md
category/android.md
_posts/2026-05-20-ps-block-v1.md
assets/css/style.css
assets/img/peeksecurity-og-card.png
site.webmanifest
```

## Áreas preservadas

```text
PS.Notes funcional
assets/js/ps-notes.js
assets/css/ps-notes.css
posts antigos
categorias antigas
currículo PDF
ícones oficiais pequenos existentes
```

## Observações

- O visual foi refinado para ser mais dark corporate/security workspace, com menos glow e menos aparência de template.
- A lógica de cores segue a disciplina aprovada: roxo para marca/ação principal, verde para status positivo/readout técnico, âmbar para atenção, vermelho somente para risco/destrutivo.
- Monospace permanece em áreas técnicas como `$ whoami`, chips técnicos, código e PS.Notes.
