import React from "react";
import Card from "./Card";
import { cardData } from "../data/cardData";

const Cards = () => {
  const result = cardData.map((e, i) => (
    <div className="col-lg-3 mb-4 mb-1" key={i}>
      <Card cardDetail={e} index={i + 1} />
    </div>
  ));
  return (
    <div className="row align-items-center d-flex align-items-stretch">
      {result}
    </div>
  );
};
export default Cards;
