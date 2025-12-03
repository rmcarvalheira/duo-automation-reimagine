export const PRODUCT_CONFIG = {
  roboSlim: { enabled: true, slug: 'robo-slim', navbarKey: 'roboSlim' },
  roboEva: { enabled: false, slug: 'robo-eva', navbarKey: 'roboEva' },  // ← Mudar para true quando quiser mostrar
  duoConnect: { enabled: true, slug: 'duo-connect', navbarKey: 'duoConnect' },
  roboPicker: { enabled: true, slug: 'robo-picker', navbarKey: 'roboPicker' },
} as const;

export type ProductKey = keyof typeof PRODUCT_CONFIG;

// Helper para verificar se produto está ativo pelo slug
export const isProductEnabled = (slug: string): boolean => {
  const product = Object.values(PRODUCT_CONFIG).find(p => p.slug === slug);
  return product?.enabled ?? false;
};

// Lista de produtos ativos
export const getEnabledProducts = () => 
  Object.entries(PRODUCT_CONFIG)
    .filter(([_, config]) => config.enabled)
    .map(([key, config]) => ({ key: key as ProductKey, ...config }));

// Lista de slugs de produtos ativos
export const getEnabledProductSlugs = (): string[] =>
  Object.values(PRODUCT_CONFIG)
    .filter(config => config.enabled)
    .map(config => config.slug);
