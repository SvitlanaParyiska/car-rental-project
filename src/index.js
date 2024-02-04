import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from 'components/Loader';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <BrowserRouter basename="/car-rental-project">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
  //  </React.StrictMode>
);
