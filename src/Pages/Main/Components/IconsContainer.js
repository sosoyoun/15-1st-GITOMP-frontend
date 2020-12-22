import React from "react";
import guitar from "./Images/icons8-guitar-96.png";
import saxophone from "./Images/icons8-saxophone-96.png";
import piano from "./Images/icons8-piano-96.png";
import maracas from "./Images/icons8-maracas-100.png";
import recordIcon from "./Images/icons8-cymbals-100.png";

class IconsContainer extends React.Component {
  render() {
    const iconList = [
      { img: guitar, alt: "기타", text: "Classical" },
      { img: saxophone, alt: "색소폰", text: "Jazz" },
      { img: piano, alt: "피아노", text: "Newage" },
      { img: maracas, alt: "마라카스", text: "World Music" },
      { img: recordIcon, alt: "레코드", text: "POP" },
    ];
    return (
      <div className="IconsContainer">
        {iconList.map((el) => {
          return (
            <div className="albumIcon">
              <img src={el.img} alt={el.alt} />
              <p>{el.text}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default IconsContainer;
