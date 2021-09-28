import React, { useState ,useEffect} from "react";

function People() {
  const [state, setstate] = useState({ store: [] });
  useEffect(() => {
    

    const getData = async() => {
      let url = "https://swapi.dev/api/vehicles/";
      let res = await fetch(url);
      let data = await res.json();
       console.log(data);
      setstate({store:data.results});
      
    };
    getData()
  }, []);
 

  return (
    <div>
        
      {state.store.map((element, index) => {
          return (
            <div class="card my-4">
              <div class="card-body">
                <h5 class="card-title">{element.name}</h5>
                <p class="card-text">{element.model}</p>
                <p class="card-text">{element.manufacturer}</p>
                <p class="card-text">{element.cost_in_credits}</p>
                <p class="card-text">{element.length}</p>
                
              </div>
            </div>
          );
      })}
    </div>
  );
}

export default People;
