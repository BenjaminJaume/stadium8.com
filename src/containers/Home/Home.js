import React, { Component } from "react";
import axios from "axios";
import { HollowDotsSpinner } from "react-epic-spinners";

import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citations: [],
      posts: [],
      isLoadingCitations: false,
      isLoadingPosts: false,
      errorCitations: null,
      errorPosts: null
    };
    this.createMarkup = this.createMarkup.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoadingCitations: true, isLoadingPosts: true });

    axios
      .get("https://stadium8.com/wp-json/wp/v2/posts?categories=47&per_page=3")
      .then(response => {
        if (response.status === 200) {
          this.setState({
            citations: response.data,
            isLoadingCitations: false
          });
        } else {
          throw new Error("Something went wrong with Citations");
        }
      })
      .catch(error =>
        this.setState({ errorCitations: error, isLoadingCitations: false })
      );

    axios
      .get("https://stadium8.com/wp-json/wp/v2/posts/?categories=48")
      .then(response => {
        if (response.status === 200) {
          this.setState({
            posts: response.data,
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

  createMarkup(html) {
    return {
      __html: html.replace("<p>", "&ldquo;").replace("</p>", "&bdquo;")
    };
  }

  render() {
    const {
      citations,
      posts,
      isLoadingCitations,
      isLoadingPosts,
      errorCitations,
      errorPosts
    } = this.state;

    return (
      <div
        className="responsive-background background-position-fixed"
        style={{
          backgroundImage: `url("./wp-content/themes/stadium8/images/background-home.jpg")`
        }}
      >
        <div className="color-brand-filter">
          <div className="container-fluid py-5 px-lg-5">
            <div className="row h-100 align-items-center">
              <div className="col-12 col-lg-6 text-white mb-3 mb-lg-0">
                <div className="d-flex flex-column justify-content-center text-center h-100">
                  <div className="font-brand-bold font-italic h1 mb-0">
                    {errorCitations ? (
                      <div>
                        &rdquo;Si vous pensez que vous allez échouer, alors vous
                        allez probablement échouer.&bdquo; - Kobe Bryant
                      </div>
                    ) : (
                      ""
                    )}

                    {isLoadingCitations ? (
                      <h2 className="loading-text text-center mb-5">
                        <HollowDotsSpinner color="white" className="mx-auto" />
                      </h2>
                    ) : (
                      <div
                        id="carousel-home"
                        className="carousel slide"
                        data-ride="carousel"
                      >
                        <div className="carousel-inner">
                          <div
                            className="carousel-item active"
                            data-interval="5000"
                          >
                            {citations[0] ? (
                              <p
                                dangerouslySetInnerHTML={this.createMarkup(
                                  citations[0].content.rendered
                                )}
                              />
                            ) : (
                              ""
                            )}
                          </div>
                          <div className="carousel-item" data-interval="5000">
                            {citations[1] ? (
                              <p
                                dangerouslySetInnerHTML={this.createMarkup(
                                  citations[1].content.rendered
                                )}
                              />
                            ) : (
                              ""
                            )}
                          </div>
                          <div className="carousel-item" data-interval="5000">
                            {citations[2] ? (
                              <p
                                dangerouslySetInnerHTML={this.createMarkup(
                                  citations[2].content.rendered
                                )}
                              />
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <a
                          className="carousel-control-prev"
                          href="#carousel-home"
                          role="button"
                          data-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only">Previous</span>
                        </a>
                        <a
                          className="carousel-control-next"
                          href="#carousel-home"
                          role="button"
                          data-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only">Next</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 text-white text-center">
                {errorPosts ? (
                  <div>
                    Désolé, il n'y a pas d'actualités disponible pour le moment.
                  </div>
                ) : (
                  ""
                )}

                {isLoadingPosts ? (
                  <h2 className="loading-text mb-5">
                    <HollowDotsSpinner color="white" className="mx-auto" />
                  </h2>
                ) : (
                  posts.map(post => (
                    <div
                      key={post.id}
                      className="opacity-black-75 rounded border border-secondary pt-4 mb-4 mx-3"
                    >
                      <h3 className="text-brand w-75 mx-auto font-weight-bold">
                        {post.modified.slice(8, 10)}/{post.modified.slice(5, 7)}
                        /{post.modified.slice(0, 4)} - {post.title.rendered}
                      </h3>
                      <div
                        className="font-brand-2 text-white mx-2 p-1 px-lg-4 pb-lg-3"
                        dangerouslySetInnerHTML={this.createMarkup(
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
