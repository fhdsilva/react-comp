import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, useLocation, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
     <useLocation>
      <Route path="/">
        <Header/>
        <Home/>
      </Route>
      
   
   

    
    
    
      </useLocation>
    </div>
    </Router>
  );
}

export default App;
