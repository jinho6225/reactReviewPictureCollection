import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.js';

import mockCollection from './data/exampleImageData.js';
import mockOptions from './data/exampleOptions.js';

ReactDOM.render(<App collection={mockCollection}/>, document.getElementById('app'))
