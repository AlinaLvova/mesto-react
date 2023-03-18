function ImagePopup(){
    return(   
        <div className="popup popup_opacity-img" id="popup-open-img">
          <div className="popup__big-img-container">
            <img className="popup__image" type="button" />
            <figcaption className="popup__figcaption"></figcaption>
            <button
              className="popup__close-btn link"
              id="close-btn-img"
              type="button"
              aria-label="close img popup"
            ></button>
          </div>
        </div>
    )
}

export default ImagePopup;