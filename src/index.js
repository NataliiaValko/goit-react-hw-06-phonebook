import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import persistedStore from './redux/store';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import App from './components/App';

render(
  <StrictMode>
    <Provider store={persistedStore.store}>
      <PersistGate loading={null} persistor={persistedStore.persist}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
