import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

export default async function decorate(block) {
  const footerMeta = getMetadata('footer');

  const footerPath = typeof footerMeta === 'string' && footerMeta.startsWith('/')
    ? footerMeta
    : '/content/site/footer';

  let fragment;

  try {
    fragment = await loadFragment(footerPath);
  } catch (e) {
    console.warn('Footer fragment failed to load:', footerPath, e);
    return;
  }

  if (!fragment || !fragment.firstElementChild) {
    return;
  }

  block.textContent = '';

  const footer = document.createElement('div');

  while (fragment.firstElementChild) {
    footer.append(fragment.firstElementChild);
  }

  block.append(footer);
}
