import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import authService from "../../services/auth.service"; 

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await authService.login(email, password).then(
        () => {
          navigate("/adminPage");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Admin page </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={handleLogin}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Admin 
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="login"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your login"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="name@example.com"
                />
              </div>              
              <div class="mb-3">
                
                <div class="col-12">
                  <button class="btn btn-outline-primary" type="submit">
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

export default Admin;