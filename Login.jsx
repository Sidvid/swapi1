import React,{useEffect, useState} from 'react'
import MoviesNew from './MoviesNew'
import Signin from './Signin'

function Login() {

    const [login, setLogin] = useState(null)
    const [state, setstate] = useState({
        email:"",
        password:"",
        isSubmit:false
    })



    useEffect(() => {
        const  getData=async(event)=>{
            let url =
              "https://logicwind-81d2b-default-rtdb.firebaseio.com/data.json";
            let res=await fetch(url)
            const data=await res.json()
            setLogin(data)
   }
    }, [])

 const changeHandler =  (event) => {
      console.log(event.target.value);
      const name = event.target.name;
      const value = event.target.value;
      setstate({
        ...state,
        [name]: value,
      });}




   
   const handleSubmit=()=>{
     alert("login")
     setstate({isSubmit:true})
   }

    return (
      <div>
        <div>
          <>
            <form onSubmit={handleSubmit} method="GET">
              <h1>Sign-up</h1>
              
              
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
              <button type="submit">Login</button>
            </form>
          </>
        </div>

        
        
      </div>

    );
}

export default Login
