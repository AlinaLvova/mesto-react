import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props){
    return(
        <PopupWithForm
            name="edit-profile"
            title="Редактировать профиль"
            buttonTitle="Сохранить"
            isOpen={props.isOpen}
            onClose={props.onClose}
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
    )
}

export default EditProfilePopup;