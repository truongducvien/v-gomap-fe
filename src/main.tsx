import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { AuthProvider } from './hooks/context/useAuthContext.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Suspense fallback={<p>Loading ...</p>} />
    <AuthProvider>
      <ToastContainer />
      <App />
    </AuthProvider>
  </BrowserRouter>
);
