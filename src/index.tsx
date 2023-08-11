import React from 'react';
import ReactDOM from 'react-dom/client';

import itIT from 'antd/es/locale/it_IT';

import it from 'date-fns/locale/it';
import { setDefaultOptions } from 'date-fns';

import reportWebVitals from './reportWebVitals';

import App from './App';

setDefaultOptions({ locale: it });

itIT!.Calendar!.lang.locale! = 'it' as any;
itIT!.DatePicker!.lang.locale! = 'it' as any;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // TODO: StrictMode not working with xflow
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
