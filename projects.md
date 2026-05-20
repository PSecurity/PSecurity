---
layout: default
title: Projetos
description: Projetos técnicos da PeekSecurity desenvolvidos por Gilberto Martins, incluindo apps oficiais, ferramentas de segurança, automação, PS.Notes e pesquisas com embarcados.
permalink: /projects/
---

<section class="page-hero compact">
  <p class="eyebrow">Portfólio técnico</p>
  <h1>Projetos PeekSecurity</h1>
  <p>Seleção de apps, ferramentas, estudos e aplicações desenvolvidas com foco em segurança digital, Android, Termux, Linux, CLI, web local, dispositivos embarcados, documentação técnica e uso responsável.</p>
</section>

<section class="section-block official-apps-panel">
  <div class="section-heading">
    <p class="eyebrow">Official apps</p>
    <h2>Produtos oficiais PeekSecurity</h2>
  </div>

  <div class="case-study-list">
    <article class="case-card case-card--release" id="psblock">
      <div class="case-card__head">
        <div>
          <span class="status-pill status-pill--success">First public release</span>
          <div class="stack-tags stack-tags--compact" aria-label="Stack: Android, Kotlin, Mobile Security, Device Admin, Watchdog"><span>Android</span><span>Kotlin</span><span>Mobile Security</span><span>Device Admin</span><span>Watchdog</span></div>
          <h2>PS.Block v1.0.0</h2>
        </div>
        <div class="case-actions">
          <a class="btn btn-primary" href="https://github.com/PSecurity/ps.block" target="_blank" rel="noopener">Ver GitHub</a>
          <a class="btn btn-secondary" href="https://github.com/PSecurity/ps.block/releases/tag/v1.0.0" target="_blank" rel="noopener">Ver Release</a>
        </div>
      </div>
      <div class="case-card__grid">
        <div><strong>Problema</strong><p>Centralizar controles defensivos locais para recursos sensíveis do Android em dispositivos próprios ou ambientes autorizados.</p></div>
        <div><strong>Solução</strong><p>App Android open source com proteção local, controle de câmera, microfone, localização, Bluetooth, Device Admin, watchdog, app lock, logs locais e políticas de proteção.</p></div>
        <div><strong>Demonstra</strong><p>Android/Kotlin, segurança mobile, permissões sensíveis, documentação open source, release público, SHA256, responsabilidade legal e visão de produto.</p></div>
      </div>
    </article>

    <article class="case-card case-card--next" id="psguardian">
      <div class="case-card__head">
        <div>
          <span class="status-pill status-pill--warning">Next official product</span>
          <div class="stack-tags stack-tags--compact" aria-label="Stack: Android, Kotlin, Auditoria, Evidências, Relatórios"><span>Android</span><span>Kotlin</span><span>Auditoria</span><span>Evidências</span><span>Relatórios</span></div>
          <h2>PS.Guardian</h2>
        </div>
        <a class="btn btn-secondary" href="{{ '/contact/' | relative_url }}">Acompanhar evolução</a>
      </div>
      <div class="case-card__grid">
        <div><strong>Problema</strong><p>Organizar um fluxo mais profissional para auditoria mobile, evidências, relatórios e leitura executiva de riscos.</p></div>
        <div><strong>Solução</strong><p>App Android em desenvolvimento com identidade Enterprise Typography v5, foco em evidências, readiness, relatório técnico, status, anexos e experiência de segurança corporativa.</p></div>
        <div><strong>Demonstra</strong><p>Produto em evolução, Android/Kotlin, UI/UX profissional, segurança mobile, organização de evidências e maturidade visual da marca PeekSecurity.</p></div>
      </div>
    </article>
  </div>
</section>

<section class="section-block">
  <div class="section-heading">
    <p class="eyebrow">Security tools & automation</p>
    <h2>Ferramentas, laboratórios e automações</h2>
  </div>

  <div class="case-study-list">
    <article class="case-card">
      <div class="case-card__head">
        <div>
          <div class="stack-tags stack-tags--compact" aria-label="Stack: Python, CLI e Segurança"><span>Python</span><span>CLI</span><span>Segurança</span></div>
          <h2>PS.Chat Admin / PS.Chat CLI</h2>
        </div>
        <a class="btn btn-secondary" href="https://github.com/PSecurity/ps.chat-cli" target="_blank" rel="noopener">Ver GitHub</a>
      </div>
      <div class="case-card__grid">
        <div><strong>Problema</strong><p>Organizar comunicação privada em ambiente local/offline com controle, moderação e foco em segurança.</p></div>
        <div><strong>Solução</strong><p>Ecossistema com servidor administrativo e cliente terminal, incluindo salas, comandos, descoberta em rede local, histórico local criptografado e recursos de E2EE.</p></div>
        <div><strong>Demonstra</strong><p>Python, arquitetura cliente-servidor, ferramentas CLI, segurança aplicada, documentação técnica e visão de produto.</p></div>
      </div>
    </article>

    <article class="case-card">
      <div class="case-card__head">
        <div>
          <div class="stack-tags stack-tags--compact" aria-label="Stack: Python, Flask e Termux"><span>Python</span><span>Flask</span><span>Termux</span></div>
          <h2>PS.Toolkit v2</h2>
        </div>
        <a class="btn btn-secondary" href="https://github.com/PSecurity/ps.toolkit-v2" target="_blank" rel="noopener">Ver GitHub</a>
      </div>
      <div class="case-card__grid">
        <div><strong>Problema</strong><p>Centralizar utilitários técnicos usados em estudos, automação e segurança mobile sem depender de várias interfaces diferentes.</p></div>
        <div><strong>Solução</strong><p>Toolkit web local para Termux com módulos de Nmap, DNS, hash, senhas, notas, túneis, Linux manager e apoio técnico.</p></div>
        <div><strong>Demonstra</strong><p>Python, Flask, Termux, automação, organização modular, experiência de usuário e documentação de ferramenta.</p></div>
      </div>
    </article>

    <article class="case-card">
      <div class="case-card__head">
        <div>
          <div class="stack-tags stack-tags--compact" aria-label="Stack: Shell Script, Nmap e Reconhecimento"><span>Shell Script</span><span>Nmap</span><span>Recon</span></div>
          <h2>PS.Nmap</h2>
        </div>
        <a class="btn btn-secondary" href="https://github.com/PSecurity/ps.nmap" target="_blank" rel="noopener">Ver GitHub</a>
      </div>
      <div class="case-card__grid">
        <div><strong>Problema</strong><p>Facilitar fluxos de reconhecimento autorizados no Termux de forma organizada e didática.</p></div>
        <div><strong>Solução</strong><p>Menu educacional para host discovery, portas comuns, varredura completa, detecção de versões, sistema operacional, NSE e scans personalizados.</p></div>
        <div><strong>Demonstra</strong><p>Reconhecimento de rede, Nmap, Termux, Shell Script, organização de fluxo e documentação de uso responsável.</p></div>
      </div>
    </article>

    <article class="case-card">
      <div class="case-card__head">
        <div>
          <div class="stack-tags stack-tags--compact" aria-label="Stack: Shell Script, Termux e Kali"><span>Shell Script</span><span>Termux</span><span>Kali</span></div>
          <h2>PS.Ngrok / PeekSecurity Installer</h2>
        </div>
        <a class="btn btn-secondary" href="https://github.com/PSecurity/ps.ngrok" target="_blank" rel="noopener">Ver GitHub</a>
      </div>
      <div class="case-card__grid">
        <div><strong>Problema</strong><p>Reduzir fricção na preparação de ambientes técnicos em Termux e Kali.</p></div>
        <div><strong>Solução</strong><p>Script de instalação/configuração com detecção de ambiente, dependências, ngrok, authtoken e compatibilidade entre setups.</p></div>
        <div><strong>Demonstra</strong><p>Shell Script, automação de ambiente, troubleshooting, documentação e experiência prática em Linux/Termux.</p></div>
      </div>
    </article>
  </div>
</section>

<section class="section-block">
  <div class="section-heading">
    <p class="eyebrow">Creative / utility tools</p>
    <h2>Ferramentas autorais de apoio</h2>
  </div>

  <div class="project-grid">
    <article class="project-card featured">
      <div class="stack-tags" aria-label="Stack: HTML, CSS, JavaScript"><span>HTML</span><span>CSS</span><span>JavaScript</span></div>
      <h3>PS.Notes</h3>
      <p>Bloco de notas autoral desenvolvido do zero para organização de comandos, snippets, estudos e fluxo de trabalho técnico dentro da identidade PeekSecurity.</p>
      <a href="{{ '/category/notepad/' | relative_url }}">Abrir PS.Notes</a>
    </article>

    <article class="project-card">
      <div class="stack-tags" aria-label="Stack: Web, Design, Conteúdo"><span>Web</span><span>Design</span><span>Conteúdo</span></div>
      <h3>PS.Thumbnails</h3>
      <p>Ferramenta visual para criação de thumbnails e materiais de conteúdo técnico, mantendo consistência da marca PeekSecurity.</p>
      <a href="https://github.com/PSecurity/ps-thumbnails" target="_blank" rel="noopener">Ver GitHub</a>
    </article>
  </div>
</section>

<section class="section-block">
  <div class="section-heading">
    <p class="eyebrow">Embedded / research</p>
    <h2>Projetos de estudo com hardware e embarcados</h2>
  </div>

  <div class="project-grid">
    <article class="project-card">
      <div class="stack-tags" aria-label="Stack: C++, ESP32 e PlatformIO"><span>C++</span><span>ESP32</span><span>PlatformIO</span></div>
      <h3>DoomStickC M5StickC Plus2</h3>
      <p>Protótipo retro FPS para M5StickC Plus2 com renderização, HUD, áudio, controles por botões/IMU, mapas e estrutura modular.</p>
      <a href="https://github.com/PSecurity/doomstickc-m5stickc-plus2" target="_blank" rel="noopener">Ver GitHub</a>
    </article>

    <article class="project-card">
      <div class="stack-tags" aria-label="Stack: C++, ESP32, WAD"><span>C++</span><span>ESP32</span><span>WAD</span></div>
      <h3>DoomWAD M5StickC Plus2</h3>
      <p>Pesquisa incremental para integração de WAD real em hardware M5StickC Plus2, com foco em validações controladas, leitura de lumps, memória e gates seguros.</p>
      <a href="{{ '/contact/' | relative_url }}">Projeto em evolução</a>
    </article>
  </div>
</section>
