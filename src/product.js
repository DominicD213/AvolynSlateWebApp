export const SITE_ROOT = import.meta.env.BASE_URL;
export const PAGE_LINKS = [
  { id: 'about', label: 'About Slate', path: '' },
  { id: 'specs', label: 'Specs', path: 'specs/' },
  { id: 'faq', label: 'FAQs', path: 'faq/' },
  { id: 'updates', label: 'Updates', path: 'updates/' },
];
export const pageHref = id => SITE_ROOT + (PAGE_LINKS.find(page => page.id === id)?.path ?? '');
export const PRODUCT = {
  priceUsd: null,
  pricePending: 'Pricing to be announced',
  launch: 'Launch date to be announced',
  matSize: '800 × 350 mm',
  displaySize: '5.79 inches',
  resolution: '792 × 272 pixels',
  chargingRating: '15 W module rating',
};
