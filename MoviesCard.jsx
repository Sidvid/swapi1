import React from "react";

function MoviesCard(props) {
    const  AboutClickHandler=()=>{
        alert()
    }


  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        {/* <img src={props.url} className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h3 className="card-title">{props.title}</h3>
          <p className="card-text">
            Movie Name is:
            {props.description}
          </p>
          <h5>
            Directed By : <p>{props.director}</p>
          </h5>
          <a href="/" onClick={AboutClickHandler} className="btn btn-primary">
            About Movie
          </a>
        </div>
      </div>
    </div>
  );
}

export default MoviesCard;
