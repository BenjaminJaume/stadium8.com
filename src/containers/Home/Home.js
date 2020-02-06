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
    this.extractPictureSrc = this.extractPictureSrc.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoadingQuotes: true, isLoadingPosts: true });

    const { quotesPerPage, postsPerPage } = this.props;

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

  extractPictureSrc(data) {
    const srcStart = data.indexOf('<img src="') + 10;
    const srcEnd = data.indexOf('alt=""') - 6;

    const srcSetStart = data.indexOf("srcset=") + 8;
    const srcSetEnd = data.indexOf('" sizes=') - 5;

    return [data.slice(srcStart, srcEnd), data.slice(srcSetStart, srcSetEnd)];
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
                  <div className="font-italic h1 mb-0">
                    {errorQuotes
                      ? /* Error loading quotes */
                        ""
                      : ""}

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
                      className="opacity-black-75 rounded border border-black pt-4 mb-4"
                    >
                      <div className="mb-2">
                        <span className="text-white font-weight-bold align-text-bottom mb-0 mx-3">
                          <FontAwesomeIcon icon={faClock} className="mr-1" />
                          {`${post.modified.slice(8, 10)}/${post.modified.slice(
                            5,
                            7
                          )}/${post.modified.slice(0, 4)}`}
                        </span>
                        <span className="text-brand font-weight-bold h3 mb-0">
                          {post.title.rendered}
                        </span>
                      </div>

                      {post.content.rendered.indexOf('<img src="') !== -1 ? (
                        <span>
                          <img
                            src={
                              this.extractPictureSrc(post.content.rendered)[0]
                            }
                            alt=""
                            className="img-fluid"
                            style={{ maxHeight: "300px" }}
                            srcSet={
                              this.extractPictureSrc(post.content.rendered)[1]
                            }
                            sizes="(max-width: 300px) 100vw, 600px"
                          />
                        </span>
                      ) : (
                        ""
                      )}

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
