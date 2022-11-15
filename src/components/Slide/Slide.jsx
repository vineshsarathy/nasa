import React from "react";
import Card from "../card/card";
import "./slide.css";

function Slide({ slideData,setModalData, setShowModal }) {
  return (
    <div className="slideContainer">
      {slideData.length !== 0
        ? slideData.map((i) => (
            <Card
              image={i.thumbnail_url ? i.thumbnail_url : i.url}
              content={i.title}
              date={i.date}
              desc={i.explanation}
              setModalData={setModalData}
              setShowModal={setShowModal}
            />
          ))
        : ""}
    </div>
  );
}

export default Slide;
