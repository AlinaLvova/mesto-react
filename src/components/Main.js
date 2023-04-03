import {useState, useEffect, useContext} from 'react';
import api from '../utils/Api';
import Card from './Card';
import { CurrentUserContext } from './../contexts/CurrentUserContext';

function Main(props) {
  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  useEffect(() => {
         api.getCardList()
         .then(cardListData => {
            setCards(cardListData.map((card) => ({
                id: card._id,
                name: card.name,
                link: card.link,
                likes: card.likes,
                owner: card.owner,
                })));
         }) 
         .catch((error) => {
            console.log(error.message);
          });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info-group">
          <div className="profile__avatar-container">
            <img
              className="profile__avatar"
              style={{ backgroundImage: `url(${currentUser.avatar})` }}
              alt=""
            />
            <button
              className="profile__avatar-button"
              type="button"
              aria-label="update avatar"
              onClick={props.onUpdateAvatar}
            ></button>
          </div>
          <div className="profile__info">
            <div className="profile__group-name-btn">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                className="profile__edit-button link"
                type="button"
                aria-label="edit profile"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__about">{currentUser.about}</p>
          </div>
        </div>
        <button
          className="profile__add-button link"
          type="button"
          aria-label="add new card"
          onClick={props.onAddCard}
        ></button>
      </section>

      <section className="gallery">
        <ul className="gallery__list">
          {cards.map((card) => (
            <Card
              name={card.name}
              link={card.link}
              key={card.id}
              likes={card.likes}
              owner={card.owner}
              onCardClick={props.onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
