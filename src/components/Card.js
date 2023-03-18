import {useState} from 'react';
import image_404 from './../images/404.webp';

function Card(card) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleClick = () => {
    card.onCardClick(card);
  }  

  return (
    <li className="card" key={card.id}>
      <article>
        <button
          className={`card__delete link ${card.isOwner ? 'card__delete_active' : ''}`}
          aria-label="to-delete-card"
        ></button>
        {imageError ? (
          <img 
          className="card__image" 
          src={image_404} 
          alt="not found" 
          onClick={handleClick}
          />
        ) : (
          <img
            className="card__image"
            src={card.link}
            onError={handleImageError}
            alt={`пользователя: ${card.name}`}
            onClick={handleClick}
          />
        )}
        <div className="card__footer">
          <h2 className="card__title">{card.name}</h2>
          <div className="card__like-container">
            <button
              className={`card__like link ${card.isLiked ? 'card__like_active' : ''}`}
              type="button"
              aria-label="liked"
            ></button>
            <h4 className="card__like-counter">{card.likes.length > 0 ? card.likes.length : ""}</h4>
          </div>
        </div>
      </article>
    </li>
  );
}

export default Card;
