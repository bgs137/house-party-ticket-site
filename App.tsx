import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/globals.css';

const App = () => {
  return (
    <Router>
      <div className="page-shell">
        <Navbar />
        <main className="main-content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/event/:id" component={EventDetails} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;