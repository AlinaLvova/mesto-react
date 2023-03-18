import {useState} from 'react';
import image_404 from './../images/404.webp';

function ImagePopup(props) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleClosePopup = () => {
    props.onClose();
  };
  return (
    <div
      className={`popup popup_opacity-img ${
        props.card !== "" ? "popup_opened" : ""
      }`}
      id="popup-open-img"
    >
      <div className="popup__big-img-container">
        {imageError ? (
          <img 
          className="popup__image" 
          type="button" 
          src={image_404}
          alt="image not found" />
        ) : (
          <img 
          className="popup__image" 
          type="button" 
          src={props.card?.link || image_404}
          alt={`Фото пользователя: ${props.card?.name || ""}`}
          onError={handleImageError}
          />
        )}
        <figcaption className="popup__figcaption"></figcaption>
        <button
          className="popup__close-btn link"
          id="close-btn-img"
          type="button"
          aria-label="close img popup"
          onClick={handleClosePopup}
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
