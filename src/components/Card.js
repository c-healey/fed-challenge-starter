import React from "react";

const Card = (props) => {
  const {
    headerImg,
    thumbnail,
    title,
    time,
    distance,
    CTA,
    overlayTitle,
    overlayTxt,
  } = props.cardDetail;

  const renderTimeandDistance = () => {
    if (time.length) {
      return (
        <div>
          <p className="card-text">
            <i className="fas fa-stopwatch mr-1"></i>
            {time}
            <i className="fab fa-rev mx-1"></i>
            {distance}
          </p>
        </div>
      );
    }
    return <div className="p-2 "></div>;
  };
  const renderOverlayContent = () => {
    if (overlayTxt && overlayTxt.length) {
      return (
        <div className="overlay-txt d-flex justify-content-center">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <div className="txt-bg">{overlayTitle}</div>
            <h5 className="text-uppercase">{overlayTxt}</h5>
            <i className="fas fa-caret-right txt-md"></i>
          </div>
        </div>
      );
    }
    return <div></div>;
  };
  return (
    <div className="card ifit-shadow ifit-border grow h-100">
      <div className="overlay-parent">
        {renderOverlayContent()}
        <img className="card-img-top" src={headerImg} alt="lake inniscarra" />
      </div>
      <div className="card-body">
        <h5 className="card-title d-flex justify-content-between">
          <span>{title}</span>
          <img src={thumbnail} alt="trainer" className="ifit-thumbnail" />
        </h5>
        {renderTimeandDistance()}
        <a href={CTA} className="text-uppercase ifit-CTA">
          view details
        </a>
      </div>
    </div>
  );
};
export default Card;
