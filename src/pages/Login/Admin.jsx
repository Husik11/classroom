import React, { useContext, useState } from "react";
import { login } from "../../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { ADMIN_PAGE_ROUTE } from "../../utils/consts";
import { useHistory } from "react-router-dom";

const Admin = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const click = async (e) => {
    console.log(111111111111);
    e.preventDefault();
    try {
      let data = await login(username, password);
      console.log(data);
      user.setUser(data);
      user.setIsAuth(true);
      history.push(ADMIN_PAGE_ROUTE);
    } catch (e) {
      console.log(e);
      // alert(e.response.data.message);
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
            <form>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="login"
                  value={username}
                  autoComplete="username"
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your login"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleFormControlInput2"
                  name="password"
                  value={password}
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-3">
                <div className="col-12">
                  <button
                    className="btn btn-outline-primary"
                    type="submit"
                    onClick={click}
                  >
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
});

export default Admin;
