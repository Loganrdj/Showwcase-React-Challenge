import React from 'react';
import './App.css';
// import styled from "styled-components";
import { InputForm } from "./components/inputForm"
import { BrowserRouter as Router, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" component={InputForm}></Route>
          {/* <Route exact={true} path="/profile" component={Profile}></Route> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
