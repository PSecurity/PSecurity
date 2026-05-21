---
layout: default
title: Projetos
permalink: /projects/
description: Projetos autorais da PeekSecurity organizados por apps oficiais, ferramentas de segurança, automação, utilitários e pesquisa embarcada.
---
<section class="page-hero compact console-page-hero">
  <p class="eyebrow">Projetos</p>
  <h1>Inventário técnico PeekSecurity</h1>
  <p>Projetos organizados como um workspace de segurança: apps oficiais, ferramentas de automação, utilitários autorais, conteúdo técnico e pesquisa incremental.</p>
</section>

<section class="section-block command-section" id="official-apps">
  <div class="section-heading">
    <p class="eyebrow">Official apps</p>
    <h2>Produtos oficiais</h2>
    <p class="section-note">Apps Android tratados como entregas públicas, com documentação, uso responsável e identidade visual unificada.</p>
  </div>

  <div class="case-list">
    <article class="case-panel" id="psblock">
      <div class="case-panel__top">
        <div>
          <span class="status-pill status-pill--success">Released · v1.0.0</span>
          <h3>PS.Block</h3>
        </div>
        <span class="case-panel__type">Official app</span>
      </div>
      <p>Primeiro aplicativo Android open source oficial da PeekSecurity, voltado a proteção local, privacidade de sensores e controle defensivo de recursos sensíveis em dispositivos próprios ou ambientes autorizados.</p>
      <div class="case-grid">
        <div><strong>Problema</strong><p>Usuários e estudantes precisam compreender, controlar e auditar recursos sensíveis do Android de forma local, responsável e defensiva.</p></div>
        <div><strong>Solução</strong><p>App Android com foco em câmera, microfone, localização, Bluetooth, Device Admin, watchdog, app lock, logs locais e políticas de proteção.</p></div>
        <div><strong>Demonstra</strong><p>Android/Kotlin, segurança mobile, permissões sensíveis, serviços, Device Admin, documentação open source e entrega pública.</p></div>
      </div>
      <div class="inventory-meta"><span>Android</span><span>Kotlin</span><span>Mobile Security</span><span>Device Admin</span><span>Watchdog</span><span>Open Source</span></div>
      <div class="action-row">
        <a class="btn btn-primary" href="https://github.com/PSecurity/ps.block" target="_blank" rel="noopener">Ver PS.Block</a>
        <a class="btn btn-secondary" href="https://github.com/PSecurity/ps.block/releases/tag/v1.0.0" target="_blank" rel="noopener">Ver Release</a>
        <a class="btn btn-utility" href="https://github.com/PSecurity/ps.block/blob/main/README.md" target="_blank" rel="noopener">Documentação</a>
      </div>
    </article>

    <article class="case-panel" id="psguardian">
      <div class="case-panel__top">
        <div>
          <span class="status-pill status-pill--warning">In development</span>
          <h3>PS.Guardian</h3>
        </div>
        <span class="case-panel__type">Next official product</span>
      </div>
      <p>Próximo aplicativo oficial da PeekSecurity, com foco em auditoria, evidências, relatórios técnicos e experiência profissional de segurança mobile.</p>
      <div class="case-grid">
        <div><strong>Problema</strong><p>Fluxos de auditoria e segurança mobile precisam de organização, evidências, relatórios e leitura operacional clara.</p></div>
        <div><strong>Solução</strong><p>App Android orientado a painéis técnicos, evidências, anexos, relatórios PDF, status de segurança e identidade Enterprise Typography v5.</p></div>
        <div><strong>Demonstra</strong><p>Kotlin, Android, UX de segurança, documentação, relatórios, organização de evidências e evolução visual de produto.</p></div>
      </div>
      <div class="inventory-meta"><span>Android</span><span>Kotlin</span><span>Auditoria</span><span>Evidências</span><span>Relatórios</span><span>Security UX</span></div>
    </article>
  </div>
</section>

<section class="section-block command-section">
  <div class="section-heading">
    <p class="eyebrow">Security tools & automation</p>
    <h2>Ferramentas técnicas</h2>
  </div>

  <div class="tool-table tool-table--projects" role="table" aria-label="Ferramentas técnicas PeekSecurity">
    <div class="tool-table__head" role="row"><span>Projeto</span><span>Função</span><span>Stack</span><span>Acesso</span></div>
    <a class="tool-row" href="https://github.com/PSecurity/ps.toolkit-v2" target="_blank" rel="noopener"><strong>PS.Toolkit v2</strong><span>Toolkit local/web para Termux, automação e apoio técnico.</span><span>Python · Flask · Termux</span><em class="status-text status-text--success">GitHub</em></a>
    <a class="tool-row" href="https://github.com/PSecurity/ps.nmap" target="_blank" rel="noopener"><strong>PS.Nmap</strong><span>Reconhecimento de rede com Nmap para ambientes autorizados.</span><span>Shell · Nmap · Termux</span><em class="status-text status-text--success">GitHub</em></a>
    <a class="tool-row" href="https://github.com/PSecurity/ps.ngrok" target="_blank" rel="noopener"><strong>PS.Ngrok</strong><span>Automação de setup em Termux/Kali para túneis e dependências.</span><span>Shell · Kali · Termux</span><em class="status-text status-text--success">GitHub</em></a>
    <a class="tool-row" href="https://github.com/PSecurity/ps.chat-cli" target="_blank" rel="noopener"><strong>PS.Chat CLI/Admin</strong><span>Comunicação terminal/local com administração e foco em segurança.</span><span>Python · CLI · E2EE</span><em class="status-text status-text--success">GitHub</em></a>
  </div>
</section>

<section class="section-block command-section">
  <div class="section-heading">
    <p class="eyebrow">Creative / utility tools</p>
    <h2>Ferramentas autorais de apoio</h2>
  </div>

  <div class="case-list case-list--compact">
    <article class="case-panel">
      <div class="case-panel__top"><div><span class="status-pill status-pill--success">Authorial tool</span><h3>PS.Notes</h3></div><span class="case-panel__type">Utility</span></div>
      <p>Bloco de notas autoral desenvolvido do zero para organização de comandos, snippets, estudos e fluxo de trabalho técnico dentro da identidade PeekSecurity.</p>
      <div class="inventory-meta"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>Technical notes</span></div>
      <a class="btn btn-secondary" href="{{ '/category/notepad/' | relative_url }}">Abrir PS.Notes</a>
    </article>

    <article class="case-panel">
      <div class="case-panel__top"><div><span class="status-pill status-pill--success">Public tool</span><h3>PS.Thumbnails</h3></div><span class="case-panel__type">Creator utility</span></div>
      <p>Ferramenta visual para criação de thumbnails e materiais de conteúdo técnico, mantendo consistência visual da marca PeekSecurity.</p>
      <div class="inventory-meta"><span>Web</span><span>Design</span><span>Conteúdo</span><span>Brand assets</span></div>
      <a class="btn btn-secondary" href="https://github.com/PSecurity/ps-thumbnails" target="_blank" rel="noopener">Ver GitHub</a>
    </article>
  </div>
</section>

<section class="section-block command-section">
  <div class="section-heading">
    <p class="eyebrow">Embedded / research</p>
    <h2>Pesquisa e embarcados</h2>
  </div>

  <div class="case-list case-list--compact">
    <article class="case-panel">
      <div class="case-panel__top"><div><span class="status-pill status-pill--warning">Research</span><h3>DoomStickC M5StickC Plus2</h3></div><span class="case-panel__type">Embedded</span></div>
      <p>Protótipo retro FPS para M5StickC Plus2 com renderização, HUD, áudio, controles por botões/IMU, mapas e estrutura modular.</p>
      <div class="inventory-meta"><span>C++</span><span>ESP32</span><span>PlatformIO</span><span>M5StickC Plus2</span></div>
      <a class="btn btn-secondary" href="https://github.com/PSecurity/doomstickc-m5stickc-plus2" target="_blank" rel="noopener">Ver GitHub</a>
    </article>

    <article class="case-panel">
      <div class="case-panel__top"><div><span class="status-pill status-pill--warning">Research</span><h3>DoomWAD M5StickC Plus2</h3></div><span class="case-panel__type">Incremental gates</span></div>
      <p>Pesquisa incremental para integração de WAD real em hardware M5StickC Plus2, com foco em validações controladas, leitura de lumps, memória e gates seguros.</p>
      <div class="inventory-meta"><span>C++</span><span>ESP32</span><span>WAD</span><span>PlatformIO</span></div>
      <a class="btn btn-utility" href="{{ '/contact/' | relative_url }}">Projeto em evolução</a>
    </article>
  </div>
</section>
