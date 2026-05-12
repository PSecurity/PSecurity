// PS.Notes v1.1 — base autoral preservada e integrada ao portfólio PeekSecurity
let splitMode = false;
let activePanel = 'a';
let notes = {};
let dragging = false;
let notesReady = false;

function psNotesEl(id) { return document.getElementById(id); }
function psNotesEscape(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function setPlaceholder(p) {
  const ta = psNotesEl('editor-' + p);
  if (!ta) return;
  if (!ta.value) {
    ta.style.color = '#6b00c860';
    ta._placeholder = true;
    ta.value = p === 'a'
      ? '# PeekSecurity PS.Notes\n# Digite seu código ou anotação aqui...'
      : '# Painel B — compare código aqui...';
  }
}

function clearPlaceholder(p) {
  const ta = psNotesEl('editor-' + p);
  if (!ta) return;
  if (ta._placeholder) {
    ta.value = '';
    ta.style.color = '';
    ta._placeholder = false;
  }
}

function setActive(p) {
  activePanel = p;
  document.querySelectorAll('#ps-notes-app .panel').forEach(el => el.style.outline = 'none');
  const panel = psNotesEl('panel-' + p);
  const label = psNotesEl('sb-active-panel');
  if (panel) panel.style.outline = '1px solid #6b00c880';
  if (label) label.textContent = 'PAINEL: ' + p.toUpperCase();
}

function toggleSplit() {
  splitMode = !splitMode;
  const pb = psNotesEl('panel-b');
  const div = psNotesEl('divider');
  const btn = psNotesEl('split-btn');
  const badge = psNotesEl('mode-badge');
  if (!pb || !div || !btn || !badge) return;

  if (splitMode) {
    pb.style.display = 'flex';
    div.style.display = 'block';
    btn.textContent = '◼ SINGLE VIEW';
    badge.textContent = '⫿ SPLIT';
    badge.style.color = '#4ade80';
    toast('SPLIT VIEW ATIVADO');
  } else {
    pb.style.display = 'none';
    div.style.display = 'none';
    btn.textContent = '⫿ SPLIT VIEW';
    badge.textContent = '◼ SINGLE';
    badge.style.color = '';
    setActive('a');
  }
}

function closePanel(p) {
  if (p === 'b' && splitMode) { toggleSplit(); return; }
  if (p === 'a' && splitMode) {
    psNotesEl('editor-a').value = psNotesEl('editor-b').value;
    psNotesEl('title-a').value = psNotesEl('title-b').value;
    psNotesEl('editor-b').value = '';
    onEdit('a'); onEdit('b');
    toggleSplit();
    toast('PAINEL B promovido para A');
  }
}

function onEdit(p) {
  const ta = psNotesEl('editor-' + p);
  if (!ta || ta._placeholder) return;
  updateLineNumbers(p);
  updateStatus();
  updateCursor(p);
  autosaveDraft(p);
}

function updateLineNumbers(p) {
  const ta = psNotesEl('editor-' + p);
  const lnDiv = psNotesEl('lnum-' + p);
  if (!ta || !lnDiv) return;
  const val = ta._placeholder ? '' : ta.value;
  const lines = val ? val.split('\n').length : 1;
  let html = '';
  for (let i = 1; i <= lines; i++) html += '<div>' + i + '</div>';
  lnDiv.innerHTML = html;
  if (!ta._placeholder) {
    const linesLabel = psNotesEl('lines-' + p);
    const charsLabel = psNotesEl('chars-' + p);
    if (linesLabel) linesLabel.textContent = lines + ' ln';
    if (charsLabel) charsLabel.textContent = ta.value.length + ' chars';
  }
}

function syncScroll(p) {
  const ta = psNotesEl('editor-' + p);
  const lnDiv = psNotesEl('lnum-' + p);
  if (ta && lnDiv) lnDiv.scrollTop = ta.scrollTop;
}

function updateCursor(p) {
  const ta = psNotesEl('editor-' + p);
  const cursor = psNotesEl('cursor-' + p);
  if (!ta || !cursor || ta._placeholder) return;
  const val = ta.value.substring(0, ta.selectionStart);
  const ln = val.split('\n').length;
  const col = val.split('\n').pop().length + 1;
  cursor.textContent = 'LN ' + ln + ', COL ' + col;
}

function updateStatus() {
  ['a', 'b'].forEach(x => {
    const ta = psNotesEl('editor-' + x);
    const sizeLabel = psNotesEl('size-' + x);
    if (!ta || !sizeLabel) return;
    if (ta._placeholder) { sizeLabel.textContent = '0 B'; return; }
    const bytes = new Blob([ta.value]).size;
    sizeLabel.textContent = bytes < 1024 ? bytes + ' B' : (bytes / 1024).toFixed(1) + ' KB';
  });
}

function handleTab(e, p) {
  if (e.key === 'Tab') {
    e.preventDefault();
    clearPlaceholder(p);
    const ta = psNotesEl('editor-' + p);
    if (!ta) return;
    const start = ta.selectionStart;
    ta.value = ta.value.substring(0, start) + '  ' + ta.value.substring(ta.selectionEnd);
    ta.selectionStart = ta.selectionEnd = start + 2;
    onEdit(p);
  }
}

function insertSnippet(p, text) {
  clearPlaceholder(p);
  const ta = psNotesEl('editor-' + p);
  if (!ta) return;
  const start = ta.selectionStart;
  ta.focus();
  const realText = text.replace(/\\n/g, '\n');
  ta.value = ta.value.substring(0, start) + realText + ta.value.substring(ta.selectionEnd);
  ta.selectionStart = ta.selectionEnd = start + realText.length;
  onEdit(p);
}

function updateLang(p) {
  const select = psNotesEl('lang-' + p);
  const label = psNotesEl('lang-label-' + p);
  if (select && label) label.textContent = 'LANG: ' + select.value.toUpperCase();
}

function copyPanel(p) {
  const ta = psNotesEl('editor-' + p);
  if (!ta || !ta.value || ta._placeholder) { toast('PAINEL VAZIO'); return; }
  navigator.clipboard.writeText(ta.value).then(() => toast('COPIADO — ' + ta.value.length + ' chars'));
}

function clearActive() {
  const ta = psNotesEl('editor-' + activePanel);
  if (!ta || !ta.value || ta._placeholder) { toast('JA ESTA VAZIO'); return; }
  if (confirm('Limpar painel ' + activePanel.toUpperCase() + '?')) {
    ta.value = '';
    ta._placeholder = false;
    onEdit(activePanel);
    setPlaceholder(activePanel);
    toast('PAINEL ' + activePanel.toUpperCase() + ' LIMPO');
  }
}

function saveCurrentNote() {
  const p = activePanel;
  const ta = psNotesEl('editor-' + p);
  const titleInput = psNotesEl('title-' + p);
  const langSelect = psNotesEl('lang-' + p);
  if (!ta || !ta.value || ta._placeholder) { toast('NADA PARA SALVAR'); return; }
  const title = (titleInput && titleInput.value.trim()) || 'nota_' + Date.now();
  notes[title] = { text: ta.value, lang: langSelect ? langSelect.value : 'txt', ts: Date.now() };
  localStorage.setItem('ps_notes', JSON.stringify(notes));
  updateNotesCount();
  toast('SALVO — ' + title);
}

function loadNote(key) {
  const n = notes[key];
  if (!n) return;
  const p = activePanel;
  const ta = psNotesEl('editor-' + p);
  const titleInput = psNotesEl('title-' + p);
  const langSelect = psNotesEl('lang-' + p);
  if (!ta) return;
  ta._placeholder = false;
  ta.style.color = '';
  ta.value = n.text;
  if (titleInput) titleInput.value = key;
  if (langSelect) langSelect.value = n.lang || 'sh';
  updateLang(p);
  onEdit(p);
  closeModal();
  toast('CARREGADO — ' + key);
}

function deleteNote(key, e) {
  if (e) e.stopPropagation();
  if (!confirm('Deletar "' + key + '"?')) return;
  delete notes[key];
  localStorage.setItem('ps_notes', JSON.stringify(notes));
  updateNotesCount();
  renderModalList();
  toast('DELETADO — ' + key);
}

function autosaveDraft(p) {
  const ta = psNotesEl('editor-' + p);
  const langSelect = psNotesEl('lang-' + p);
  if (!ta || ta._placeholder) return;
  notes['__draft_' + p] = { text: ta.value, lang: langSelect ? langSelect.value : 'txt', ts: Date.now() };
  localStorage.setItem('ps_notes', JSON.stringify(notes));
}

function restoreDrafts() {
  ['a', 'b'].forEach(p => {
    const d = notes['__draft_' + p];
    const ta = psNotesEl('editor-' + p);
    const langSelect = psNotesEl('lang-' + p);
    if (d && d.text && ta) {
      ta._placeholder = false;
      ta.style.color = '';
      ta.value = d.text;
      if (d.lang && langSelect) { langSelect.value = d.lang; updateLang(p); }
      onEdit(p);
    }
  });
}

function updateNotesCount() {
  const label = psNotesEl('sb-notes-count');
  if (!label) return;
  const real = Object.keys(notes).filter(k => !k.startsWith('__draft_')).length;
  label.textContent = real + ' NOTAS SALVAS';
}

function exportNote() {
  const p = activePanel;
  const ta = psNotesEl('editor-' + p);
  const titleInput = psNotesEl('title-' + p);
  if (!ta || !ta.value || ta._placeholder) { toast('PAINEL VAZIO'); return; }
  const title = (titleInput && titleInput.value) || 'nota';
  const blob = new Blob([ta.value], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = title;
  a.click();
  URL.revokeObjectURL(a.href);
  toast('EXPORTADO — ' + title);
}

function openSaveModal() {
  renderModalList();
  const overlay = psNotesEl('modal-overlay');
  if (overlay) overlay.classList.add('open');
}

function closeModal() {
  const overlay = psNotesEl('modal-overlay');
  if (overlay) overlay.classList.remove('open');
}

function renderModalList() {
  const ul = psNotesEl('modal-list');
  if (!ul) return;
  const keys = Object.keys(notes).filter(k => !k.startsWith('__draft_'));
  if (!keys.length) {
    ul.innerHTML = '<li style="color:#6b00c870;justify-content:center">NENHUMA NOTA SALVA</li>';
    return;
  }
  ul.innerHTML = keys.map(k => {
    const n = notes[k];
    const ts = n.ts ? new Date(n.ts).toLocaleString('pt-BR') : '';
    const pre = psNotesEscape((n.text || '').substring(0, 40));
    const safeKey = psNotesEscape(k);
    const jsKey = k.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    return '<li onclick="loadNote(\'' + jsKey + '\')">'
      + '<div><div style="color:var(--notes-accent)">' + safeKey + '</div>'
      + '<div style="font-size:0.6rem;color:#6b00c880">' + psNotesEscape(ts) + ' · ' + pre + '…</div></div>'
      + '<span class="del-note" onclick="deleteNote(\'' + jsKey + '\', event)" title="Deletar">✕</span>'
      + '</li>';
  }).join('');
}

function startDrag(e) {
  dragging = true;
  const divider = psNotesEl('divider');
  if (divider) divider.classList.add('dragging');
  document.addEventListener('mousemove', doDrag);
  document.addEventListener('mouseup', stopDrag);
}

function doDrag(e) {
  if (!dragging) return;
  const ws = psNotesEl('workspace');
  const panelA = psNotesEl('panel-a');
  const panelB = psNotesEl('panel-b');
  if (!ws || !panelA || !panelB) return;
  const rect = ws.getBoundingClientRect();
  let aFlex = ((e.clientX - rect.left) / Math.max(1, rect.width - 5)) * 100;
  aFlex = Math.max(20, Math.min(80, aFlex));
  panelA.style.flex = aFlex + ' 1 0';
  panelB.style.flex = (100 - aFlex) + ' 1 0';
}

function stopDrag() {
  dragging = false;
  const divider = psNotesEl('divider');
  if (divider) divider.classList.remove('dragging');
  document.removeEventListener('mousemove', doDrag);
  document.removeEventListener('mouseup', stopDrag);
}

function updateClock() {
  const clock = psNotesEl('sb-time');
  if (clock) clock.textContent = new Date().toLocaleTimeString('pt-BR');
}

function toast(msg) {
  const t = psNotesEl('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove('show'), 2500);
}

function initPSNotes() {
  if (notesReady || !psNotesEl('ps-notes-app')) return;
  notesReady = true;
  try { notes = JSON.parse(localStorage.getItem('ps_notes') || '{}'); } catch (e) { notes = {}; }

  updateLineNumbers('a');
  updateLineNumbers('b');
  setPlaceholder('a');
  setPlaceholder('b');

  ['a', 'b'].forEach(p => {
    const ta = psNotesEl('editor-' + p);
    if (!ta) return;
    ta.addEventListener('focus', () => clearPlaceholder(p));
    ta.addEventListener('blur', () => { if (!ta.value) setPlaceholder(p); });
  });

  const overlay = psNotesEl('modal-overlay');
  if (overlay) overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });

  setInterval(updateClock, 1000);
  updateClock();
  updateNotesCount();
  restoreDrafts();
  setActive('a');
}

document.addEventListener('keydown', e => {
  if (!psNotesEl('ps-notes-app')) return;
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') { e.preventDefault(); saveCurrentNote(); }
  if ((e.ctrlKey || e.metaKey) && e.key === '\\') { e.preventDefault(); toggleSplit(); }
});

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initPSNotes);
else initPSNotes();
