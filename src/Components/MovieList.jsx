import React,{Component} from 'react'
import MovieCard from './MovieCard'
import Axios from 'axios';
import queryString from 'query-string';

class MovieList extends Component{
//   constructor(){
//       super()
            
        state = { movies: [] }
    // }

    componentDidMount(){
    this.fetchMovies();
    console.log(this.props)
   }


    componentDidUpdate(prevProps){
     if(this.props.location !== prevProps.location){
        this.fetchMovies();
     }
    }
   
    fetchMovies = () => {
    let q = queryString.parse(this.props.location.search)
    Axios.get(`http://www.omdbapi.com/?&apikey=8213ab72&s=${q.searchText}`)
    .then(resp => resp.data)
    .then(data => data.Search)
    .then(movie=> this.setState({movies : movie}))
   }


      
    render(){
     
     const MovieList = this.state.movies.map((m, index) => <MovieCard movie = {m} key={index}  className="position-relative"/>)
    
    return(
         <div className="row">
             
       {MovieList}
       </div>
        )}
}

export default MovieList;