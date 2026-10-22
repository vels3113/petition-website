'use strict';
(() => {
  const c = window.SITE_CONTENT;
  if (!c) return;
  document.querySelectorAll('[data-text]').forEach(el => { el.textContent = c[el.dataset.text] ?? ''; });
  for (const [selector, attribute, key] of [['[data-placeholder]', 'placeholder', 'placeholder'], ['[data-aria]', 'aria-label', 'aria'], ['[data-meta]', 'content', 'meta']]) {
    document.querySelectorAll(selector).forEach(el => el.setAttribute(attribute, c[el.dataset[key]] ?? ''));
  }
  document.querySelectorAll('[data-list]').forEach(el => {
    const tag = el.dataset.item === 'li' ? 'li' : 'p';
    el.replaceChildren(...(c[el.dataset.list] ?? []).map(text => { const item = document.createElement(tag); item.textContent = text; return item; }));
  });
  document.getElementById('signers').replaceChildren(...c.signers.map(entry => {
    const li = document.createElement('li');
    const name = document.createElement('strong'); name.textContent = entry.name;
    const note = document.createElement('span'); note.textContent = entry.note;
    li.append(name, note); return li;
  }));
  document.getElementById('status-options').replaceChildren(...c.statusOptions.map(entry => {
    const option = document.createElement('option'); option.value = entry.value; option.textContent = entry.label; return option;
  }));
  const email = document.getElementById('organizers-email');
  email.setAttribute('href', 'mailto:' + c.organizersEmail);
  if (c.heroImage) {
    const url = new URL(c.heroImage, document.baseURI);
    if (url.origin === location.origin) {
      const image = new Image();
      image.onload = () => {
        const hero = document.querySelector('.hero');
        hero.style.setProperty('--hero-image', 'url(' + JSON.stringify(url.href) + ')');
        hero.classList.add('has-photo');
      };
      image.src = url.href;
    }
  }
  document.getElementById('demo-form').addEventListener('submit', event => event.preventDefault());
  document.getElementById('demo-button').addEventListener('click', () => { document.getElementById('demo-status').textContent = c.demoMessage; });
  document.getElementById('share').addEventListener('click', async () => {
    const status = document.getElementById('share-status');
    try { await navigator.clipboard.writeText(location.href.split('#')[0]); status.textContent = c.shareSuccess; }
    catch { status.textContent = c.shareFailure; }
  });
})();
