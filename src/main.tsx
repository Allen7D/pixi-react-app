import { createRoot } from '@pixi/react';
import { Application } from 'pixi.js';
import App from './App.tsx';

const app = new Application({
  background: '#1099bb',
  width: 800,
  height: 600,
});

document.getElementById('root')?.appendChild(app.view as unknown as Node);

const root = createRoot(app.stage);
root.render(<App />);
