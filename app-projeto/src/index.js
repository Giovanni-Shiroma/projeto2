import React from 'react';
import ReactDOM from 'react-dom';
import App from './componentes/List';
import reportWebVitals from './reportWebVitals';
import Modal from './componentes/modal'

// RENDERIZAR FUNÇÃO APP DA PASTA COMPONENTES/LIST
ReactDOM.render(
  <React.StrictMode>
    <App></App>
    </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

