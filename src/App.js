import React from "react";

import "./App.css";
import datafile from "./resource-pages/datafile";
import { Route, Switch } from "react-router-dom";
import Resources from "./resource-pages/Resources";
import SingleResource from "./resource-pages/SingleResource";

import { Container } from "react-bootstrap";
import { AuthProvider } from "./firebase-backend/context/AuthContext";

import Signup from "./firebase-backend/Signup";

import FilterForm from "./questionnaire/filterForm";

function App() {
  return (
    <div className="App">
      <h1>Serenity</h1>

      <AuthProvider>
        <Container className="d-flex align-tiem-center justify-content-center">
          <div className="w-100" style={{ maxWidth: "500px" }}>
            <Signup />
          </div>
        </Container>
      </AuthProvider>
      <FilterForm />
      <Switch>
        <Route exact path="/">
          <Resources />
        </Route>

        <Route
          path="/resource/:id"
          render={(routerProps) => (
            <SingleResource {...routerProps} resourceData={datafile} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
