import React, { Component } from "react";
import axios from "axios";
import { HollowDotsSpinner } from "react-epic-spinners";
import CarouselQuotes from "../../components/CarouselQuotes/CarouselQuotes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotesES: [],
      quotesEN: [],
      quotesFR: [],
      postsES: [],
      postsEN: [],
      postsFR: [],
      isLoadingQuotes: false,
      isLoadingPosts: false,
      errorQuotes: null,
      errorPosts: null
    };
    this.createMarkupPost = this.createMarkupPost.bind(this);
    this.createMarkupQuote = this.createMarkupQuote.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoadingQuotes: true, isLoadingPosts: true });

    // English
    // Quotes
    axios
      .get("https://stadium8.com/wp-json/wp/v2/posts?categories=51&per_page=5")
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
      .get("https://stadium8.com/wp-json/wp/v2/posts/?categories=53&per_page=3")
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

    // French
    // Quotes
    axios
      .get("https://stadium8.com/wp-json/wp/v2/posts?categories=47&per_page=5")
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
      .get("https://stadium8.com/wp-json/wp/v2/posts/?categories=48&per_page=3")
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

    // Spanish
    // Quotes
    axios
      .get("https://stadium8.com/wp-json/wp/v2/posts?categories=52&per_page=5")
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
      .get("https://stadium8.com/wp-json/wp/v2/posts/?categories=54&per_page=3")
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
  }

  createMarkupPost(html) {
    return {
      __html: html
    };
  }

  createMarkupQuote(html) {
    return {
      __html: html.replace("<p>", "&ldquo; ").replace("</p>", " &bdquo;")
    };
  }

  render() {
    const {
      quotesES,
      quotesEN,
      quotesFR,
      postsES,
      postsEN,
      postsFR,
      isLoadingQuotes,
      isLoadingPosts,
      errorQuotes,
      errorPosts
    } = this.state;

    const { absPath, lg } = this.props;

    var quotes = [];
    var posts = [];

    switch (lg) {
      case "es":
        posts = postsES;
        quotes = quotesES;
        break;
      case "en":
        posts = postsEN;
        quotes = quotesEN;
        break;
      case "fr":
        posts = postsFR;
        quotes = quotesFR;
        break;
      default:
        posts = postsEN;
        quotes = quotesEN;
        break;
    }

    return (
      <div
        className="responsive-background background-position-fixed"
        style={{
          backgroundImage: `url(".${absPath}/images/background-home.jpg")`
        }}
      >
        <div className="color-brand-filter">
          <div className="container-fluid container-100vh py-5 px-lg-5">
            <div className="row h-100 align-items-center">
              <div className="col-12 col-lg-6 text-white mb-3 mb-lg-0">
                <div className="d-flex flex-column justify-content-center text-center h-100">
                  <div className="font-brand-bold font-italic h1 mb-0">
                    {errorQuotes ? (
                      <div>{/* Pas de citations aujourd'hui */}</div>
                    ) : (
                      ""
                    )}

                    {isLoadingQuotes ? (
                      <h2 className="loading-text text-center mb-5">
                        <HollowDotsSpinner color="white" className="mx-auto" />
                      </h2>
                    ) : (
                      <CarouselQuotes
                        quotes={quotes}
                        createMarkup={this.createMarkupQuote}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 text-white text-center">
                {errorPosts
                  ? /* Error loading posts */
                    ""
                  : ""}

                {isLoadingPosts ? (
                  <h2 className="loading-text mb-5">
                    <HollowDotsSpinner color="white" className="mx-auto" />
                  </h2>
                ) : (
                  posts.map(post => (
                    <div
                      key={post.id}
                      className="opacity-black-75 rounded border border-secondary pt-4 mb-4"
                    >
                      <h3 className="text-brand w-75 mx-auto font-weight-bold">
                        {post.title.rendered}
                      </h3>
                      <p className="text-white font-weight-bold mb-0">
                        <FontAwesomeIcon icon={faClock} className="mr-1" />
                        {post.modified.slice(8, 10)}/{post.modified.slice(5, 7)}
                        /{post.modified.slice(0, 4)}
                      </p>
                      <div
                        className="font-brand-2 text-white mx-2 p-1 px-lg-4 pb-lg-3"
                        dangerouslySetInnerHTML={this.createMarkupPost(
                          post.excerpt.rendered
                        )}
                      />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
