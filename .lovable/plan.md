

## Plano: Rebranding para Zanini Duo

### Resumo
Atualizar toda a identidade visual do site: logo, cor principal, textos e meta tags.

### Alterações

**1. Logo** — Copiar o PNG enviado para `public/lovable-uploads/zanini-duo-logo.png` e atualizar referências em `Navbar.tsx`, `Footer.tsx` e `index.html` (favicon, og:image).

**2. Cor principal** (`tailwind.config.ts`) — Alterar `duo-blue` de `#002654` para `#0067B1` (Pantone 300 C do manual). Manter `duo-yellow` como cor de acento funcional.

**3. Meta tags** (`index.html`) — Substituir "Duo Automation" por "Zanini Duo" no title, description, og:title, author.

**4. Traduções** — Substituir "Duo Automation" por "Zanini Duo" e "Duo" por "Zanini Duo" (onde se refere a empresa) nos 3 arquivos:
- `pt.ts`: "Sobre a Duo" → "Sobre a Zanini Duo", "Duo Automation" → "Zanini Duo" em ~15 ocorrências
- `en.ts`: "About Duo" → "About Zanini Duo", "Duo Automation" → "Zanini Duo" em ~15 ocorrências  
- `es.ts`: "Acerca de Duo" → "Acerca de Zanini Duo", "Duo Automation" → "Zanini Duo" em ~15 ocorrências

**5. Footer.tsx** — Atualizar alt text do logo e copyright text.

**6. Navbar.tsx** — Atualizar alt text do logo e src da imagem.

### Arquivos afetados
- `public/lovable-uploads/zanini-duo-logo.png` (novo)
- `tailwind.config.ts`
- `index.html`
- `src/translations/pt.ts`
- `src/translations/en.ts`
- `src/translations/es.ts`
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`

### Nota
O produto "Duo Connect" mantém seu nome (é nome de produto, não da empresa).

