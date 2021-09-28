import React, { useState } from 'react'
import Login from './Login';
import MoviesNew from './MoviesNew';

function Signin() {
    const [state, setstate] = useState({
        name:"",
        email:"",
        password:"",
        isSubmit:false
    })
     const handleSubmit = async (event) => {
       event.preventDefault();
       let url =
         "https://logicwind-81d2b-default-rtdb.firebaseio.com/data.json";
       const response = await fetch(url, {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({ state }),
       });
       setstate({isSubmit:true})
     };

    const changeHandler =  (event) => {
      console.log(event.target.value);
      const name = event.target.name;
      const value = event.target.value;
      setstate({
        ...state,
        [name]: value,
      });
    //   const {Name,Email,Password}=state;
      

    };
    return (
      <div>
        <>
          <form onSubmit={handleSubmit} method="POST">
            <h1>Sign-up</h1>
            <div className="name">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Name
                </label>
                <input
                  value={state.name}
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="email">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  value={state.email}
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="password">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Password
                </label>
                <input
                  value={state.password}
                  name="password"
                  type="password"
                  className="form-control"
                  onChange={changeHandler}
                />
              </div>
            </div>
            <button type="submit">Signup</button>
          </form>
        </>
        {!state.isSubmit?<MoviesNew/>:<Login/>}
      </div>
    );
}

export default Signin
