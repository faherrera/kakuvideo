import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import MovieContainer from './screens/movies/container/MoviesContainer';

ReactDOM.render(<MovieContainer/>, document.getElementById('root'));
registerServiceWorker();
