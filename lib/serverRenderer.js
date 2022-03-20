import React from 'react';
import ReactDomServer from 'react-dom/server';

import App from './components/App.js';

const serverRenderer = () => {
    return ReactDomServer.renderToString(<App />);
};

export default serverRenderer;