# PeekSecurity Portfolio v4.2 — Restore Approved Identity + Official Apps Polish

Esta versão parte da base boa `portfolio-v4-0-1-fixes` e descarta a direção visual da v4.1.

## Objetivo

- Restaurar a identidade aprovada com `$ whoami`.
- Manter PS.Block como primeiro app oficial open source.
- Manter PS.Guardian como próximo app oficial.
- Reduzir aparência de template/landing page genérica.
- Manter visual dark, técnico, autoral e alinhado ao PS.Block/PS.Guardian.
- Preservar PS.Notes, posts antigos, currículo e estrutura Jekyll.

## Principais ajustes

- CSS refeito para ficar mais sóbrio, compacto e consistente.
- Header simplificado, removendo categorias do menu principal para reduzir poluição visual.
- Ícone oficial mantido apenas como marca pequena.
- Hero preservado, sem virar dashboard fake ou banner genérico.
- Official Apps preservado, porém tratado como painel técnico discreto.
- Tipografia: sans-serif para UI geral, monospace apenas em readouts, tags técnicas, código e terminal.

## Aplicação sugerida

```powershell
git checkout portfolio-v4-0-1-fixes
git pull origin portfolio-v4-0-1-fixes
git checkout -b portfolio-v4-2-restore-approved-identity
```

Extraia o ZIP na raiz do repositório e rode:

```powershell
git add .
git commit -m "fix: restore approved identity and polish official apps"
git push origin portfolio-v4-2-restore-approved-identity
```

Depois abra um Pull Request e valide no GitHub Pages, principalmente no celular.
