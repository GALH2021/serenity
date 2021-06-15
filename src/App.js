import React from 'react';
import './App.css';

import { Container } from 'react-bootstrap';
import { AuthProvider } from './firebase-backend/context/AuthContext';


import Signup from './firebase-backend/Signup';


import FilterForm from './questionnaire/filterForm'

function App() {
  return (
    <div className="App">
      <h1>Serenity</h1>
      <AuthProvider>
        <Container className="d-flex align-tiem-center justify-content-center">
          <div className="w-100" style={{ maxWidth: "500px"}}>
            <Signup/>
          </div>
        </Container>
      </AuthProvider>
      <FilterForm />
    </div>
  );
}

export default App;

