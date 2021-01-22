import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigationbar from './Components/Navbar';
import Footer from "./Components/Footer";
import Home from './Home';

function App() {
  return (
    <div>
      <Navigationbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
