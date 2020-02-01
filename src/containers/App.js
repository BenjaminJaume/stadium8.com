import React, { Component } from "react";
import i18n from "../i18n";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationBar from "../components/NavigationBar/NavigationBar";
import Footer from "../components/Footer/Footer";
import { Config } from "../components/Config/Config";

import Home from "./Home/Home";
import Football5 from "./Football5/Football5";
import Gym from "./Gym/Gym";
import Multisport from "./Multisport/Multisport";
import Events from "./Events/Events";
import Spa from "./Spa/Spa";
import Contact from "./Contact/Contact";
import Page404 from "./Page404/Page404";

const phoneNumber = "+506 8580 8585";

const absPath = Config.ABS_PATH;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lg: "en"
    };
  }

  changeLanguage = lg => {
    i18n.changeLanguage(lg);
    this.setState({
      lg
    });
  };

  render() {
    return (
      <div>
        <Router>
          <NavigationBar
            absPath={absPath}
            onClick={this.changeLanguage}
            lg={this.state.lg}
          />

          <Switch>
            <Route path="/football5" component={Football5}>
              <Football5 absPath={absPath} lg={this.state.lg} />
            </Route>
            <Route path="/gym" component={Gym}>
              <Gym absPath={absPath} lg={this.state.lg} />
            </Route>
            <Route path="/multisport" component={Multisport}>
              <Multisport absPath={absPath} lg={this.state.lg} />
            </Route>
            <Route path="/events" component={Events}>
              <Events absPath={absPath} lg={this.state.lg} />
            </Route>
            <Route path="/spa" component={Spa}>
              <Spa absPath={absPath} lg={this.state.lg} />
            </Route>
            <Route path="/contact" component={Contact}>
              <Contact absPath={absPath} lg={this.state.lg} />
            </Route>
            <Route path="/" component={Home} exact>
              <Home absPath={absPath} lg={this.state.lg} />
            </Route>
            <Route component={Page404}>
              <Page404 absPath={absPath} lg={this.state.lg} />
            </Route>
          </Switch>

          <Footer
            phoneNumber={phoneNumber}
            absPath={absPath}
            lg={this.state.lg}
          />
        </Router>
      </div>
    );
  }
}
