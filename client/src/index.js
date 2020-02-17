import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.js';

import mockCollection from './data/exampleImageData.js';

ReactDOM.render(<App collections={mockCollection} />, document.getElementById('app'))
