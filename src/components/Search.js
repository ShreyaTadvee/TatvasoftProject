import React from "react";

function Search(){
    return(
        <>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container center">
          <form className="d-flex" >
        <input className="form-control me-2" style={{width: "422px"}} type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        <button className="btn btn-outline-danger mx-2" type="submit">Cancel</button>
        
      </form>
      </div>
      </nav>
        </>
    );
}

export default Search;