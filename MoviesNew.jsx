import React, { Component } from 'react'
import MoviesCard from './MoviesCard';

export default class MoviesNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
    };
  }
  async componentDidMount() {
    let url = "https://swapi.dev/api/films/";
    let data = await fetch(url);
    let NewData = await data.json();
    console.log(NewData);
    // console.log(NewData.results[1]);
    this.setState({ movie: NewData.results });
  }


  render() {
    return (
      <div className="container my-3">
        <div className="row">
          {this.state.movie.map((elements, index) => {
            return (
              <div className="col-md-4" key={index}>
                <MoviesCard
                  title={elements.title}
                  description={elements.opening_crawl}
                  director={elements.director}
                  AbouClickHandle={this.HandleClick}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
