import { createRoot } from 'react-dom/client';

import { MainProvider } from '@/providers';

createRoot(document.getElementById('root') as HTMLElement).render(
  <MainProvider />
);
