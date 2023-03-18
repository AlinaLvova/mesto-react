function Main(props) {

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info-group">
          <div className="profile__avatar-container">
            <img className="profile__avatar" />
            <button
              className="profile__avatar-button"
              type="button"
              aria-label="update avatar"
              onClick={props.onUpdateAvatar}
            ></button>
          </div>
          <div className="profile__info">
            <div className="profile__group-name-btn">
              <h1 className="profile__name"></h1>
              <button
                className="profile__edit-button link"
                type="button"
                aria-label="edit profile"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__about"></p>
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
