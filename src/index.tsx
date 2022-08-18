import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {createGlobalStyle} from 'styled-components'
import { Provider } from 'react-redux';
import {store} from './store/store'

const Global = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  #root, body, html{
    width: 100%;
    height: 100%;
    font-family: 'Poppins', sans-serif;
  }
  img{
    pointer-events: none;
  }
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App/>
    <Global/>
  </Provider>
);