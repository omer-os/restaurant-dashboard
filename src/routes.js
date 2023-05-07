import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp';
import Layout from './containers/Layout'

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/signup" element={<SignUp/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
