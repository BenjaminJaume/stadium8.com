import React from "react";
// import "./Quotes.css";

const Quotes = props => {
  const { random, quotes } = props;

  return (
    <div>
      {quotes[random] ? (
        <div>
          <span
            dangerouslySetInnerHTML={props.createMarkup(
              quotes[random].content.rendered
            )}
          />{" "}
          -{" "}
          <span
            dangerouslySetInnerHTML={props.createMarkup(
              quotes[random].title.rendered
            )}
          />
        </div>
      ) : (
        ""
      )}
      {/* {quotes[1] ? (
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
        )} */}
    </div>
  );
};

export default Quotes;
