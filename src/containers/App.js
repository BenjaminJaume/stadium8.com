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

const absPath = Config.ABS_PATH;
const phoneNumber = "+506 8580 8585";
const email = "stadiumrc@gmail.com";

const footballDetails = {
  morning: {
    price: {
      colones: "10,000",
      dollars: "20"
    },
    hourFrom: "08",
    minuteFrom: "00",
    hourTo: "12",
    minuteTo: "00"
  },
  afternoon: {
    price: {
      colones: "15,000",
      dollars: "30"
    },
    hourFrom: "12",
    minuteFrom: "00",
    hourTo: "17",
    minuteTo: "00"
  },
  night: {
    price: {
      colones: "20,000",
      dollars: "40"
    },
    hourFrom: "17",
    minuteFrom: "00",
    hourTo: "22",
    minuteTo: "00"
  }
};

const quotesPerPage = 5;
const postsPerPage = 3;

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
    const { lg } = this.state;

    return (
      <div>
        <Router>
          <NavigationBar
            absPath={absPath}
            onClick={this.changeLanguage}
            lg={lg}
          />

          <Switch>
            <Route path="/football5" component={Football5}>
              <Football5 absPath={absPath} footballDetails={footballDetails} />
            </Route>
            <Route path="/gym" component={Gym}>
              <Gym absPath={absPath} />
            </Route>
            <Route path="/multisport" component={Multisport}>
              <Multisport absPath={absPath} />
            </Route>
            <Route path="/events" component={Events}>
              <Events absPath={absPath} />
            </Route>
            <Route path="/spa" component={Spa}>
              <Spa absPath={absPath} />
            </Route>
            <Route path="/contact" component={Contact}>
              <Contact absPath={absPath} email={email} />
            </Route>
            <Route path="/" component={Home} exact>
              <Home
                absPath={absPath}
                lg={lg}
                quotesPerPage={quotesPerPage}
                postsPerPage={postsPerPage}
              />
            </Route>
            <Route component={Page404}>
              <Page404 absPath={absPath} />
            </Route>
          </Switch>

          <Footer phoneNumber={phoneNumber} absPath={absPath} lg={lg} />
        </Router>
      </div>
    );
  }
}
