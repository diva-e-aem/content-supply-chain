function decorateAccordion(container) {
  container.querySelectorAll('[data-item]').forEach((item) => {
    const title = item.querySelector('[data-title]');
    const content = item.querySelector('[data-content]');

    content.style.display = 'none';

    title.addEventListener('click', () => {
      content.style.display =
        content.style.display === 'none' ? 'block' : 'none';
    });
  });
}
