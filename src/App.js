import logo from './logo.svg';
import './App.css';

function App() {
  return (
        <div class="page__container">
        <header class="header">
            <img src="<%=require('./images/logo.svg')%>" alt="Надписи Место и Россия." class="header__logo"/>
        </header>
        <main class="content">
            <section class="profile">
                <div class="profile__info-group">
                    <div class="profile__avatar-container">
                        <img class="profile__avatar"/>
                        <button class="profile__avatar-button" type="button" aria-label="update avatar"></button>
                    </div>
                    <div class="profile__info">
                        <div class="profile__group-name-btn">
                            <h1 class="profile__name"></h1>
                            <button class="profile__edit-button link" type="button" aria-label="edit profile"></button>
                        </div>
                        <p class="profile__about"></p>
                    </div>
                </div>
                <button class="profile__add-button link" type="button" aria-label="add new card"></button>
            </section>

            <section class="gallery">
                <ul class="gallery__list">
                </ul>
            </section>
        </main>
        <footer class="footer">
            <p class="footer__copyright">&#169; 2023 Mesto Russia</p>
        </footer>
        <div class="popup" id="popup-edit-form">
            <div class="popup__container">
                <button class="popup__close-btn link" id="close-btn-edit" type="button"
                    aria-label="close edit form"></button>
                <form class="popup__form" method="POST" name="edit-form" novalidate>
                    <h3 class="popup__title">Редактировать профиль</h3>
                    <input id="input-name" name="user-name" type="text" class="popup__input-field" placeholder="Имя"
                        minlength="2" maxlength="40" required/>
                    <span class="input-name-error popup__input-field-error"></span>
                    <input id="input-about" name="user-about" type="text" class="popup__input-field"
                        placeholder="О себе" minlength="2" maxlength="200" required/>
                    <span class="input-about-error popup__input-field-error"></span>
                    <button class="popup__submit-btn link" type="submit">Сохранить</button>
                </form>
            </div>
        </div>
        <div class="popup" id="popup-add-form">
            <div class="popup__container">
                <button class="popup__close-btn link" id="close-btn-add" type="button"
                    aria-label="close add form"></button>
                <form class="popup__form" method="POST" name="add-form" novalidate>
                    <h3 class="popup__title">Новое место</h3>
                    <input id="input-title" name="name" type="text" class="popup__input-field" placeholder="Название"
                        minlength="2" maxlength="30" required/>
                    <span class="input-title-error popup__input-field-error"></span>
                    <input id="input-link" name="link" type="url" class="popup__input-field"
                        placeholder="Ссылка на картинку" required/>
                    <span class="input-link-error popup__input-field-error"></span>
                    <button class="popup__submit-btn link" type="submit">Создать</button>
                </form>
            </div>
        </div>
        <div class="popup popup_opacity-img" id="popup-open-img">
            <div class="popup__big-img-container">
                <img class="popup__image" type="button"/>
                <figcaption class="popup__figcaption"></figcaption>
                <button class="popup__close-btn link" id="close-btn-img" type="button"
                    aria-label="close img popup"></button>
            </div>
        </div>
        <div class="popup" id="popup-confirmation">
            <div class="popup__container">
                <button class="popup__close-btn link" id="close-btn-confirmation" type="button"
                    aria-label="close confirmation form"></button>
                <form class="popup__form" method="POST" name="confirmation-form" novalidate>
                    <h3 class="popup__title">Вы уверены?</h3>
                    <button class="popup__submit-btn link" type="submit">Да</button>
                </form>
            </div>
        </div>
        <div class="popup" id="popup-update-avatar">
            <div class="popup__container">
                <button class="popup__close-btn link" id="close-btn-update-avatar" type="button"
                    aria-label="close update avatar form"></button>
                <form class="popup__form" method="POST" name="update-avatar-form" novalidate>
                    <h3 class="popup__title">Обновить аватар</h3>
                    <input id="input-link" name="input-link-on-img" type="url" class="popup__input-field"
                        placeholder="Ссылка на картинку" required/>
                    <span class="input-link-error popup__input-field-error"></span>
                    <button class="popup__submit-btn link" type="submit">Да</button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default App;
