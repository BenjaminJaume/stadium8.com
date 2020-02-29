import React, { Component, Suspense } from "react";
import i18n from "../i18n";
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import NavigationBar from "../components/NavigationBar/NavigationBar";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { getEvents } from "../components/GoogleCalendar/fetch";

import Home from "./Home/Home";
import Soccer5 from "./Soccer5/Soccer5";
// import Gym from "./Gym/Gym";
// import Multisport from "./Multisport/Multisport";
// import Events from "./Events/Events";
// import Spa from "./Spa/Spa";
import Contact from "./Contact/Contact";
import Page404 from "./Page404/Page404";

const phoneNumber = "+506 8580 8585";
const email = "contact@stadium8.com";

const openingHours = {
  weekDay: {
    open: new Date().setHours(6, 0),
    close: new Date().setHours(22, 0)
  },
  weekEnd: {
    open: new Date().setHours(8, 0),
    close: new Date().setHours(22, 0)
  }
};

const footballDetails = {
  morning: {
    price: {
      colones: "12,000",
      dollars: "20"
    },
    from: new Date().setHours(8, 0),
    to: new Date().setHours(12, 0)
  },
  afternoon: {
    price: {
      colones: "16,000",
      dollars: "30"
    },
    from: new Date().setHours(12, 0),
    to: new Date().setHours(17, 0)
  },
  night: {
    price: {
      colones: "20,000",
      dollars: "40"
    },
    from: new Date().setHours(17, 0),
    to: new Date().setHours(22, 0)
  }
};

const quotesPerPage = 5;
const postsPerPage = 3;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lg: "en",
      quotesES: [],
      quotesEN: [],
      quotesFR: [],
      postsES: [],
      postsEN: [],
      postsFR: [],
      isLoadingQuotes: false,
      isLoadingPosts: false,
      errorQuotes: null,
      errorPosts: null,
      events: [],
      errorEvents: null
    };
  }

  changeLanguage = lg => {
    i18n.changeLanguage(lg);
    this.setState({
      lg
    });
  };

  componentDidMount() {
    setTimeout(() => {
      this.changeLanguage(i18n.language);
    }, 500);

    this.setState({ isLoadingQuotes: true, isLoadingPosts: true });
    // English
    // Quotes
    axios
      .get(
        `https://stadium8.com/wp-json/wp/v2/posts?categories=51&per_page=${quotesPerPage}`
      )
      .then(response => {
        if (response.status === 200) {
          this.setState({
            quotesEN: response.data,
            isLoadingQuotes: false
          });
        } else {
          throw new Error("Something went wrong with Quotes");
        }
      })
      .catch(error =>
        this.setState({ errorQuotes: error, isLoadingQuotes: false })
      );
    // Posts
    axios
      .get(
        `https://stadium8.com/wp-json/wp/v2/posts/?categories=53&per_page=${postsPerPage}`
      )
      .then(response => {
        if (response.status === 200) {
          this.setState({
            postsEN: response.data,
            isLoadingPosts: false
          });
        } else {
          throw new Error("Something went wrong with Posts");
        }
      })
      .catch(error =>
        this.setState({ errorPosts: error, isLoadingPosts: false })
      );

    this.setState({ isLoadingQuotes: true, isLoadingPosts: true });
    // French
    // Quotes
    axios
      .get(
        `https://stadium8.com/wp-json/wp/v2/posts?categories=47&per_page=${quotesPerPage}`
      )
      .then(response => {
        if (response.status === 200) {
          this.setState({
            quotesFR: response.data,
            isLoadingQuotes: false
          });
        } else {
          throw new Error("Something went wrong with Quotes");
        }
      })
      .catch(error =>
        this.setState({ errorQuotes: error, isLoadingQuotes: false })
      );

    // Posts
    axios
      .get(
        `https://stadium8.com/wp-json/wp/v2/posts/?categories=48&per_page=${postsPerPage}`
      )
      .then(response => {
        if (response.status === 200) {
          this.setState({
            postsFR: response.data,
            isLoadingPosts: false
          });
        } else {
          throw new Error("Something went wrong with Posts");
        }
      })
      .catch(error =>
        this.setState({ errorPosts: error, isLoadingPosts: false })
      );

    this.setState({ isLoadingQuotes: true, isLoadingPosts: true });
    // Spanish
    // Quotes
    axios
      .get(
        `https://stadium8.com/wp-json/wp/v2/posts?categories=52&per_page=${quotesPerPage}`
      )
      .then(response => {
        if (response.status === 200) {
          this.setState({
            quotesES: response.data,
            isLoadingQuotes: false
          });
        } else {
          throw new Error("Something went wrong with Quotes");
        }
      })
      .catch(error =>
        this.setState({ errorQuotes: error, isLoadingQuotes: false })
      );

    // Posts
    axios
      .get(
        `https://stadium8.com/wp-json/wp/v2/posts/?categories=54&per_page=${postsPerPage}`
      )
      .then(response => {
        if (response.status === 200) {
          this.setState({
            postsES: response.data,
            isLoadingPosts: false
          });
        } else {
          throw new Error("Something went wrong with Posts");
        }
      })
      .catch(error =>
        this.setState({ errorPosts: error, isLoadingPosts: false })
      );

    getEvents(events => {
      this.setState({ events });
    });
  }

  render() {
    const {
      lg,
      quotesES,
      quotesEN,
      quotesFR,
      postsES,
      postsEN,
      postsFR,
      isLoadingPosts,
      isLoadingQuotes,
      errorQuotes,
      errorPosts,
      events,
      errorEvents
    } = this.state;

    return (
      <div>
        <BrowserRouter>
          <Router>
            <Suspense fallback={""}>
              <ScrollToTop />
              <NavigationBar onClick={this.changeLanguage} lg={lg} />
              <Switch>
                <Route path="/soccer5" component={Soccer5}>
                  <Soccer5
                    footballDetails={footballDetails}
                    events={events}
                    errorEvents={errorEvents}
                    phoneNumber={phoneNumber}
                    lg={lg}
                  />
                </Route>
                {/* <Route path="/gym" component={Gym}>
                  <Gym  />
                </Route>
                <Route path="/multisport" component={Multisport}>
                  <Multisport  />
                </Route>
                <Route path="/events" component={Events}>
                  <Events  />
                </Route>
                <Route path="/spa" component={Spa}>
                  <Spa  />
                </Route> */}
                <Route path="/contact" component={Contact}>
                  <Contact email={email} />
                </Route>
                <Route path="/" component={Home} exact>
                  <Home
                    lg={lg}
                    quotesES={quotesES}
                    quotesEN={quotesEN}
                    quotesFR={quotesFR}
                    postsES={postsES}
                    postsEN={postsEN}
                    postsFR={postsFR}
                    isLoadingPosts={isLoadingPosts}
                    isLoadingQuotes={isLoadingQuotes}
                    errorPosts={errorPosts}
                    errorQuotes={errorQuotes}
                    phoneNumber={phoneNumber}
                  />
                </Route>
                <Route component={Page404}>
                  <Page404 />
                </Route>
              </Switch>
              <Footer
                phoneNumber={phoneNumber}
                openingHours={openingHours}
                email={email}
                lg={lg}
              />
            </Suspense>
          </Router>
        </BrowserRouter>
      </div>
    );
  }
}
