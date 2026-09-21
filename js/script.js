'use strict';
document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
if (menuButton && navigation) {
  menuButton.hidden = false;
  const closeMenu = () => { navigation.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); };
  menuButton.addEventListener('click', () => { const open = navigation.classList.toggle('is-open'); menuButton.setAttribute('aria-expanded', String(open)); });
  navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('is-open')) { closeMenu(); menuButton.focus(); } });
  document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
  matchMedia('(min-width: 701px)').addEventListener('change', closeMenu);
}
const filters = document.querySelector('.filters');
if (filters) {
  filters.hidden = false;
  const search = document.querySelector('#project-search');
  const searchPanel = document.querySelector('.project-search');
  if (searchPanel) searchPanel.hidden = false;
  const projects = [...document.querySelectorAll('.project')];
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const searchable = new Map(projects.map(project => [project, normalize(project.textContent)]));
  let category = 'all';
  const applyFilters = () => {
    const term = normalize(search ? search.value.trim() : '');
    projects.forEach(project => {
      project.hidden = (category !== 'all' && project.dataset.category !== category) || !searchable.get(project).includes(term);
    });
    const count = projects.filter(project => !project.hidden).length;
    document.querySelector('#project-count').textContent = count + (count === 1 ? ' projeto selecionado' : ' projetos selecionados');
    document.querySelector('#project-empty').hidden = count > 0;
  };
  filters.querySelector('[data-filter="all"] span').textContent = String(projects.length).padStart(2, '0');
  filters.addEventListener('click', event => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    category = button.dataset.filter;
    filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    applyFilters();
  });
  if (search) search.addEventListener('input', applyFilters);
  applyFilters();
}
const copyButton = document.querySelector('.copy-email');
if (copyButton && navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    const status = document.querySelector('#copy-status');
    try { await navigator.clipboard.writeText('hugoaurelianovictor@gmail.com'); status.textContent = 'E-mail copiado. Vamos conversar!'; }
    catch { status.textContent = 'Não foi possível copiar. Selecione o endereço acima para copiá-lo.'; }
  });
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
const printButton = document.querySelector('#print-resume');
if (printButton) { printButton.hidden = false; printButton.addEventListener('click', () => window.print()); }
if ('IntersectionObserver' in window && navigation) {
  const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { navigation.querySelectorAll('a').forEach(link => { if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); }); } }); }, { rootMargin: '-15% 0px -50% 0px' });
  document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
}
