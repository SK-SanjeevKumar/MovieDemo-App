import React from 'react'
import { withRouter } from 'react-router-dom';

//const movie = {"Title":"Iron Man","Year":"2008","imdbID":"tt0371746","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"}
const MovieCard = (props) => {
    let m = props.movie;


    let style = {
        width: '300px', display: 'inline-block', margin: '50px 0 20px 0', height: '570px',
        border: 'none', boxShadow: '10px 10px 10px 0px', 
    }


    const getMovieDetails = (imdbID) => {

        props.history.push('/details?imdbID=' + imdbID)
    }

    return (
        <div className="col-md-4 text-center mb-4" onClick={() => getMovieDetails(m.imdbID)}>
            <div className="card" style={style}>
                <img className="card-img-top" aria-hidden src={m.Poster} alt="Card image cap" />
                <div className="card-body" style={{backgroundColor: "#ccc"}}>
                    <h5 className="card-title">{m.Title}</h5>
                    <p className="card-text">{m.Year}</p>
                    <p className="card-text"><small className="text-muted">{m.Year}</small></p>
                </div>
            </div>
        </div>



    )
}

export default withRouter(MovieCard)