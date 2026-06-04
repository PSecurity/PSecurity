---
layout: default
title: Projetos
description: Projetos técnicos da PeekSecurity desenvolvidos por Gilberto Martins.
permalink: /projects/
---

<section class="ps-workspace ps-public-head" data-workspace-route="projects">
  <div class="ps-workspace-head">
    <p class="ps-section-label">PORTFÓLIO TÉCNICO</p>
    <h1>Projetos PeekSecurity</h1>
    <p class="ps-workspace-subtitle">Ferramentas, estudos e aplicações desenvolvidas com foco em segurança digital, automação, Termux, Android, Linux, CLI, web local, dispositivos embarcados e documentação técnica.</p>
  </div>
</section>

<section class="ps-workspace" data-workspace-block="project-taxonomy">
  <div class="ps-workspace-head">
    <p class="ps-section-label">PROJECT WORKSPACE</p>
    <h2 class="ps-workspace-title">Inventário funcional em vez de cards promocionais</h2>
  </div>

  <div class="ps-row-list">
    <article class="ps-action-row">
      <div class="ps-row-icon">AND</div>
      <div class="ps-row-copy">
        <h3 class="ps-row-title">Android e local-first</h3>
        <p class="ps-row-subtitle">Apps e protótipos com foco em privacidade local, permissões sensíveis, dados no dispositivo e documentação pública.</p>
      </div>
      <span class="ps-row-trailing">Mobile</span>
    </article>

    <article class="ps-action-row">
      <div class="ps-row-icon">CLI</div>
      <div class="ps-row-copy">
        <h3 class="ps-row-title">Terminal e automação</h3>
        <p class="ps-row-subtitle">Ferramentas de estudo em Python, Flask, Shell Script, Termux e Linux, sempre com uso responsável em ambientes autorizados.</p>
      </div>
      <span class="ps-row-trailing">Tools</span>
    </article>

    <article class="ps-action-row">
      <div class="ps-row-icon">LAB</div>
      <div class="ps-row-copy">
        <h3 class="ps-row-title">Laboratório e evidências</h3>
        <p class="ps-row-subtitle">Projetos organizados por problema, solução, demonstração técnica e trilha de aprendizado verificável.</p>
      </div>
      <span class="ps-row-trailing">Docs</span>
    </article>
  </div>
</section>

<section class="ps-workspace" data-workspace-block="project-cases">
  <div class="ps-workspace-head">
    <p class="ps-section-label">CASE STUDIES</p>
    <h2 class="ps-workspace-title">Projetos apresentados por problema, solução e stack</h2>
  </div>

  <div class="ps-row-list ps-project-inventory">
    <article class="ps-action-row ps-project-row" data-project-row="psblock">
      <div class="ps-row-icon">BLK</div>
      <div class="ps-row-copy">
        <h3 class="ps-row-title">PS.Block</h3>
        <p class="ps-row-subtitle"><strong>Problema:</strong> estudar e organizar proteção local de recursos sensíveis do Android em dispositivos próprios e ambientes autorizados.</p>
        <p class="ps-row-subtitle"><strong>Solução:</strong> aplicativo Android open source com foco em câmera, microfone, localização, Bluetooth, Device Admin, watchdog, app lock, logs locais e políticas de proteção.</p>
        <p class="ps-row-subtitle"><strong>Demonstra:</strong> Android/Kotlin, segurança mobile, permissões sensíveis, documentação open source, release público, privacidade e uso responsável.</p>
        <div class="ps-chip-strip"><span class="ps-chip">Android</span><span class="ps-chip">Kotlin</span><span class="ps-chip ps-chip-success">Publicado</span></div>
      </div>
      <a class="ps-row-trailing" href="https://github.com/PSecurity/ps.block" target="_blank" rel="noopener">GitHub</a>
    </article>

    <article class="ps-action-row ps-project-row" data-project-row="pschat">
      <div class="ps-row-icon">CHAT</div>
      <div class="ps-row-copy">
        <h3 class="ps-row-title">PS.Chat Admin / PS.Chat CLI</h3>
        <p class="ps-row-subtitle"><strong>Problema:</strong> organizar comunicação privada em ambiente local/offline com controle, moderação e foco em segurança.</p>
        <p class="ps-row-subtitle"><strong>Solução:</strong> ecossistema com servidor administrativo e cliente terminal, incluindo salas, comandos, descoberta em rede local, histórico local criptografado e recursos de E2EE.</p>
        <p class="ps-row-subtitle"><strong>Demonstra:</strong> Python, arquitetura cliente-servidor, ferramentas CLI, segurança aplicada, documentação técnica e visão de produto.</p>
        <div class="ps-chip-strip"><span class="ps-chip">Python</span><span class="ps-chip">CLI</span><span class="ps-chip">Segurança</span></div>
      </div>
      <a class="ps-row-trailing" href="https://github.com/PSecurity/ps.chat-cli" target="_blank" rel="noopener">GitHub</a>
    </article>

    <article class="ps-action-row ps-project-row" data-project-row="pstoolkit">
      <div class="ps-row-icon">KIT</div>
      <div class="ps-row-copy">
        <h3 class="ps-row-title">PS.Toolkit v2</h3>
        <p class="ps-row-subtitle"><strong>Problema:</strong> centralizar utilitários técnicos usados em estudos, automação e segurança mobile sem depender de várias interfaces diferentes.</p>
        <p class="ps-row-subtitle"><strong>Solução:</strong> toolkit web local para Termux com módulos de Nmap, DNS, hash, senhas, notas, túneis, Linux manager e apoio técnico.</p>
        <p class="ps-row-subtitle"><strong>Demonstra:</strong> Python, Flask, Termux, automação, organização modular, experiência de usuário e documentação de ferramenta.</p>
        <div class="ps-chip-strip"><span class="ps-chip">Python</span><span class="ps-chip">Flask</span><span class="ps-chip">Termux</span></div>
      </div>
      <a class="ps-row-trailing" href="https://github.com/PSecurity/ps.toolkit-v2" target="_blank" rel="noopener">GitHub</a>
    </article>

    <article class="ps-action-row ps-project-row" data-project-row="psnotes">
      <div class="ps-row-icon">NOTE</div>
      <div class="ps-row-copy">
        <h3 class="ps-row-title">PS.Notes</h3>
        <p class="ps-row-subtitle"><strong>Problema:</strong> registrar comandos, snippets, estudos e rascunhos técnicos com rapidez durante fluxos de trabalho em terminal.</p>
        <p class="ps-row-subtitle"><strong>Solução:</strong> bloco de notas autoral criado do zero, com visual terminal/cyberpunk, split view, snippets, salvamento local, cópia e exportação.</p>
        <p class="ps-row-subtitle"><strong>Demonstra:</strong> HTML, CSS, JavaScript, UI autoral, interação no navegador, localStorage e identidade visual PeekSecurity.</p>
        <div class="ps-chip-strip"><span class="ps-chip">HTML</span><span class="ps-chip">CSS</span><span class="ps-chip">JavaScript</span></div>
      </div>
      <a class="ps-row-trailing" href="{{ '/category/notepad/' | relative_url }}">Open</a>
    </article>

    <article class="ps-action-row ps-project-row" data-project-row="doomstickc">
      <div class="ps-row-icon">M5</div>
      <div class="ps-row-copy">
        <h3 class="ps-row-title">DoomStickC M5StickC Plus2</h3>
        <p class="ps-row-subtitle"><strong>Problema:</strong> explorar limites de dispositivo embarcado pequeno com renderização, controles físicos, IMU, áudio e lógica interativa.</p>
        <p class="ps-row-subtitle"><strong>Solução:</strong> protótipo retro FPS em C++ para M5StickC Plus2, com mapas, HUD, inimigos, armas, áudio e estrutura modular.</p>
        <p class="ps-row-subtitle"><strong>Demonstra:</strong> C++, PlatformIO, ESP32, M5Unified, framebuffer, organização de módulos, lógica de jogo e hardware.</p>
        <div class="ps-chip-strip"><span class="ps-chip">C++</span><span class="ps-chip">ESP32</span><span class="ps-chip">PlatformIO</span></div>
      </div>
      <a class="ps-row-trailing" href="https://github.com/PSecurity/doomstickc-m5stickc-plus2" target="_blank" rel="noopener">GitHub</a>
    </article>

    <article class="ps-action-row ps-project-row" data-project-row="psnmap">
      <div class="ps-row-icon">NMAP</div>
      <div class="ps-row-copy">
        <h3 class="ps-row-title">PS.Nmap</h3>
        <p class="ps-row-subtitle"><strong>Problema:</strong> facilitar estudos de reconhecimento de rede em ambientes móveis e autorizados sem exigir memorização de muitos comandos.</p>
        <p class="ps-row-subtitle"><strong>Solução:</strong> menu educacional para Nmap no Termux, com host discovery, portas, versões, sistema operacional, NSE e scans personalizados.</p>
        <p class="ps-row-subtitle"><strong>Demonstra:</strong> Shell Script, Linux mobile, Nmap, automação, segurança defensiva/ofensiva educacional e clareza de uso.</p>
        <div class="ps-chip-strip"><span class="ps-chip">Shell Script</span><span class="ps-chip">Nmap</span><span class="ps-chip">Termux</span></div>
      </div>
      <a class="ps-row-trailing" href="https://github.com/PSecurity/ps.nmap" target="_blank" rel="noopener">GitHub</a>
    </article>

    <article class="ps-action-row ps-project-row" data-project-row="psguardian">
      <div class="ps-row-icon">GRD</div>
      <div class="ps-row-copy">
        <h3 class="ps-row-title" id="android">PS.Guardian</h3>
        <p class="ps-row-subtitle"><strong>Problema:</strong> organizar auditorias, evidências, relatórios e fluxos técnicos em uma experiência mobile mais profissional.</p>
        <p class="ps-row-subtitle"><strong>Solução:</strong> próximo app oficial PeekSecurity em desenvolvimento para evidências, findings, sessões de auditoria, relatórios, checklists e apoio a ambientes autorizados.</p>
        <p class="ps-row-subtitle"><strong>Demonstra:</strong> Android Studio, Kotlin, UX de produto, fluxo de auditoria, segurança, relatórios técnicos e identidade visual consistente.</p>
        <div class="ps-chip-strip"><span class="ps-chip">Android</span><span class="ps-chip">Kotlin</span><span class="ps-chip ps-chip-warning">In progress</span></div>
      </div>
      <a class="ps-row-trailing" href="mailto:gilbertoferreirasp@gmail.com">Details</a>
    </article>
  </div>
</section>

<section class="ps-workspace">
  <div class="ps-row-list ps-status-strip">
    <article class="ps-action-row">
      <div class="ps-row-icon">USE</div>
      <div class="ps-row-copy">
        <h3 class="ps-row-title">Uso responsável</h3>
        <p class="ps-row-subtitle">Os projetos e conteúdos são apresentados com finalidade educacional, profissional e de laboratório. Qualquer teste de segurança deve ser realizado apenas em ambientes próprios ou com autorização explícita.</p>
      </div>
    </article>
  </div>
</section>
