import {useState} from 'react';
import image_404 from './../images/404.webp';

function ImagePopup({card, onClose}) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    console.log('card=', card);
    setImageError(true);
  };

  const handleClosePopup = () => {
    onClose();
  };
  return (
    <div
      className={`popup popup_opacity-img ${
        card.link ? "popup_opened" : ""
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
          src={card.link}
          alt={`Фото пользователя: ${card.name}`}
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
