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
import Events from "./Events/Events";
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
      errorQuotes: "",
      errorPosts: "",
      events: [],
      eventContentES: "",
      eventContentEN: "",
      eventContentFR: "",
      urlEventPictureES: "",
      urlEventPictureEN: "",
      urlEventPictureFR: "",
      isLoadingEventPicture: false,
      errorEventPicture: ""
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

    // Setting  loaders
    this.setState({
      isLoadingQuotes: true,
      isLoadingPosts: true,
      isLoadingEventPicture: true
    });

    // ENGLISH
    // 1/3: Quotes
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
          this.setState({
            errorQuotes: "Something went wrong loading the quotes",
            isLoadingQuotes: false
          });
        }
      })
      .catch(error =>
        this.setState({ errorQuotes: error, isLoadingQuotes: false })
      );

    // ENGLISH
    // 2/3: Posts
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
          this.setState({
            errorPosts: "Something went wrong loading the posts",
            isLoadingPosts: false
          });
        }
      })
      .catch(error =>
        this.setState({ errorPosts: error, isLoadingPosts: false })
      );

    // ENGLISH
    // 3/3: Events
    axios
      .get(`https://stadium8.com/wp-json/wp/v2/posts?categories=56&per_page=1`)
      .then(response => {
        if (response.status === 200) {
          console.log(response.data[0]);
          this.setState({
            eventContentEN: response.data[0].excerpt.rendered
          });
          axios
            .get(response.data[0]._links["wp:attachment"][0].href)
            .then(response => {
              if (response.status === 200) {
                this.setState({
                  urlEventPictureEN: response.data[0].guid.rendered,
                  isLoadingEventPicture: false
                });
              } else {
                this.setState({
                  errorEventPicture: "Something went wrong loading the events",
                  isLoadingEventPicture: false
                });
              }
            })
            .catch(error =>
              this.setState({
                errorEventPicture: error,
                isLoadingEventPicture: false
              })
            );
        } else {
          this.setState({
            errorEventPicture: "Something went wrong loading the events",
            isLoadingEventPicture: false
          });
        }
      })
      .catch(error =>
        this.setState({
          errorEventPicture: error,
          isLoadingEventPicture: false
        })
      );

    // Resetting  loaders
    this.setState({
      isLoadingQuotes: true,
      isLoadingPosts: true,
      isLoadingEventPicture: true
    });

    // FRENCH
    // 1/3: Quotes
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
          this.setState({
            errorQuotes: "Something went wrong loading the quotes",
            isLoadingQuotes: false
          });
        }
      })
      .catch(error =>
        this.setState({ errorQuotes: error, isLoadingQuotes: false })
      );

    // FRENCH
    // 2/3: Posts
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
          this.setState({
            errorPosts: "Something went wrong loading the posts",
            isLoadingPosts: false
          });
        }
      })
      .catch(error =>
        this.setState({ errorPosts: error, isLoadingPosts: false })
      );

    // FRENCH
    // 3/3: Events
    axios
      .get(`https://stadium8.com/wp-json/wp/v2/posts?categories=57&per_page=1`)
      .then(response => {
        if (response.status === 200) {
          this.setState({
            eventContentFR: response.data[0].excerpt.rendered
          });
          axios
            .get(response.data[0]._links["wp:attachment"][0].href)
            .then(response => {
              if (response.status === 200) {
                this.setState({
                  urlEventPictureFR: response.data[0].guid.rendered,
                  isLoadingEventPicture: false
                });
              } else {
                this.setState({
                  errorEventPicture: "Something went wrong loading the posts",
                  isLoadingPosts: false
                });
              }
            })
            .catch(error =>
              this.setState({
                errorEventPicture: error,
                isLoadingEventPicture: false
              })
            );
        } else {
          this.setState({
            errorEventPicture: "Something went wrong loading the posts",
            isLoadingPosts: false
          });
        }
      })
      .catch(error =>
        this.setState({
          errorEventPicture: error,
          isLoadingEventPicture: false
        })
      );

    // Resetting  loaders
    this.setState({
      isLoadingQuotes: true,
      isLoadingPosts: true,
      isLoadingEventPicture: true
    });

    // SPANISH
    // 1/3: Quotes
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
          this.setState({
            errorQuotes: "Something went wrong loading the quotes",
            isLoadingQuotes: false
          });
        }
      })
      .catch(error =>
        this.setState({ errorQuotes: error, isLoadingQuotes: false })
      );

    // SPANISH
    // 2/3: Posts
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
          this.setState({
            errorPosts: "Something went wrong loading the posts",
            isLoadingPosts: false
          });
        }
      })
      .catch(error =>
        this.setState({ errorPosts: error, isLoadingPosts: false })
      );

    // SPANISH
    // 3/3: Events
    axios
      .get(`https://stadium8.com/wp-json/wp/v2/posts?categories=55&per_page=1`)
      .then(response => {
        if (response.status === 200) {
          this.setState({
            eventContentES: response.data[0].excerpt.rendered
          });
          axios
            .get(response.data[0]._links["wp:attachment"][0].href)
            .then(response => {
              if (response.status === 200) {
                this.setState({
                  urlEventPictureES: response.data[0].guid.rendered,
                  isLoadingEventPicture: false
                });
              } else {
                this.setState({
                  errorEventPicture: "Something went wrong loading the posts",
                  isLoadingPosts: false
                });
              }
            })
            .catch(error =>
              this.setState({
                errorEventPicture: error,
                isLoadingEventPicture: false
              })
            );
        } else {
          this.setState({
            errorEventPicture: "Something went wrong loading the posts",
            isLoadingPosts: false
          });
        }
      })
      .catch(error =>
        this.setState({
          errorEventPicture: error,
          isLoadingEventPicture: false
        })
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
      isLoadingQuotes,
      isLoadingPosts,
      errorQuotes,
      errorPosts,
      events,
      eventContentES,
      eventContentEN,
      eventContentFR,
      urlEventPictureES,
      urlEventPictureEN,
      urlEventPictureFR,
      isLoadingEventPicture,
      errorEventPicture
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
                    phoneNumber={phoneNumber}
                    lg={lg}
                  />
                </Route>
                <Route path="/events" component={Events}>
                  <Events
                    lg={lg}
                    urlEventPictureES={urlEventPictureES}
                    urlEventPictureEN={urlEventPictureEN}
                    urlEventPictureFR={urlEventPictureFR}
                    eventContentES={eventContentES}
                    eventContentEN={eventContentEN}
                    eventContentFR={eventContentFR}
                    isLoadingEventPicture={isLoadingEventPicture}
                    errorEventPicture={errorEventPicture}
                  />
                </Route>
                {/* 
                <Route path="/gym" component={Gym}>
                  <Gym  />
                </Route>
                <Route path="/multisport" component={Multisport}>
                  <Multisport  />
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
