import React from 'react';
import Header from'./Header';
import Home from './Home';
import MovieCard from './MovieCard'
import MovieList from './MovieList';
import {BrowserRouter, Route } from 'react-router-dom'
import MovieDetails from './MovieDetails';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <div>
          <Header></Header>
           <div className="container-fluid p-0">
            <Route path="/" exact={true} component={Home} />
            <Route path="/movies" component={MovieList} />
            <Route path="/details" component={MovieDetails} />
             </div></div>
     
      </BrowserRouter>

    </div>
  );
}

export default App;
