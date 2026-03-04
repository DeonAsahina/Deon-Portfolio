import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Saya hapus ".tsx" di sini agar komputer tidak bingung
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
