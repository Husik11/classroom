import React, { useContext, useState } from "react";
import { login } from "../../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { ADMIN_PAGE_ROUTE } from "../../utils/consts";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

const Admin = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const history = useHistory();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const signIn = async () => {
    try {
      let data = await login(username, password);
      user.setUser(user);
      user.setIsAuth(true);
      history.push(ADMIN_PAGE_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
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
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Admin
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="login"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  value={password}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <div className="col-12">
                  <button
                    className="btn btn-outline-primary"
                    type="submit"
                    onClick={login}
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
