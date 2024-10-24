import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import SignUp from "./components/Auth/signUp/signUp";
import SignIn from "./components/Auth/signIn/signIn";
import User from "./components/Profile/User/user";
import Admin from "./components/Profile/Admin/admin";

function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route exact path="/signin" element={<SignIn />} />

              <Route path="/signup" element={<SignUp />} />

              <Route path="/profileuser" element={<User />} />

              <Route path="/profileadmin" element={<Admin />} />

              <Route path="*" element={<Navigate to="/signin" />}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
