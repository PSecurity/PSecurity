# PeekSecurity Portfolio v4.1 — Enterprise Security Console Refinement

Esta versão refina a v4.0.1 para reduzir a sensação de landing page/template e aproximar o portfólio da identidade visual aplicada em PS.Block e PS.Guardian.

## Objetivo

Transformar a página em um workspace técnico de segurança:

- menos hero promocional;
- menos cards decorativos;
- mais painéis graphite/slate;
- inventário técnico com status, stack e objetivo;
- botões com hierarquia clara;
- roxo usado com moderação;
- verde/âmbar/vermelho apenas como estado;
- monospace apenas em readouts técnicos.

## Arquivos alterados

- `index.md`
- `projects.md`
- `README.md`
- `_layouts/default.html`
- `assets/css/style.css`
- `assets/img/peeksecurity-og-card.png`

## Arquivos preservados

- PS.Notes e sua lógica funcional;
- posts antigos;
- currículo PDF;
- ícones oficiais pequenos;
- estrutura Jekyll base;
- categorias existentes.

## Aplicação sugerida

```bash
git checkout portfolio-v4-0-1-fixes
git checkout -b portfolio-v4-1-enterprise-console
```

Extraia o ZIP na raiz do repositório e depois:

```bash
git add .
git commit -m "style: refine portfolio as enterprise security console"
git push origin portfolio-v4-1-enterprise-console
```

Valide no GitHub Pages, especialmente no celular e em aba anônima.
