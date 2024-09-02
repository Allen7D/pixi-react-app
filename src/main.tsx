import { createRoot } from '@pixi/react';
import { Application } from 'pixi.js';
import { initDevtools } from '@pixi/devtools';

import App from './App.tsx';

const app = new Application({
  background: '#1099bb',
  width: 800,
  height: 600,
});

if (import.meta.env.DEV) {
  // pixi 调试工具(Chrome)
  initDevtools({ app });
}

document.getElementById('root')?.appendChild(app.view as unknown as Node);

const root = createRoot(app.stage);
root.render(<App />);
