import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './scripts/serviceWorker';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html, body, #root {
        width: 100%;
        height: 100%;
    }

    body {
        margin: 0;
    }

    * {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 20pt;
        color: #dddddd;
    }

    *, *:after, *:before {
        box-sizing: border-box;
    }

    a {
        color: #dddddd;
    }
`
ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
