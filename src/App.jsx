import React from "react";
import { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Admin from "./components/Login/Admin";
import AdminPage from "./components/AdminPage/AdminPage";
import Footer from "./components/Footer/Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import authService from "./services/auth.service";

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    authService.logout();
  };
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/adminPage" component={AdminPage} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
