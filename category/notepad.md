---
layout: default
title: PS.Notes
description: PS.Notes, bloco de notas autoral da PeekSecurity criado por Gilberto Martins para comandos, estudos e snippets.
permalink: /category/notepad/
notepad: true
wide: true
---

<section class="page-hero compact notes-intro">
  <p class="eyebrow">Ferramenta autoral</p>
  <h1>PS.Notes</h1>
  <p>Bloco de notas estilo terminal/cyberpunk desenvolvido do zero para organizar comandos, scripts, ideias, estudos e snippets rápidos dentro da identidade PeekSecurity.</p>
</section>

<section class="ps-notes-app" id="ps-notes-app" aria-label="PS.Notes editor">
  <div class="ps-notes-header">
    <div class="logo">👾 PS.<span>NOTES</span></div>
    <div class="header-controls">
      <span class="split-badge" id="mode-badge">◼ SINGLE</span>
      <button class="btn btn-split btn-primary" onclick="toggleSplit()" id="split-btn" type="button">⫿ SPLIT VIEW</button>
      <button class="btn btn-split btn-success" onclick="openSaveModal()" type="button">💾 NOTAS</button>
      <button class="btn btn-split" onclick="saveCurrentNote()" type="button">SALVAR</button>
      <button class="btn btn-split btn-danger" onclick="clearActive()" type="button">LIMPAR</button>
      <button class="btn btn-split" onclick="exportNote()" type="button">⬇ EXPORT</button>
    </div>
  </div>

  <div class="statusbar">
    <span><i class="dot"></i> ONLINE</span>
    <span id="sb-time">--:--:--</span>
    <span>PS.NOTES v1.1</span>
    <span id="sb-notes-count">0 NOTAS SALVAS</span>
    <span id="sb-active-panel">PAINEL: A</span>
  </div>

  <div id="workspace">
    <div class="panel" id="panel-a">
      <div class="panel-titlebar">
        <div class="panel-dots">
          <button class="panel-dot dot-close" onclick="closePanel('a')" aria-label="Fechar painel A" type="button"></button>
          <span class="panel-dot dot-min" aria-hidden="true"></span>
          <span class="panel-dot dot-max" aria-hidden="true"></span>
        </div>
        <input class="panel-title-input" id="title-a" type="text" value="nota_01.sh" spellcheck="false">
        <div class="panel-meta">
          <span id="chars-a">0 chars</span>
          <span id="lines-a">1 ln</span>
        </div>
      </div>

      <div class="panel-toolbar">
        <button class="btn" type="button" onclick="insertSnippet('a','#!/bin/bash\n\n')">#!/bin/bash</button>
        <button class="btn" type="button" onclick="insertSnippet('a','# TODO: \n')">TODO</button>
        <button class="btn" type="button" onclick="insertSnippet('a','echo &quot;&quot;\n')">echo</button>
        <button class="btn" type="button" onclick="insertSnippet('a','# ═══════════════════\n')">━━━</button>
        <div class="tool-sep"></div>
        <select class="lang-select" id="lang-a" onchange="updateLang('a')">
          <option value="sh">bash/sh</option>
          <option value="py">python</option>
          <option value="js">javascript</option>
          <option value="txt">texto</option>
          <option value="md">markdown</option>
          <option value="sql">sql</option>
          <option value="yaml">yaml</option>
        </select>
        <div class="tool-sep"></div>
        <button class="btn" type="button" onclick="copyPanel('a')">📋 COPIAR</button>
      </div>

      <div class="editor-wrap" onclick="setActive('a')">
        <div class="line-numbers" id="lnum-a"></div>
        <textarea class="editor-textarea" id="editor-a" spellcheck="false" oninput="onEdit('a')" onkeydown="handleTab(event,'a')" onscroll="syncScroll('a')" onclick="setActive('a')" onfocus="setActive('a')" onkeyup="updateCursor('a')"></textarea>
      </div>

      <div class="panel-footer">
        <span id="lang-label-a">LANG: BASH</span>
        <span class="cursor-pos" id="cursor-a">LN 1, COL 1</span>
        <span id="size-a">0 B</span>
      </div>
    </div>

    <div class="divider" id="divider" onmousedown="startDrag(event)"></div>

    <div class="panel" id="panel-b" style="display:none">
      <div class="panel-titlebar">
        <div class="panel-dots">
          <button class="panel-dot dot-close" onclick="closePanel('b')" aria-label="Fechar painel B" type="button"></button>
          <span class="panel-dot dot-min" aria-hidden="true"></span>
          <span class="panel-dot dot-max" aria-hidden="true"></span>
        </div>
        <input class="panel-title-input" id="title-b" type="text" value="nota_02.sh" spellcheck="false">
        <div class="panel-meta">
          <span id="chars-b">0 chars</span>
          <span id="lines-b">1 ln</span>
        </div>
      </div>

      <div class="panel-toolbar">
        <button class="btn" type="button" onclick="insertSnippet('b','#!/bin/bash\n\n')">#!/bin/bash</button>
        <button class="btn" type="button" onclick="insertSnippet('b','# TODO: \n')">TODO</button>
        <button class="btn" type="button" onclick="insertSnippet('b','echo &quot;&quot;\n')">echo</button>
        <button class="btn" type="button" onclick="insertSnippet('b','# ═══════════════════\n')">━━━</button>
        <div class="tool-sep"></div>
        <select class="lang-select" id="lang-b" onchange="updateLang('b')">
          <option value="sh">bash/sh</option>
          <option value="py">python</option>
          <option value="js">javascript</option>
          <option value="txt">texto</option>
          <option value="md">markdown</option>
          <option value="sql">sql</option>
          <option value="yaml">yaml</option>
        </select>
        <div class="tool-sep"></div>
        <button class="btn" type="button" onclick="copyPanel('b')">📋 COPIAR</button>
      </div>

      <div class="editor-wrap" onclick="setActive('b')">
        <div class="line-numbers" id="lnum-b"></div>
        <textarea class="editor-textarea" id="editor-b" spellcheck="false" oninput="onEdit('b')" onkeydown="handleTab(event,'b')" onscroll="syncScroll('b')" onclick="setActive('b')" onfocus="setActive('b')" onkeyup="updateCursor('b')"></textarea>
      </div>

      <div class="panel-footer">
        <span id="lang-label-b">LANG: BASH</span>
        <span class="cursor-pos" id="cursor-b">LN 1, COL 1</span>
        <span id="size-b">0 B</span>
      </div>
    </div>
  </div>

  <div id="toast"></div>
  <div class="corner-decor">PSECURITY // NOTES // 2026</div>

  <div id="modal-overlay">
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="notes-modal-title">
      <h2 id="notes-modal-title">💾 NOTAS SALVAS</h2>
      <ul class="modal-list" id="modal-list"></ul>
      <div class="modal-actions">
        <button class="btn btn-primary" onclick="saveCurrentNote(); closeModal()" type="button">SALVAR ATUAL</button>
        <button class="btn btn-danger" onclick="closeModal()" type="button">FECHAR</button>
      </div>
    </div>
  </div>
</section>

<section class="section-block notice-card notes-disclaimer">
  <h2>Sobre a ferramenta</h2>
  <p>O PS.Notes salva notas localmente no navegador via <code>localStorage</code>. Ele é ideal para comandos, snippets e rascunhos técnicos rápidos, mas não substitui backup externo ou armazenamento de informações sensíveis.</p>
</section>
