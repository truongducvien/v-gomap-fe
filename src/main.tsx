import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { AuthProvider } from './hooks/useAuthContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Suspense fallback={<p>Loading ...</p>} />
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
