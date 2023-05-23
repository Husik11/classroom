import React, { useState } from "react";

function Login() {
  const [data, setData] = useState({
    login: "",
    password: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`asdasd${data.login}, wdasdasd ${data.password}`);
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Login page </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Login
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="login"
                  value={data.login}
                  onChange={InputEvent}
                  placeholder="Enter your login"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="password"
                  value={data.password}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>              
              <div className="mb-3">
                
                <div className="col-12">
                  <button className="btn btn-outline-primary" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}


export default Login;