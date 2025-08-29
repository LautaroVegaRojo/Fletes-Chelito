import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // <-- Solo importamos el CSS
import AnimatedCustomNavbar from './components/AnimatedCustomNavbar.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AnimatedCustomNavbar/>
    
    <App />
    
  </React.StrictMode>,
);