import React ,{Link} from 'react'


function Navbar() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              SWAPI
            </Link>
           
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="/MoviesNews">
                  FILMS
                </Link>
                <Link className="nav-link" to="/People">
                  People
                </Link>
                
               
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Navbar
