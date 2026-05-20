# PeekSecurity Portfolio v4.0.1 — Fix de Integridade Visual e Jekyll

Esta versão corrige a v4.0 mantendo o escopo aprovado: PS.Block como primeiro app oficial open source, PS.Guardian como próximo produto oficial e identidade Enterprise Typography v5.

## Correções aplicadas

- Front matter das páginas principais regravado em formato Jekyll seguro.
- Correção de chips técnicos para evitar textos grudados como `C++ESP32 PlatformIO`.
- Correção do bloco `$ whoami` para evitar `formaçãoEngenharia` / `experiênciaSuporte`.
- Labels técnicos mantidos verdes e no estilo terminal aprovado.
- Visual da v4.0 preservado, sem redesign.
- PS.Notes preservado.
- README reformulado da v4.0 preservado.
- PS.Block e PS.Guardian mantidos como destaques oficiais.

## Como aplicar

Crie uma branch de correção em cima da branch v4.0:

```bash
git checkout portfolio-v4-official-apps-enterprise-refresh
git checkout -b portfolio-v4-0-1-fixes
```

Extraia este ZIP na raiz do repositório, substituindo os arquivos.

Depois rode:

```bash
git add .
git commit -m "fix: correct portfolio v4 text spacing and Jekyll front matter"
git push origin portfolio-v4-0-1-fixes
```

Após validar no GitHub Pages/preview, faça merge na `main`.
