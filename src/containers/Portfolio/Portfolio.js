import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BreedingRhombusSpinner } from "react-epic-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import "./Portfolio.css";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      isLoading: false,
      error: null
    };
  }
  componentDidMount() {
    // const { projects } = this.state;

    this.setState({ isLoading: true });

    // if (projects === []) {
    // fetch("http://localhost:5000/projects.json")
    fetch("https://stadium8-api.herokuapp.com/projects.json")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong.");
        }
      })
      .then(response =>
        this.setState({
          projects: response,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
    // }
  }
  render() {
    const { projects, isLoading, error } = this.state;

    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <section className=" text-center pt-5">
                <h1 className="display-4">Portfolio</h1>
                <p className="lead">All my projects since the beggining</p>
                <p>
                  You can find in this section all the projects I have been
                  doing in Computer Science since I started programming
                </p>
              </section>

              {/* START CARD-DECK */}
              <div className="card-deck my-5">
                {error ? (
                  <div className="mx-auto  text-center">
                    <h3>
                      Sorry for the inconvenience, but an error has occured.
                    </h3>
                    <h3>
                      Please let me know about this by{" "}
                      <Link to="/contact" className="link-contact-me">
                        contacting me
                      </Link>
                      .
                    </h3>
                  </div>
                ) : (
                  ""
                )}
                {isLoading ? (
                  <div className=" mx-auto mb-5">
                    <h2 className="loading-text text-center mb-5">
                      Loading ...
                    </h2>
                    <BreedingRhombusSpinner size={200} color="white" />
                  </div>
                ) : (
                  projects.map((project, i) => {
                    return (
                      <div key={i} className="card">
                        {/* NEW CARD */}
                        <div className="card-body  bg-dark">
                          <h5 className="text-center  font-weight-bold">
                            {project.name}
                          </h5>
                          <p className="card-text text-center">
                            {project.description}
                          </p>
                          <div className="d-flex justify-content-around align-items-center flex-wrap">
                            {project.tools.map((tool, i) => {
                              return (
                                <div key={i} className="icon-portfolio">
                                  <img
                                    src={`./images/tools/${tool
                                      .replace(" ", "-")
                                      .toLowerCase()}.png`}
                                    alt={"Logo "}
                                  />
                                  <span className="align-text-top pl-1">
                                    {tool}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div className="card-footer bg-light">
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              {project.github !== "" ? (
                                <a
                                  href={`${project.github}/blob/master/README.md`}
                                  className="btn btn-sm btn-outline-success"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  More
                                </a>
                              ) : (
                                /* eslint-disable */
                                <a className="btn btn-sm btn-outline-success disabled text-disabled">
                                  More
                                </a>
                                /* eslint-enable */
                              )}

                              {project.github !== "" ? (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn btn-sm btn-outline-success"
                                >
                                  <FontAwesomeIcon icon={faGithub} />
                                </a>
                              ) : (
                                /* eslint-disable */
                                <a className="btn btn-sm btn-outline-success disabled">
                                  <FontAwesomeIcon icon={faGithub} />
                                </a>
                                /* eslint-enable */
                              )}
                              {project.link !== "" ? (
                                <a
                                  className="btn btn-sm btn-outline-success"
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                                </a>
                              ) : (
                                /* eslint-disable */
                                <a className="btn btn-sm btn-outline-success disabled">
                                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                                </a>
                                /* eslint-enable */
                              )}
                            </div>

                            <small className="text-muted">
                              <FontAwesomeIcon
                                icon={faClock}
                                className="mr-1"
                              />
                              {project.date.substring(0, 4)}
                            </small>
                          </div>
                        </div>
                        {/* END CARD */}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Portfolio;
