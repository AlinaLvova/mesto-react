import PopupWithForm from './PopupWithForm';
import { useState } from 'react';

function EditProfilePopup(props){
    const [name, setName] = useState("");
    const [about, setAbout] = useState("");

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangeAbout = (e) => {
        setAbout(e.target.value);
    }

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
              value={name}
              onChange={handleChangeName}
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
              value={about}
              onChange={handleChangeAbout}
            />
            <span className="input-about-error popup__input-field-error"></span>
          </PopupWithForm>
    )
}

export default EditProfilePopup;