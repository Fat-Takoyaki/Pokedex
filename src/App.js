import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import {HashRouter as Router, Route, Switch} from "react-router-dom"

//components
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Pokemon from "./components/Pokemon"

//views
import Dashboard from "./views/Dashoboard";
import FirstGen from "./views/FirstGen"
import SecondGen from "./views/SecondGen"
import ThirdGen from "./views/ThirdGen"
import FourthGen from "./views/FourthGen"
import FifthGen from "./views/FifthGen"
import SixthGen from "./views/SixthGen"
import SeventhGen from "./views/SeventhGen"

function App() {
  return (
      <Router>
            <div className="App">
              <Navigation/>
                  <div className="container">
                      <Switch>
                          <Route exact path="/" component={Dashboard} />
                          <Route exact path="/first-gen" component={FirstGen} />
                          <Route exact path="/second-gen" component={SecondGen} />
                          <Route exact path="/third-gen" component={ThirdGen} />
                          <Route exact path="/fourth-gen" component={FourthGen} />
                          <Route exact path="/fifth-gen" component={FifthGen} />
                          <Route exact path="/sixth-gen" component={SixthGen} />
                          <Route exact path="/seventh-gen" component={SeventhGen} />
                          <Route exact path="/:pokemonIndex" component={Pokemon}/>
                      </Switch>
                  </div>
            </div>
          <Footer />
      </Router>
  );
}

export default App;
