---
layout: default
title: Apps
description: Apps oficiais e ferramentas públicas do ecossistema PeekSecurity.
permalink: /apps/
---

<section class="ps-workspace ps-public-head" data-workspace-route="apps">
  <div class="ps-workspace-head">
    <p class="ps-section-label">PEEKSECURITY APPS</p>
    <h1>Apps</h1>
    <p class="ps-workspace-subtitle">Inventário técnico de aplicativos e ferramentas do ecossistema PeekSecurity, com foco em privacidade local, produtividade, segurança aplicada, documentação técnica e uso responsável.</p>
  </div>
  <div class="ps-command-strip">
    <a class="ps-command ps-command-primary" href="{{ '/apps/pscalc/' | relative_url }}">PS.Calc</a>
    <a class="ps-command" href="{{ '/privacy/' | relative_url }}">Privacy Center</a>
  </div>
</section>

<section class="ps-workspace" data-workspace-block="app-modes">
  <div class="ps-workspace-head">
    <p class="ps-section-label">APP MODES</p>
    <h2 class="ps-workspace-title">Da linguagem dos apps para a navegação pública</h2>
  </div>

  <div class="ps-row-list">
    <article class="ps-action-row">
      <div class="ps-row-icon">CALC</div>
      <div class="ps-row-copy">
        <h3 class="ps-row-title">PS.Calc como produto local-first</h3>
        <p class="ps-row-subtitle">Calculadora, produtividade e Secure Notes apresentados com foco em funcionamento offline, dados locais e política pública para revisão da Play Console.</p>
      </div>
      <a class="ps-row-trailing" href="{{ '/apps/pscalc/' | relative_url }}">Open</a>
    </article>

    <article class="ps-action-row">
      <div class="ps-row-icon">FILE</div>
      <div class="ps-row-copy">
        <h3 class="ps-row-title">PS.Files como referência visual</h3>
        <p class="ps-row-subtitle">Rows compactas, superfícies graphite, títulos curtos, metadados discretos e navegação funcional transportados para o site público.</p>
      </div>
      <span class="ps-row-trailing">UI</span>
    </article>
  </div>
</section>

<section class="ps-workspace" data-workspace-block="app-inventory" data-ps-explicit-rows="true">
  <div class="ps-workspace-head">
    <p class="ps-section-label">INVENTÁRIO</p>
    <h2 class="ps-workspace-title">Ferramentas públicas, discretas e documentadas</h2>
  </div>

  <div class="ps-row-list ps-app-inventory" data-ps-row-list="apps">
    <article class="ps-action-row ps-app-row" data-app-row="pscalc">
      <div class="ps-row-icon" aria-hidden="true">CALC</div>
      <div class="ps-row-copy">
        <h3 class="ps-row-title">PS.Calc</h3>
        <p class="ps-row-subtitle">Calculadora Android e ferramenta de produtividade local-first, com recursos offline, histórico local, conversões, fórmulas e Secure Notes protegidas localmente.</p>
        <div class="ps-chip-strip">
          <span class="ps-chip">Android</span>
          <span class="ps-chip ps-chip-success">Local-first</span>
          <span class="ps-chip ps-chip-success">Privacy-first</span>
        </div>
      </div>
      <a class="ps-row-trailing" href="{{ '/apps/pscalc/' | relative_url }}">Open</a>
    </article>

    <article class="ps-action-row ps-app-row" data-app-row="psblock">
      <div class="ps-row-icon" aria-hidden="true">BLK</div>
      <div class="ps-row-copy">
        <h3 class="ps-row-title">PS.Block</h3>
        <p class="ps-row-subtitle">App Android open source voltado a proteção local, privacidade de sensores, controle defensivo, logs locais e estudo em dispositivos próprios ou autorizados.</p>
        <div class="ps-chip-strip">
          <span class="ps-chip">Android</span>
          <span class="ps-chip">Kotlin</span>
          <span class="ps-chip ps-chip-success">Released</span>
        </div>
      </div>
      <a class="ps-row-trailing" href="https://github.com/PSecurity/ps.block" target="_blank" rel="noopener">GitHub</a>
    </article>

    <article class="ps-action-row ps-app-row" data-app-row="psnotes">
      <div class="ps-row-icon" aria-hidden="true">NOTE</div>
      <div class="ps-row-copy">
        <h3 class="ps-row-title">PS.Notes</h3>
        <p class="ps-row-subtitle">Bloco de notas autoral para comandos, estudos, snippets e organização técnica no navegador, com salvamento local e exportação.</p>
        <div class="ps-chip-strip">
          <span class="ps-chip">Web</span>
          <span class="ps-chip ps-chip-success">Local</span>
          <span class="ps-chip">Notes</span>
        </div>
      </div>
      <a class="ps-row-trailing" href="{{ '/category/notepad/' | relative_url }}">Open</a>
    </article>

    <article class="ps-action-row ps-app-row" data-app-row="psfiles">
      <div class="ps-row-icon" aria-hidden="true">FILE</div>
      <div class="ps-row-copy">
        <h3 class="ps-row-title">PS.Files</h3>
        <p class="ps-row-subtitle">App do ecossistema PeekSecurity em desenvolvimento, usado como referência visual para superfícies flat, organização técnica e experiência local-first.</p>
        <div class="ps-chip-strip">
          <span class="ps-chip">Android</span>
          <span class="ps-chip ps-chip-warning">In progress</span>
          <span class="ps-chip">Files</span>
        </div>
      </div>
      <a class="ps-row-trailing" href="{{ '/contact/' | relative_url }}">Details</a>
    </article>

    <article class="ps-action-row ps-app-row" data-app-row="psgallery">
      <div class="ps-row-icon" aria-hidden="true">GAL</div>
      <div class="ps-row-copy">
        <h3 class="ps-row-title">PS.Gallery</h3>
        <p class="ps-row-subtitle">App planejado do ecossistema PeekSecurity. Detalhes públicos serão adicionados quando houver escopo validado para publicação.</p>
        <div class="ps-chip-strip">
          <span class="ps-chip">Android</span>
          <span class="ps-chip ps-chip-muted">Planned</span>
          <span class="ps-chip">Gallery</span>
        </div>
      </div>
      <a class="ps-row-trailing" href="{{ '/contact/' | relative_url }}">Details</a>
    </article>

    <article class="ps-action-row ps-app-row" data-app-row="pspass">
      <div class="ps-row-icon" aria-hidden="true">PASS</div>
      <div class="ps-row-copy">
        <h3 class="ps-row-title">PS.Pass</h3>
        <p class="ps-row-subtitle">App planejado do ecossistema PeekSecurity. A página pública será criada somente com recursos confirmados e linguagem de privacidade revisada.</p>
        <div class="ps-chip-strip">
          <span class="ps-chip">Android</span>
          <span class="ps-chip ps-chip-muted">Planned</span>
          <span class="ps-chip">Passwords</span>
        </div>
      </div>
      <a class="ps-row-trailing" href="{{ '/contact/' | relative_url }}">Details</a>
    </article>

    <article class="ps-action-row ps-app-row" data-app-row="psguardian">
      <div class="ps-row-icon" aria-hidden="true">GRD</div>
      <div class="ps-row-copy">
        <h3 class="ps-row-title">PS.Guardian</h3>
        <p class="ps-row-subtitle">App em desenvolvimento voltado a auditoria, evidências, relatórios técnicos e apoio a ambientes próprios ou autorizados.</p>
        <div class="ps-chip-strip">
          <span class="ps-chip">Android</span>
          <span class="ps-chip ps-chip-warning">In progress</span>
          <span class="ps-chip">Audit</span>
        </div>
      </div>
      <a class="ps-row-trailing" href="{{ '/projects/' | relative_url }}#android">Context</a>
    </article>

    <article class="ps-action-row ps-app-row" data-app-row="pspentester">
      <div class="ps-row-icon" aria-hidden="true">PENT</div>
      <div class="ps-row-copy">
        <h3 class="ps-row-title">PS.Pentester</h3>
        <p class="ps-row-subtitle">App planejado para laboratório técnico e documentação de segurança aplicada. Nenhum recurso público é anunciado até validação de escopo.</p>
        <div class="ps-chip-strip">
          <span class="ps-chip">Android</span>
          <span class="ps-chip ps-chip-muted">Planned</span>
          <span class="ps-chip">Security Lab</span>
        </div>
      </div>
      <a class="ps-row-trailing" href="{{ '/contact/' | relative_url }}">Details</a>
    </article>
  </div>
</section>

<section class="ps-workspace">
  <div class="ps-row-list ps-status-strip">
    <article class="ps-action-row">
      <div class="ps-row-icon">USE</div>
      <div class="ps-row-copy">
        <h3 class="ps-row-title">Uso responsável</h3>
        <p class="ps-row-subtitle">Study before executing. Understand before automating. Document before publishing. Validate before scaling. Use only in owned or authorized environments.</p>
      </div>
    </article>
  </div>
</section>
