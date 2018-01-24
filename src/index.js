import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCLdfKqFmkGqBrHQSFFl-i5j0CcgD4or7c';

const App = () => {
  return (
    <div>
       <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
