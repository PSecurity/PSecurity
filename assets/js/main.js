// PeekSecurity Portfolio — navegação e botões de copiar código
const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => nav.classList.toggle('nav--open'));
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('nav--open'));
  });
}

window.copyCode = async function copyCode(button) {
  const box = button.closest('.code-box, .code-shell');
  const pre = box ? box.querySelector('pre') : button.nextElementSibling;
  if (!pre) return;
  try {
    await navigator.clipboard.writeText(pre.innerText.trim());
    const original = button.textContent;
    button.textContent = 'Copiado';
    setTimeout(() => (button.textContent = original || 'Copiar'), 1400);
  } catch (error) {
    button.textContent = 'Erro';
    setTimeout(() => (button.textContent = 'Copiar'), 1400);
  }
};

document.querySelectorAll('.code-box > button').forEach((button) => {
  button.type = 'button';
  if (!button.getAttribute('onclick')) {
    button.addEventListener('click', () => window.copyCode(button));
  }
});

document.querySelectorAll('pre').forEach((pre) => {
  if (pre.closest('.code-box, .highlight, .code-shell')) return;

  const wrapper = document.createElement('div');
  wrapper.className = 'code-shell';
  const button = document.createElement('button');
  button.className = 'copy-code';
  button.type = 'button';
  button.textContent = 'Copiar';

  pre.parentNode.insertBefore(wrapper, pre);
  wrapper.appendChild(button);
  wrapper.appendChild(pre);
  button.addEventListener('click', () => window.copyCode(button));
});
