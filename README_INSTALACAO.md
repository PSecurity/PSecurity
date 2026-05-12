# PeekSecurity Portfolio Home v1

Este ZIP contém uma primeira versão profissional do portfólio PeekSecurity para GitHub Pages/Jekyll.

## Como aplicar

1. Abra o repositório `PSecurity/PSecurity` no seu computador.
2. Faça backup ou crie uma branch antes de substituir:

```bash
git checkout -b portfolio-home-v1
```

3. Extraia o conteúdo deste ZIP na raiz do repositório.
4. Confirme se estes arquivos foram substituídos/criados:

```text
_config.yml
_layouts/default.html
index.md
projects.md
about.md
curriculo.md
contact.md
assets/css/style.css
assets/js/main.js
assets/cv/curriculo-gilberto-victor-ferreira-martins.pdf
```

5. Teste localmente, se tiver Jekyll instalado:

```bash
bundle exec jekyll serve
```

6. Envie para o GitHub:

```bash
git add .
git commit -m "feat: transform site into professional portfolio v1"
git push origin portfolio-home-v1
```

Depois, abra um Pull Request para `main` ou faça merge quando validar.

## Observações

- Os posts existentes não foram incluídos no ZIP e não devem ser apagados.
- As categorias existentes foram preservadas no menu.
- O nome público no site é Gilberto Martins.
- A página de currículo usa o nome completo: Gilberto Victor Ferreira Martins.
- O conteúdo mantém posicionamento profissional e evita linguagem arriscada para recrutadores.
