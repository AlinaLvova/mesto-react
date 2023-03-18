import {useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false);
    const [isUpdateAvatarPopupOpen, setIsUpdateAvatarPopupOpen] = useState(false);

    const handleUpdateAvatarClick = () => {
      setIsUpdateAvatarPopupOpen(true);
    };

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
    };

    const handleAddCardClick = () => {
        setIsAddCardPopupOpen(true);
    };

    const closeAllPopups = () => {
        setIsUpdateAvatarPopupOpen(false);
        setIsAddCardPopupOpen(false);
        setIsEditProfilePopupOpen(false);
    };

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main 
         onEditProfile={handleEditProfileClick}
         onUpdateAvatar={handleUpdateAvatarClick}
         onAddCard={handleAddCardClick}
        />
        <Footer />
        {/* popup: edit profile */}
        <PopupWithForm
          name="edit-profile"
          title="Редактировать профиль"
          buttonTitle="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="input-name"
            name="user-name"
            type="text"
            className="popup__input-field"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="input-name-error popup__input-field-error"></span>
          <input
            id="input-about"
            name="user-about"
            type="text"
            className="popup__input-field"
            placeholder="О себе"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="input-about-error popup__input-field-error"></span>
        </PopupWithForm>
        {/* popup: confirmation */}
        <PopupWithForm
          name="confirmation"
          title="Вы уверены?"
          buttonTitle="Да"
          onClose={closeAllPopups}
        ></PopupWithForm>
        {/* popup: update avatar */}
        <PopupWithForm
          name="update-avatar"
          title="Обновить аватар"
          buttonTitle="Да"
          isOpen={isUpdateAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="input-link"
            name="input-link-on-img"
            type="url"
            className="popup__input-field"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="input-link-error popup__input-field-error"></span>
        </PopupWithForm>
        {/* popup: add new card */}
        <PopupWithForm
          name="add-card"
          title="Новое место"
          buttonTitle="Создать"
          isOpen={isAddCardPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="input-title"
            name="name"
            type="text"
            className="popup__input-field"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="input-title-error popup__input-field-error"></span>
          <input
            id="input-link"
            name="link"
            type="url"
            className="popup__input-field"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="input-link-error popup__input-field-error"></span>
        </PopupWithForm>
        {/* popup: open card */}
        <ImagePopup />
      </div>
    </div>
  );
}

export default App;
