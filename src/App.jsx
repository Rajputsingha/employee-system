import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboear";
import { getLocalStrage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/Authprovider";


const App = () => {
const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    fetch('/message')
      .then((res) => res.json())
      .then((data) => console.log(data.message));
  }, []);
  

  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        setUser(loggedInUser.role);
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (
      authData &&
      authData.emplmoyees.find((e) => email == e.email && e.password == password)
    ) {
      setUser("employee");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee" })
      );
    } else {
      alert("Invailid credential");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : " "}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
}
export default App;
