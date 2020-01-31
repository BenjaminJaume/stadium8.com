import React from "react";

// import "./CarouselQuotes.css";

const CarouselQuotes = props => {
  const { citations } = props;

  return (
    <div id="carousel-home" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {citations[0] ? (
          <div className="carousel-item active" data-interval="5000">
            <span
              dangerouslySetInnerHTML={props.createMarkup(
                citations[0].content.rendered
              )}
            />{" "}
            -{" "}
            <span
              dangerouslySetInnerHTML={props.createMarkup(
                citations[0].title.rendered
              )}
            />
          </div>
        ) : (
          ""
        )}
        {citations[1] ? (
          <div className="carousel-item" data-interval="5000">
            <span
              dangerouslySetInnerHTML={props.createMarkup(
                citations[1].content.rendered
              )}
            />{" "}
            -{" "}
            <span
              dangerouslySetInnerHTML={props.createMarkup(
                citations[1].title.rendered
              )}
            />
          </div>
        ) : (
          ""
        )}
        {citations[2] ? (
          <div className="carousel-item" data-interval="5000">
            <span
              dangerouslySetInnerHTML={props.createMarkup(
                citations[2].content.rendered
              )}
            />{" "}
            -{" "}
            <span
              dangerouslySetInnerHTML={props.createMarkup(
                citations[2].title.rendered
              )}
            />
          </div>
        ) : (
          ""
        )}
        {citations[3] ? (
          <div className="carousel-item" data-interval="5000">
            <span
              dangerouslySetInnerHTML={props.createMarkup(
                citations[3].content.rendered
              )}
            />{" "}
            -{" "}
            <span
              dangerouslySetInnerHTML={props.createMarkup(
                citations[3].title.rendered
              )}
            />
          </div>
        ) : (
          ""
        )}
        {citations[4] ? (
          <div className="carousel-item" data-interval="5000">
            <span
              dangerouslySetInnerHTML={props.createMarkup(
                citations[4].content.rendered
              )}
            />{" "}
            -{" "}
            <span
              dangerouslySetInnerHTML={props.createMarkup(
                citations[4].title.rendered
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
