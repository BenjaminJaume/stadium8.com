import React from "react";
// import "./CarouselQuotes.css";

const CarouselQuotes = props => {
  const { quotes } = props;

  // Time (in ms) that each quote will be displayed
  const dataInterval = 10000;

  return (
    <div id="carousel-home" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {quotes[0] ? (
          <div className="carousel-item active" data-interval={dataInterval}>
            <span
              dangerouslySetInnerHTML={props.createMarkup(
                quotes[0].content.rendered
              )}
            />{" "}
            -{" "}
            <span
              dangerouslySetInnerHTML={props.createMarkup(
                quotes[0].title.rendered
              )}
            />
          </div>
        ) : (
          ""
        )}
        {quotes[1] ? (
          <div className="carousel-item" data-interval={dataInterval}>
            <span
              dangerouslySetInnerHTML={props.createMarkup(
                quotes[1].content.rendered
              )}
            />{" "}
            -{" "}
            <span
              dangerouslySetInnerHTML={props.createMarkup(
                quotes[1].title.rendered
              )}
            />
          </div>
        ) : (
          ""
        )}
        {quotes[2] ? (
          <div className="carousel-item" data-interval={dataInterval}>
            <span
              dangerouslySetInnerHTML={props.createMarkup(
                quotes[2].content.rendered
              )}
            />{" "}
            -{" "}
            <span
              dangerouslySetInnerHTML={props.createMarkup(
                quotes[2].title.rendered
              )}
            />
          </div>
        ) : (
          ""
        )}
        {quotes[3] ? (
          <div className="carousel-item" data-interval={dataInterval}>
            <span
              dangerouslySetInnerHTML={props.createMarkup(
                quotes[3].content.rendered
              )}
            />{" "}
            -{" "}
            <span
              dangerouslySetInnerHTML={props.createMarkup(
                quotes[3].title.rendered
              )}
            />
          </div>
        ) : (
          ""
        )}
        {quotes[4] ? (
          <div className="carousel-item" data-interval={dataInterval}>
            <span
              dangerouslySetInnerHTML={props.createMarkup(
                quotes[4].content.rendered
              )}
            />{" "}
            -{" "}
            <span
              dangerouslySetInnerHTML={props.createMarkup(
                quotes[4].title.rendered
              )}
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <a
        className="carousel-control-prev"
        href="#carousel-home"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carousel-home"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default CarouselQuotes;
