const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--open');
  });
}

document.querySelectorAll('pre').forEach((pre) => {
  if (pre.parentElement && pre.parentElement.classList.contains('highlight')) return;
  const wrapper = document.createElement('div');
  wrapper.className = 'code-shell';
  const button = document.createElement('button');
  button.className = 'copy-code';
  button.type = 'button';
  button.textContent = 'Copiar';
  pre.parentNode.insertBefore(wrapper, pre);
  wrapper.appendChild(button);
  wrapper.appendChild(pre);

  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(pre.innerText);
      button.textContent = 'Copiado';
      setTimeout(() => (button.textContent = 'Copiar'), 1400);
    } catch (error) {
      button.textContent = 'Erro';
      setTimeout(() => (button.textContent = 'Copiar'), 1400);
    }
  });
});
