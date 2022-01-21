import logo from './logo.svg';
import './index.css';
import './images/avatar.png';
import './images/logo.svg'

function App() {
  return (
    <div className='window'>
<div className='page'>
        <header className="header">
          <img className="header__logo" src="logo.svg" alt="Логотип" />
        </header>
        <main>
          <section className="profile">
            <div className="profile__main">
              <img className="profile__avatar" src="avatar.png" alt="Аватар профиля" />
              <div className="profile__avatar-edit-button" />
              <div className="profile__profile-info">
                <h1 className="profile__name">User</h1>
                <button className="profile__edit-button" type="button" />
                <p className="profile__description">Bio</p>
              </div>
            </div>
            <button className="profile__add-button" type="button" />
          </section>
          <section className="elements" />
        </main>
        <footer className="footer">
          <p className="footer__copyright">© 2020 Mesto Russia</p>
        </footer>
        <div className="popup popup_content_bio">
          <div className="popup__container">
            <button className="popup__close-button popup__close-button_content_edit-bio" type="button" />
            <form className="form" name="profile-info-form" noValidate>
              <h2 className="form__heading">Редактировать профиль</h2>
              <fieldset className="form__fieldset">
                <input className="form__input form__input_content_name" id="profile-name-input" type="text" placeholder="Имя" name="name" required minLength={2} maxLength={40} />
                <span className="form__error" id="profile-name-input-error" />
                <input className="form__input form__input_content_description" id="description-input" type="text" placeholder="Описание" name="about" required minLength={2} maxLength={200} />
                <span className="form__error" id="description-input-error" />
                <button className="form__save-button" type="submit">Сохранить</button>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="popup popup_content_element">
          <div className="popup__container">
            <button className="popup__close-button popup__close-button_content_add-element" type="button" />
            <form className="form" name="new-card-form" noValidate>
              <h2 className="form__heading">Новое место</h2>
              <fieldset className="form__fieldset">
                <input className="form__input" id="element-name-input" type="text" placeholder="Название" name="name" required maxLength={30} minLength={2} />
                <span className="form__error" id="element-name-input-error" />
                <input className="form__input" id="url-input" type="url" placeholder="Ссылка на картинку" name="link" required />
                <span className="form__error" id="url-input-error" />
                <button className="form__save-button form__save-button_content_new-element" type="submit">Создать</button>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="popup popup_content_new-avatar">
          <div className="popup__container">
            <button className="popup__close-button" type="button" />
            <form className="form form_place_new-avatar" name="new-avatar" noValidate>
              <h2 className="form__heading">Обновить аватар</h2>
              <fieldset className="form__fieldset">
                <input className="form__input" id="new-avatar-input" type="url" placeholder="Ссылка" name="avatar" required />
                <span className="form__error" id="new-avatar-input-error" />
                <button className="form__save-button form__save-button_content_new-avatar" type="submit">Сохранить</button>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="popup popup_content_big-image">
          <div className="popup__container">
            <button className="popup__close-button" type="button" />
            <img className="popup__image" src="#" alt="#" />
            <p className="popup__paragraph" />
          </div>
        </div>
        <div className="popup popup_content_delete-popup">
          <div className="popup__container">
            <button className="popup__close-button" type="button" />
            <form className="form form_place_delete-popup" noValidate>
              <p className="form__heading form__heading_place_delete-popup">Вы уверены?</p>
              <fieldset className="form__fieldset">
                <button className="form__save-button form__save-button_content_delete-popup" type="submit">Да</button>
              </fieldset> 
            </form>
          </div>
        </div>

        <template id="elements">
      <div className="element">
        <div className="element__img-container">
          <img className="element__image" alt="#" />
        </div>
        <div className="element__info">
          <h3 className="element__name"></h3>
          <div className="element__like-container">
            <button className="element__like-button" type="button"></button>
            <span className="element__likes-counter"></span>
          </div>
        </div>
        <button className="element__delete-icon"></button>
      </div>
  </template>

      </div>
      </div>
  );
}

export default App;
