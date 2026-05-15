export function renderAccordion({ items = [] }) {
  const container = document.createElement('div');

  container.className = 'accordion';

  container.innerHTML = items
    .map(
      (item) => `
      <div class="accordion-item">
        <div class="accordion-title">${item.title}</div>
        <div class="accordion-content">${item.content}</div>
      </div>
    `,
    )
    .join('');

  return container;
}

export function decorateAccordion(container) {
  const items = container.querySelectorAll('.accordion-item');

  items.forEach((item) => {
    const title = item.querySelector('.accordion-title');
    const content = item.querySelector('.accordion-content');

    content.style.display = 'none';

    title.addEventListener('click', () => {
      const isOpen = content.style.display === 'block';

      content.style.display = isOpen ? 'none' : 'block';
    });
  });
}
