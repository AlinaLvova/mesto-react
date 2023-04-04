import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "./../contexts/CurrentUserContext";
import { useRef } from "react";

function EditAvatarPopup(props) {
  const avatarInput = useRef('');

  const handleSubmit = (e) => {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateAvatar({
        avatar: avatarInput.current && avatarInput.current.value
    });

    props.onClose();
  };

  return (
    <PopupWithForm
            name="update-avatar"
            title="Обновить аватар"
            buttonTitle="Да"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
          >
            <input
              id="input-link"
              name="input-link-on-img"
              type="url"
              className="popup__input-field"
              placeholder="Ссылка на картинку"
              ref={avatarInput}
              required
            />
            <span className="input-link-error popup__input-field-error"></span>
          </PopupWithForm>
  );
}

export default EditAvatarPopup;
