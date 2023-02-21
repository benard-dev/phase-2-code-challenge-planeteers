import React, {useState} from "react";

function Planeteer({planeteer}) {
  const [isImageClicked, setIsImageClicked] = useState(false)

  const handleImageClick = () => {
    setIsImageClicked(!isImageClicked)
  }

  const renderBioOrQuote = () => {
    return (isImageClicked ? planeteer.quote : planeteer.bio);
  }

  const renderLocationBased = () => {
    return (planeteer.fromUSA ? 'USA-based' : 'Working overseas');
  }

  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={planeteer.pictureUrl}
          alt={planeteer.name}
          className="card__image"
          onClick = {handleImageClick}
        />
        <div className="card__content">
          <div className="card__title">{planeteer.name}</div>
          <p className="card__text">{renderBioOrQuote()}</p>
          <div className="card__detail">
            <p>{planeteer.twitter}</p>
            <p>
              {renderLocationBased()}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
