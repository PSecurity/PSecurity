---
layout: default
title: Notepad
---

<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>👾 PS.Notes — PeekSecurity</title>
<link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&family=VT323&display=swap" rel="stylesheet">
<style>
  :root {
    --bg:        #0a0010;
    --bg2:       #0f0018;
    --panel:     #110020;
    --border:    #6b00c8;
    --border2:   #9b30ff;
    --glow:      #a855f7;
    --glow2:     #7c3aed;
    --text:      #d8b4fe;
    --text2:     #e9d5ff;
    --dim:       #7c3aed88;
    --accent:    #c084fc;
    --green:     #4ade80;
    --red:       #f87171;
    --scan:      rgba(168,85,247,0.04);
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Share Tech Mono', monospace;
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* Scanlines */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      var(--scan) 2px,
      var(--scan) 4px
    );
    pointer-events: none;
    z-index: 9999;
  }

  /* CRT vignette */
  body::after {
    content: '';
    position: fixed;
    inset: 0;
    background: radial-gradient(ellipse at center, transparent 60%, #000000cc 100%);
    pointer-events: none;
    z-index: 9998;
  }

  /* ── HEADER ── */
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    border-bottom: 1px solid var(--border);
    background: var(--bg2);
    box-shadow: 0 0 20px #6b00c840;
    flex-wrap: wrap;
    gap: 10px;
  }

  .logo {
    font-family: 'Orbitron', monospace;
    font-weight: 900;
    font-size: 1.1rem;
    color: var(--accent);
    text-shadow: 0 0 12px var(--glow), 0 0 30px var(--glow2);
    letter-spacing: 2px;
  }

  .logo span { color: var(--glow); }

  .header-controls {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  /* ── BUTTONS ── */
  .btn {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.75rem;
    padding: 5px 12px;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--text);
    cursor: pointer;
    transition: all 0.15s;
    letter-spacing: 1px;
    position: relative;
    overflow: hidden;
  }
  .btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--glow2);
    opacity: 0;
    transition: opacity 0.15s;
  }
  .btn:hover { border-color: var(--glow); color: #fff; text-shadow: 0 0 8px var(--glow); box-shadow: 0 0 12px var(--glow2)40; }
  .btn:hover::before { opacity: 0.12; }
  .btn:active { transform: scale(0.97); }

  .btn-primary {
    border-color: var(--glow);
    color: var(--accent);
    box-shadow: inset 0 0 8px #6b00c830;
  }
  .btn-primary:hover { background: #6b00c820; box-shadow: 0 0 16px var(--glow); }

  .btn-danger { border-color: var(--red); color: var(--red); }
  .btn-danger:hover { box-shadow: 0 0 12px #f8717140; background: #f8717110; }

  .btn-success { border-color: var(--green); color: var(--green); }
  .btn-success:hover { box-shadow: 0 0 12px #4ade8040; background: #4ade8010; }

  .btn-split {
    font-size: 0.7rem;
    padding: 5px 10px;
  }

  /* ── SPLIT TOGGLE ── */
  .split-badge {
    font-size: 0.65rem;
    padding: 3px 8px;
    border: 1px solid var(--border2);
    color: var(--glow);
    background: #6b00c815;
    letter-spacing: 1px;
    animation: pulse-badge 2s infinite;
  }
  @keyframes pulse-badge {
    0%,100% { box-shadow: 0 0 4px var(--glow2); }
    50%      { box-shadow: 0 0 12px var(--glow); }
  }

  /* ── STATUS BAR ── */
  .statusbar {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 4px 20px;
    font-size: 0.65rem;
    color: var(--dim);
    border-bottom: 1px solid #6b00c830;
    background: #0a001088;
    flex-wrap: wrap;
  }
  .statusbar span { display: flex; align-items: center; gap: 4px; }
  .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--green); box-shadow: 0 0 6px var(--green); animation: blink 1.5s infinite; }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }

  /* ── WORKSPACE ── */
  #workspace {
    display: flex;
    gap: 0;
    height: calc(100vh - 90px);
    overflow: hidden;
  }

  /* ── PANEL ── */
  .panel {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    border-right: 1px solid #6b00c840;
    position: relative;
    transition: flex 0.3s ease;
  }
  .panel:last-child { border-right: none; }

  /* Panel title bar */
  .panel-titlebar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 12px;
    background: var(--bg2);
    border-bottom: 1px solid var(--border);
    box-shadow: 0 2px 12px #6b00c820;
    gap: 8px;
  }

  .panel-dots {
    display: flex;
    gap: 5px;
  }
  .panel-dot {
    width: 8px; height: 8px; border-radius: 50%;
    cursor: pointer; transition: transform 0.15s, box-shadow 0.15s;
  }
  .panel-dot:hover { transform: scale(1.3); }
  .dot-close   { background: #f87171; box-shadow: 0 0 6px #f87171; }
  .dot-min     { background: #fbbf24; box-shadow: 0 0 6px #fbbf24; }
  .dot-max     { background: #4ade80; box-shadow: 0 0 6px #4ade80; }

  .panel-title-input {
    flex: 1;
    background: transparent;
    border: none;
    border-bottom: 1px solid #6b00c850;
    color: var(--accent);
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.75rem;
    padding: 2px 6px;
    outline: none;
    letter-spacing: 1px;
    min-width: 80px;
  }
  .panel-title-input:focus { border-color: var(--glow); text-shadow: 0 0 6px var(--glow); }

  .panel-meta {
    font-size: 0.6rem;
    color: var(--dim);
    white-space: nowrap;
    display: flex;
    gap: 8px;
    align-items: center;
  }

  /* Toolbar */
  .panel-toolbar {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 5px 10px;
    background: #0f001a;
    border-bottom: 1px solid #6b00c825;
    flex-wrap: wrap;
  }

  .tool-sep {
    width: 1px;
    height: 16px;
    background: var(--border);
    margin: 0 2px;
    opacity: 0.5;
  }

  .lang-select {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.65rem;
    background: transparent;
    border: 1px solid var(--border);
    color: var(--text);
    padding: 3px 6px;
    cursor: pointer;
    outline: none;
  }
  .lang-select option { background: var(--bg2); }

  /* Editor area */
  .editor-wrap {
    flex: 1;
    display: flex;
    overflow: hidden;
    position: relative;
  }

  .line-numbers {
    width: 42px;
    padding: 14px 0;
    background: #0a0015;
    border-right: 1px solid #6b00c820;
    text-align: right;
    font-size: 0.72rem;
    color: #6b00c880;
    line-height: 1.6;
    user-select: none;
    overflow: hidden;
    flex-shrink: 0;
  }
  .line-numbers div { padding-right: 8px; }
  .line-numbers div.active { color: var(--accent); }

  .editor-textarea {
    flex: 1;
    background: transparent;
    border: none;
    color: var(--text2);
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.82rem;
    line-height: 1.6;
    padding: 14px 14px;
    resize: none;
    outline: none;
    overflow-y: auto;
    tab-size: 2;
    white-space: pre;
    word-wrap: off;
    scrollbar-width: thin;
    scrollbar-color: var(--border) transparent;
    caret-color: var(--glow);
  }
  .editor-textarea::selection { background: #6b00c840; }

  /* Scrollbar */
  .editor-textarea::-webkit-scrollbar { width: 5px; height: 5px; }
  .editor-textarea::-webkit-scrollbar-track { background: transparent; }
  .editor-textarea::-webkit-scrollbar-thumb { background: var(--border2); border-radius: 2px; }

  /* Ghost cursor blink */
  .editor-textarea:focus { box-shadow: inset 2px 0 0 var(--glow2); }

  /* Footer panel */
  .panel-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 12px;
    font-size: 0.6rem;
    color: #6b00c870;
    background: var(--bg2);
    border-top: 1px solid #6b00c830;
    gap: 8px;
    flex-wrap: wrap;
  }
  .panel-footer .cursor-pos { color: var(--accent); }

  /* ── DIVIDER ── */
  .divider {
    width: 5px;
    background: var(--border);
    cursor: col-resize;
    flex-shrink: 0;
    position: relative;
    transition: background 0.2s;
    display: none;
    box-shadow: 0 0 8px var(--glow2);
  }
  .divider:hover, .divider.dragging { background: var(--glow); box-shadow: 0 0 16px var(--glow); }
  .divider::after {
    content: '⋮';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--glow);
    font-size: 1rem;
    pointer-events: none;
  }

  /* ── GLOW BACKGROUND EFFECT ── */
  .editor-wrap::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, var(--glow2), transparent);
    animation: scan-line 4s linear infinite;
    pointer-events: none;
    z-index: 10;
    opacity: 0.5;
  }
  @keyframes scan-line {
    0%   { top: 0;    opacity: 0.7; }
    100% { top: 100%; opacity: 0; }
  }

  /* ── TOAST ── */
  #toast {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 8px 16px;
    background: var(--bg2);
    border: 1px solid var(--glow);
    color: var(--accent);
    font-size: 0.75rem;
    letter-spacing: 1px;
    box-shadow: 0 0 20px var(--glow2);
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.3s;
    pointer-events: none;
    z-index: 9997;
    font-family: 'Share Tech Mono', monospace;
  }
  #toast.show { opacity: 1; transform: translateY(0); }

  /* ── MODAL SAVE ── */
  #modal-overlay {
    position: fixed; inset: 0;
    background: #00000099;
    backdrop-filter: blur(4px);
    z-index: 10000;
    display: none;
    align-items: center;
    justify-content: center;
  }
  #modal-overlay.open { display: flex; }

  .modal {
    background: var(--bg2);
    border: 1px solid var(--border2);
    box-shadow: 0 0 40px var(--glow2);
    padding: 24px;
    min-width: 320px;
    max-width: 90vw;
    font-family: 'Share Tech Mono', monospace;
  }
  .modal h2 {
    font-family: 'Orbitron', monospace;
    color: var(--accent);
    font-size: 0.9rem;
    margin-bottom: 16px;
    letter-spacing: 2px;
    text-shadow: 0 0 10px var(--glow);
  }
  .modal-list { list-style: none; max-height: 200px; overflow-y: auto; margin-bottom: 16px; }
  .modal-list li {
    padding: 7px 10px;
    border: 1px solid #6b00c830;
    margin-bottom: 4px;
    cursor: pointer;
    color: var(--text);
    font-size: 0.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal-list li:hover { background: #6b00c815; border-color: var(--glow); color: var(--accent); }
  .modal-list li .del-note { color: var(--red); padding: 0 4px; font-size: 0.8rem; }
  .modal-actions { display: flex; gap: 8px; justify-content: flex-end; }

  /* ── CORNER DECORATION ── */
  .corner-decor {
    position: fixed;
    bottom: 10px;
    left: 16px;
    font-family: 'VT323', monospace;
    font-size: 1rem;
    color: #6b00c840;
    pointer-events: none;
    z-index: 9990;
    letter-spacing: 1px;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 640px) {
    #workspace.split .panel { min-width: 100%; }
    .panel-toolbar { gap: 3px; }
  }
</style>
</head>
<body>

<!-- HEADER -->
<header>
  <div class="logo">👾 PS.<span>NOTES</span></div>
  <div class="header-controls">
    <span class="split-badge" id="mode-badge">◼ SINGLE</span>
    <button class="btn btn-split btn-primary" onclick="toggleSplit()" id="split-btn">⫿ SPLIT VIEW</button>
    <button class="btn btn-split btn-success" onclick="openSaveModal()">💾 NOTAS</button>
    <button class="btn btn-split" onclick="saveCurrentNote()">SALVAR</button>
    <button class="btn btn-split btn-danger" onclick="clearActive()">LIMPAR</button>
    <button class="btn btn-split" onclick="exportNote()">⬇ EXPORT</button>
  </div>
</header>

<!-- STATUS BAR -->
<div class="statusbar">
  <span><i class="dot"></i> ONLINE</span>
  <span id="sb-time">--:--:--</span>
  <span>PS.NOTES v1.0</span>
  <span id="sb-notes-count">0 NOTAS SALVAS</span>
  <span id="sb-active-panel">PAINEL: A</span>
</div>

<!-- WORKSPACE -->
<div id="workspace">

  <!-- PANEL A -->
  <div class="panel" id="panel-a">
    <div class="panel-titlebar">
      <div class="panel-dots">
        <div class="panel-dot dot-close" title="Fechar painel" onclick="closePanel('a')"></div>
        <div class="panel-dot dot-min"></div>
        <div class="panel-dot dot-max"></div>
      </div>
      <input class="panel-title-input" id="title-a" type="text" value="nota_01.sh" spellcheck="false" />
      <div class="panel-meta">
        <span id="chars-a">0 chars</span>
        <span id="lines-a">1 ln</span>
      </div>
    </div>

    <div class="panel-toolbar">
      <button class="btn" style="font-size:0.65rem;padding:3px 8px" onclick="insertSnippet('a','#!/bin/bash\n\n')">#!/bin/bash</button>
      <button class="btn" style="font-size:0.65rem;padding:3px 8px" onclick="insertSnippet('a','# TODO: \n')">TODO</button>
      <button class="btn" style="font-size:0.65rem;padding:3px 8px" onclick="insertSnippet('a','echo \"\"\n')">echo</button>
      <button class="btn" style="font-size:0.65rem;padding:3px 8px" onclick="insertSnippet('a','# ═══════════════════════════════\n')">━━━</button>
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
      <button class="btn" style="font-size:0.65rem;padding:3px 8px" onclick="copyPanel('a')">📋 COPIAR</button>
    </div>

    <div class="editor-wrap" onclick="setActive('a')">
      <div class="line-numbers" id="lnum-a"></div>
      <textarea class="editor-textarea" id="editor-a"
        spellcheck="false"
        placeholder="# PeekSecurity PS.Notes&#10;# Digite seu código ou anotação aqui..."
        oninput="onEdit('a')"
        onkeydown="handleTab(event,'a')"
        onscroll="syncScroll('a')"
        onclick="setActive('a')"
        onfocus="setActive('a')"
        onkeyup="updateCursor('a')"
      ></textarea>
    </div>

    <div class="panel-footer">
      <span id="lang-label-a">LANG: BASH</span>
      <span class="cursor-pos" id="cursor-a">LN 1, COL 1</span>
      <span id="size-a">0 B</span>
    </div>
  </div>

  <!-- DIVIDER -->
  <div class="divider" id="divider" onmousedown="startDrag(event)"></div>

  <!-- PANEL B -->
  <div class="panel" id="panel-b" style="display:none">
    <div class="panel-titlebar">
      <div class="panel-dots">
        <div class="panel-dot dot-close" title="Fechar painel" onclick="closePanel('b')"></div>
        <div class="panel-dot dot-min"></div>
        <div class="panel-dot dot-max"></div>
      </div>
      <input class="panel-title-input" id="title-b" type="text" value="nota_02.sh" spellcheck="false" />
      <div class="panel-meta">
        <span id="chars-b">0 chars</span>
        <span id="lines-b">1 ln</span>
      </div>
    </div>

    <div class="panel-toolbar">
      <button class="btn" style="font-size:0.65rem;padding:3px 8px" onclick="insertSnippet('b','#!/bin/bash\n\n')">#!/bin/bash</button>
      <button class="btn" style="font-size:0.65rem;padding:3px 8px" onclick="insertSnippet('b','# TODO: \n')">TODO</button>
      <button class="btn" style="font-size:0.65rem;padding:3px 8px" onclick="insertSnippet('b','echo \"\"\n')">echo</button>
      <button class="btn" style="font-size:0.65rem;padding:3px 8px" onclick="insertSnippet('b','# ═══════════════════════════════\n')">━━━</button>
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
      <button class="btn" style="font-size:0.65rem;padding:3px 8px" onclick="copyPanel('b')">📋 COPIAR</button>
    </div>

    <div class="editor-wrap" onclick="setActive('b')">
      <div class="line-numbers" id="lnum-b"></div>
      <textarea class="editor-textarea" id="editor-b"
        spellcheck="false"
        placeholder="# Painel B — compare código aqui..."
        oninput="onEdit('b')"
        onkeydown="handleTab(event,'b')"
        onscroll="syncScroll('b')"
        onclick="setActive('b')"
        onfocus="setActive('b')"
        onkeyup="updateCursor('b')"
      ></textarea>
    </div>

    <div class="panel-footer">
      <span id="lang-label-b">LANG: BASH</span>
      <span class="cursor-pos" id="cursor-b">LN 1, COL 1</span>
      <span id="size-b">0 B</span>
    </div>
  </div>

</div><!-- /workspace -->

<!-- TOAST -->
<div id="toast"></div>

<!-- CORNER -->
<div class="corner-decor">PSECURITY // NOTES // 2026</div>

<!-- MODAL -->
<div id="modal-overlay">
  <div class="modal">
    <h2>💾 NOTAS SALVAS</h2>
    <ul class="modal-list" id="modal-list"></ul>
    <div class="modal-actions">
      <button class="btn btn-primary" onclick="saveCurrentNote(); closeModal()">SALVAR ATUAL</button>
      <button class="btn btn-danger" onclick="closeModal()">FECHAR</button>
    </div>
  </div>
</div>

<script>
// ── STATE ──
let splitMode   = false;
let activePanel = 'a';
let notes       = JSON.parse(localStorage.getItem('ps_notes') || '{}');

// ── INIT ──
updateLineNumbers('a');
updateLineNumbers('b');
updateStatus();
setInterval(updateClock, 1000);
updateClock();
updateNotesCount();

// ── ACTIVE PANEL ──
function setActive(p) {
  activePanel = p;
  document.querySelectorAll('.panel').forEach(el => el.style.outline = 'none');
  document.getElementById('panel-' + p).style.outline = '1px solid #6b00c880';
  document.getElementById('sb-active-panel').textContent = 'PAINEL: ' + p.toUpperCase();
}
setActive('a');

// ── SPLIT TOGGLE ──
function toggleSplit() {
  splitMode = !splitMode;
  const pb   = document.getElementById('panel-b');
  const div  = document.getElementById('divider');
  const btn  = document.getElementById('split-btn');
  const badge= document.getElementById('mode-badge');

  if (splitMode) {
    pb.style.display  = 'flex';
    div.style.display = 'block';
    btn.textContent   = '◼ SINGLE VIEW';
    badge.textContent = '⫿ SPLIT';
    badge.style.color = '#4ade80';
    toast('SPLIT VIEW ATIVADO — compare os painéis');
  } else {
    pb.style.display  = 'none';
    div.style.display = 'none';
    btn.textContent   = '⫿ SPLIT VIEW';
    badge.textContent = '◼ SINGLE';
    badge.style.color = '';
    setActive('a');
  }
}

// ── CLOSE PANEL ──
function closePanel(p) {
  if (p === 'b') { if (splitMode) toggleSplit(); return; }
  if (p === 'a' && splitMode) {
    // swap B into A
    document.getElementById('editor-a').value = document.getElementById('editor-b').value;
    document.getElementById('title-a').value  = document.getElementById('title-b').value;
    document.getElementById('editor-b').value = '';
    onEdit('a'); onEdit('b');
    toggleSplit();
    toast('PAINEL A fechado — B promovido');
  }
}

// ── EDIT HANDLERS ──
function onEdit(p) {
  updateLineNumbers(p);
  updateStatus(p);
  updateCursor(p);
  autosaveDraft(p);
}

function updateLineNumbers(p) {
  const ta    = document.getElementById('editor-' + p);
  const lnDiv = document.getElementById('lnum-' + p);
  const lines = ta.value.split('\n').length;
  let html = '';
  for (let i = 1; i <= lines; i++) html += `<div>${i}</div>`;
  lnDiv.innerHTML = html;
  document.getElementById('lines-' + p).textContent = lines + ' ln';
  document.getElementById('chars-' + p).textContent = ta.value.length + ' chars';
}

function syncScroll(p) {
  const ta    = document.getElementById('editor-' + p);
  const lnDiv = document.getElementById('lnum-' + p);
  lnDiv.scrollTop = ta.scrollTop;
}

function updateCursor(p) {
  const ta  = document.getElementById('editor-' + p);
  const val = ta.value.substring(0, ta.selectionStart);
  const ln  = val.split('\n').length;
  const col = val.split('\n').pop().length + 1;
  document.getElementById('cursor-' + p).textContent = `LN ${ln}, COL ${col}`;
}

function updateStatus(p) {
  ['a','b'].forEach(x => {
    const val = document.getElementById('editor-' + x).value;
    const bytes = new Blob([val]).size;
    document.getElementById('size-' + x).textContent = bytes < 1024
      ? bytes + ' B' : (bytes/1024).toFixed(1) + ' KB';
  });
}

function handleTab(e, p) {
  if (e.key === 'Tab') {
    e.preventDefault();
    const ta    = document.getElementById('editor-' + p);
    const start = ta.selectionStart;
    const end   = ta.selectionEnd;
    ta.value = ta.value.substring(0, start) + '  ' + ta.value.substring(end);
    ta.selectionStart = ta.selectionEnd = start + 2;
    onEdit(p);
  }
}

function insertSnippet(p, text) {
  const ta    = document.getElementById('editor-' + p);
  const start = ta.selectionStart;
  ta.focus();
  ta.value = ta.value.substring(0, start) + text + ta.value.substring(ta.selectionEnd);
  ta.selectionStart = ta.selectionEnd = start + text.length;
  onEdit(p);
}

function updateLang(p) {
  const lang = document.getElementById('lang-' + p).value.toUpperCase();
  document.getElementById('lang-label-' + p).textContent = 'LANG: ' + lang;
}

// ── COPY ──
function copyPanel(p) {
  const text = document.getElementById('editor-' + p).value;
  if (!text) { toast('⚠ PAINEL VAZIO'); return; }
  navigator.clipboard.writeText(text).then(() => toast('📋 COPIADO — ' + text.length + ' chars'));
}

// ── CLEAR ──
function clearActive() {
  const ta = document.getElementById('editor-' + activePanel);
  if (!ta.value) { toast('⚠ JÁ ESTÁ VAZIO'); return; }
  if (confirm('Limpar painel ' + activePanel.toUpperCase() + '?')) {
    ta.value = '';
    onEdit(activePanel);
    toast('🗑 PAINEL ' + activePanel.toUpperCase() + ' LIMPO');
  }
}

// ── SAVE / LOAD ──
function saveCurrentNote() {
  const p     = activePanel;
  const title = document.getElementById('title-' + p).value.trim() || 'nota_' + Date.now();
  const text  = document.getElementById('editor-' + p).value;
  if (!text) { toast('⚠ NADA PARA SALVAR'); return; }
  notes[title] = { text, lang: document.getElementById('lang-' + p).value, ts: Date.now() };
  localStorage.setItem('ps_notes', JSON.stringify(notes));
  updateNotesCount();
  toast('💾 SALVO — ' + title);
}

function loadNote(key) {
  const n  = notes[key];
  const p  = activePanel;
  document.getElementById('editor-' + p).value  = n.text;
  document.getElementById('title-' + p).value   = key;
  document.getElementById('lang-' + p).value    = n.lang || 'sh';
  updateLang(p);
  onEdit(p);
  closeModal();
  toast('📂 CARREGADO — ' + key);
}

function deleteNote(key, e) {
  e.stopPropagation();
  if (!confirm('Deletar "' + key + '"?')) return;
  delete notes[key];
  localStorage.setItem('ps_notes', JSON.stringify(notes));
  updateNotesCount();
  renderModalList();
  toast('🗑 DELETADO — ' + key);
}

function autosaveDraft(p) {
  const key = '__draft_' + p;
  notes[key] = {
    text: document.getElementById('editor-' + p).value,
    lang: document.getElementById('lang-' + p).value,
    ts: Date.now()
  };
  localStorage.setItem('ps_notes', JSON.stringify(notes));
}

function updateNotesCount() {
  const real = Object.keys(notes).filter(k => !k.startsWith('__draft_')).length;
  document.getElementById('sb-notes-count').textContent = real + ' NOTAS SALVAS';
}

// ── EXPORT ──
function exportNote() {
  const p     = activePanel;
  const text  = document.getElementById('editor-' + p).value;
  const title = document.getElementById('title-' + p).value || 'nota';
  if (!text) { toast('⚠ PAINEL VAZIO'); return; }
  const blob = new Blob([text], {type: 'text/plain'});
  const a    = document.createElement('a');
  a.href     = URL.createObjectURL(blob);
  a.download = title;
  a.click();
  toast('⬇ EXPORTADO — ' + title);
}

// ── MODAL ──
function openSaveModal() {
  renderModalList();
  document.getElementById('modal-overlay').classList.add('open');
}
function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}
document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
});

function renderModalList() {
  const ul   = document.getElementById('modal-list');
  const keys = Object.keys(notes).filter(k => !k.startsWith('__draft_'));
  if (!keys.length) {
    ul.innerHTML = '<li style="color:#6b00c870;justify-content:center">NENHUMA NOTA SALVA</li>';
    return;
  }
  ul.innerHTML = keys.map(k => {
    const n   = notes[k];
    const ts  = n.ts ? new Date(n.ts).toLocaleString('pt-BR') : '';
    const pre = (n.text || '').substring(0, 40).replace(/</g,'&lt;');
    return `<li onclick="loadNote('${k.replace(/'/g,"\\'")}')">
      <div>
        <div style="color:var(--accent)">${k}</div>
        <div style="font-size:0.6rem;color:#6b00c880">${ts} · ${pre}…</div>
      </div>
      <span class="del-note" onclick="deleteNote('${k.replace(/'/g,"\\'")}', event)" title="Deletar">✕</span>
    </li>`;
  }).join('');
}

// ── DRAG DIVIDER ──
let dragging = false;
function startDrag(e) {
  dragging = true;
  document.getElementById('divider').classList.add('dragging');
  document.addEventListener('mousemove', doDrag);
  document.addEventListener('mouseup', stopDrag);
}
function doDrag(e) {
  if (!dragging) return;
  const ws   = document.getElementById('workspace');
  const rect = ws.getBoundingClientRect();
  const divW = 5;
  let aFlex  = ((e.clientX - rect.left) / (rect.width - divW)) * 100;
  aFlex = Math.max(20, Math.min(80, aFlex));
  document.getElementById('panel-a').style.flex = aFlex + ' 1 0';
  document.getElementById('panel-b').style.flex = (100 - aFlex) + ' 1 0';
}
function stopDrag() {
  dragging = false;
  document.getElementById('divider').classList.remove('dragging');
  document.removeEventListener('mousemove', doDrag);
  document.removeEventListener('mouseup', stopDrag);
}

// ── CLOCK ──
function updateClock() {
  document.getElementById('sb-time').textContent = new Date().toLocaleTimeString('pt-BR');
}

// ── TOAST ──
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove('show'), 2500);
}

// ── RESTORE DRAFTS ──
['a','b'].forEach(p => {
  const d = notes['__draft_' + p];
  if (d && d.text) {
    document.getElementById('editor-' + p).value = d.text;
    if (d.lang) { document.getElementById('lang-' + p).value = d.lang; updateLang(p); }
    onEdit(p);
  }
});

// ── KEYBOARD SHORTCUTS ──
document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key === 's') {
    e.preventDefault();
    saveCurrentNote();
  }
  if ((e.ctrlKey || e.metaKey) && e.key === '\\') {
    e.preventDefault();
    toggleSplit();
  }
});
</script>
</body>
</html>
