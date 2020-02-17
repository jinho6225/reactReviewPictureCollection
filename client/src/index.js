
import React from 'react';
import { render } from 'react-dom';

import App from './components/App.js';

import mockCollection from './data/exampleImageData.js';
import mockOptions from './data/exampleOptions.js';

render(<App collection={mockCollection} options={mockOptions} />, document.getElementById('app'));
