import {useState, useEffect} from 'react';
import api from '../utils/Api';

function Main(props) {
  const [userName, setUserName] = useState();
  const [userAbout , setUserAbout] = useState();
  const [userAvatar, setUserAvatar] = useState();

   useEffect(() => {
     Promise.all([api.getUserInfo(), api.getCardList()])
       .then(([infoData, cardListData]) => {
         setUserName(infoData.name);
         setUserAvatar(infoData.avatar);
         setUserAbout(infoData.about);
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
            <img className="profile__avatar" 
                 style={{ backgroundImage: `url(${userAvatar})` }}
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
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__edit-button link"
                type="button"
                aria-label="edit profile"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__about">{userAbout}</p>
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
        <ul className="gallery__list"></ul>
      </section>
    </main>
  );
}

export default Main;
