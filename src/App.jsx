import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import SignUp from "./components/Auth/signUp/signUp";
import SignIn from "./components/Auth/signIn/signIn";

function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route exact path="/" element={<SignIn />} />

              <Route path="/signup" element={<SignUp />} />

              <Route path="*" element={<Navigate to="/" />}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
