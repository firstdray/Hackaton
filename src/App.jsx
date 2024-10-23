import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import SignUp from "./components/Auth/signUp/signUp";
import SignIn from "./components/Auth/signIn/signIn";
import Profile from "./components/Profile/profile";

function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route exact path="/signin" element={<SignIn />} />

              <Route path="/signup" element={<SignUp />} />

              <Route path="/profile" element={<Profile />} />

              <Route path="*" element={<Navigate to="/signin" />}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
