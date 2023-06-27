import React, { useContext, useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./pages/Navbar/Navbar";
import Footer from "./pages/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { observer } from "mobx-react-lite";
import { Context } from ".";
import { check } from "./http/userAPI";
import Spinner from "react-bootstrap/Spinner";

const App = observer(() => {
  // const { user } = useContext(Context);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     check()
  //       .then((data) => {
  //         const isAuthenticated = Boolean(data); // Determine authentication status based on data
  //         user.setUser(data); // Set the user object with the received data
  //         user.setIsAuth(isAuthenticated); // Set the authentication status
  //       })
  //       .finally(() => setLoading(false));
  //   }, 1000);
  // }, [user]);

  // if (loading) {
  //   return (
  //     <>
  //       <Spinner animation={"grow"} />
  //     </>
  //   );
  // }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </>
  );
});

export default App;
