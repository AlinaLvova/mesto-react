import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props){
    return( 
        <PopupWithForm
            name="add-card"
            title="Новое место"
            buttonTitle="Создать"
            isOpen={props.isOpen}
            onClose={props.onClose}
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
    )
}

export default AddPlacePopup;