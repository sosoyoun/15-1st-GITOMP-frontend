import React from "react";
import guitar from "./Images/icons8-guitar-96.png";
import saxophone from "./Images/icons8-saxophone-96.png";
import piano from "./Images/icons8-piano-96.png";
import maracas from "./Images/icons8-maracas-100.png";
import recordIcon from "./Images/icons8-cymbals-100.png";

class IconsContainer extends React.Component {
  render() {
    return (
      <div className="IconsContainer">
        {/*map과 toggle 기능 사용 예정 */}
        <div className="albumIcon">
          <img src={guitar} alt="기타" />
          <p>Classical</p>
        </div>
        <div className="albumIcon">
          <img src={saxophone} alt="색소폰" />
          <p>Jazz</p>
        </div>
        <div className="albumIcon">
          <img src={piano} alt="피아노" />
          <p>Newage</p>
        </div>
        <div className="albumIcon">
          <img src={maracas} alt="마라카스" />
          <p>World Music</p>
        </div>
        <div className="albumIcon">
          <img src={recordIcon} alt="레코드" />
          <p>POP</p>
        </div>
      </div>
    );
  }
}

export default IconsContainer;
