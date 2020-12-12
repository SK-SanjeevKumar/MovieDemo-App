import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class Header extends Component {

    constructor() {
        super();
        //           this.submitHandler = this.submitHandler.bind(this)}

        this.setTextInputRef = element => {
            this.textInput = element;
        };
    }
    //    Instead of bind like this can use arrow function

    // submitHandler(event){
    //     event.preventDefault();
    //     console.log('this',this)}



    submitHandler = (event) => {
        event.preventDefault();
        let { history } = this.props;

        history.push('/movies?searchText=' + this.textInput.value)
        console.log('this', this)
    }


    render() {
        return (
            <div className="alert alert-primary bg-dark text-white mb-0"  style={{border: "none"}}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                       
                            <h4 className="text-left mt-2">
                              
                                <Link to="/" style={{ textDecoration: "none", fontWeight: "400" }}>MOVIE BROWSER</Link>
                            </h4>
                        </div>
                        <div className="col-md-6 mb-1">

                            <form onSubmit={this.submitHandler}>
                                <input type="search" ref={this.setTextInputRef}
                                    placeholder="Search Movie.."
                                    className="form-control"></input>
                            </form>
                        </div>
                        <div className="col-md-2 text-right">

                            <svg className="bi bi-person-square" width="1.5em" height="2.8em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                <path fillRule="evenodd" d="M2 15v-1c0-1 1-4 6-4s6 3 6 4v1H2zm6-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Header)