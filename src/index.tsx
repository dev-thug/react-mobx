import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import { RootStore } from './states/RootStore';
import { StoreProvider } from './states/Context';

const rootStore = new RootStore();

ReactDOM.render(
  <StoreProvider value={rootStore}>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);


