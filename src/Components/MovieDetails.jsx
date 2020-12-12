import React, { Component } from 'react';
import Axios from 'axios';
import queryString from 'query-string'

class MovieDetails extends Component {

    state = { movie: {} }

    componentDidMount() {
        this.fetchMovies();
        console.log(this.props)
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.fetchMovies();
        }
    }

    fetchMovies = () => {
        let q = queryString.parse(this.props.location.search)
        Axios.get(`http://www.omdbapi.com/?&apikey=8213ab72&i=${q.imdbID}`)
            .then(resp => resp.data)
            .then(movies => this.setState({ movie: movies }))
    }
         
    render() {
        let {movie} = this.state;
        let Output = <div>
             <img src='5.gif' alt="Loading" style={{position:'absolute', top:'50%' , left:'50%'}}/>
        </div>
        if(movie && Object.keys(movie).length > 0){
           Output = <div>

           <div className="row">
               <div className="col-md-4 text-center mb-2">
                   <img src={movie.Poster} alt="movie Poster" className="img img-thumbnail"></img>     
                                </div>
               <div className="col-md-8 table-responsive">
                    {<h1 className="text-white mb-4">{movie.Title}</h1> }
               <table className="table table-striped table-dark">
              <tbody>
                  <tr>
                      <td>Director</td>
                      <td>{movie.Director}</td>
                  </tr>
                  <tr>
                      <td>Plot</td>
                      <td>{movie.Plot}</td>
                  </tr>
                  <tr>
                      <td>Year</td>
                      <td>{movie.Year}</td>
                  </tr>
                  <tr>
                      <td>Language</td>
                      <td>{movie.Language}</td>
                  </tr>
                  <tr>
                      <td>Awards</td>
                      <td>{movie.Awards}</td>
                  </tr>
                  <tr>
                      <td>Writer</td>
                      <td>{movie.Writer}</td>
                  </tr>
                  <tr>
                      <td>Genre</td>
                      <td>{movie.Genres}</td>
                  </tr>
                  <tr>
                      <td>Actors</td>
                      <td>{movie.Actors}</td>
                  </tr>
                  <tr>
                      <td>Box Office</td>
                      <td>{movie.BoxOffice}</td>
                  </tr>
                  <tr>
                      <td>Released</td>
                      <td>{movie.Released}</td>
                  </tr>
                  </tbody> 

               </table>
               <button type="button" className="btn btn-primary mb-5" onClick={ () =>this.props.history.go(-1)}>Back</button>
           </div>
           </div>
          
            
       </div>
        }
        return Output
          
        
    }
}


export default MovieDetails;


