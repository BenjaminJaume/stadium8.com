import React, { Component } from "react";
import i18n from "i18next";
import { HollowDotsSpinner } from "react-epic-spinners";
import CarouselQuotes from "../../components/CarouselQuotes/CarouselQuotes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { Config } from "../../components/Config/Config";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    // this.notify = this.notify.bind(this);
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

  // notify = () =>
  //   toast("If you continue, it means that you agreed with our cookie policy ");

  render() {
    const absPath = Config.ABS_PATH;
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
      phoneNumber
    } = this.props;

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
        <div
          className="color-brand-filter"
          // onLoad={this.notify}
        >
          {/* <ToastContainer
            position="bottom-center"
            autoClose={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable
          /> */}
          <div className="container-fluid container-100vh py-5 px-lg-5">
            <div className="row h-100 align-items-center">
              <div className="col-12 col-lg-6 text-white text-center mb-5 mb-lg-0">
                {isLoadingQuotes ? (
                  <h2 className="loading-text text-center mb-5">
                    <HollowDotsSpinner color="white" className="mx-auto" />
                  </h2>
                ) : !errorQuotes ? (
                  <div className="font-italic h1 mb-0">
                    <CarouselQuotes
                      quotes={quotes}
                      createMarkup={this.createMarkupQuote}
                    />
                  </div>
                ) : (
                  // Error loading Quotes
                  ""
                )}

                <hr className="divider w-75 mx-auto" />

                <div className="animated jackInTheBox delay-500ms">
                  <p className="mb-0 h3">{i18n.t("other.makeBooking")}</p>
                  <p className="animated pulse infinite delay-1s slower">
                    <a
                      href={`tel:${phoneNumber.replace(/ /g, "")}`}
                      className="display-4 link-brand link-no-underline"
                    >
                      {phoneNumber}
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-6 text-white text-center align-items-center">
                {isLoadingPosts ? (
                  <h2 className="loading-text mb-5">
                    <HollowDotsSpinner color="white" className="mx-auto" />
                  </h2>
                ) : !errorPosts ? (
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

                      <div className="d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-center">
                        {post.content.rendered.indexOf('<img src="') !== -1 ? (
                          <div>
                            <img
                              src={
                                this.extractPictureSrc(post.content.rendered)[0]
                              }
                              alt="Post"
                              className="img-fluid picture-post m-3"
                              style={{}}
                              srcSet={
                                this.extractPictureSrc(post.content.rendered)[1]
                              }
                              // sizes="(max-width: 300px) 100vw, 600px"
                            />
                          </div>
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
                    </div>
                  ))
                ) : (
                  // Error loading posts
                  ""
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
