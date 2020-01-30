import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationBar from "../components/NavigationBar/NavigationBar";
import Footer from "../components/Footer/Footer";

import Home from "./Home/Home";
import Football5 from "./Football5/Football5";
import Gym from "./Gym/Gym";
import Multisport from "./Multisport/Multisport";
import Events from "./Events/Events";
import Spa from "./Spa/Spa";
import Contact from "./Contact/Contact";
// import PageLangue from "./Pagelangue/PageLangue";

import Page404 from "./Page404/Page404";

const phoneNumber = "+506 8580 8585";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      langue: ""
    };
  }

  render() {
    return (
      <div>
        <Router>
          <NavigationBar />

          <Switch>
            <Route path="/football5" component={Football5}>
              <Football5 langue={this.state.langue} />
            </Route>
            <Route path="/gym" component={Gym}>
              <Gym langue={this.state.langue} />
            </Route>
            <Route path="/multisport" component={Multisport}>
              <Multisport langue={this.state.langue} />
            </Route>
            <Route path="/events" component={Events}>
              <Events langue={this.state.langue} />
            </Route>
            <Route path="/spa" component={Spa}>
              <Spa langue={this.state.langue} />
            </Route>
            <Route path="/contact" component={Contact}>
              <Contact langue={this.state.langue} />
            </Route>
            <Route path="/" component={Home} exact>
              <Home langue={this.state.langue} />
            </Route>
            <Route component={Page404} />
          </Switch>

          <Footer phoneNumber={phoneNumber} />
        </Router>
      </div>
    );
  }
}
