import '../index.css';
import Header from './Header.js'
import Main from './Main';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import React from 'react';
function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

function handleCardClick(card) {
  setSelectedCard(card)
}

function handleEditAvatarClick() {
  setEditAvatarPopupOpen(!isEditAvatarPopupOpen)
}

function handleEditProfileClick() {
  setEditProfilePopupOpen(!isEditProfilePopupOpen);
}

function handleAddPlaceClick() {
  setAddPlacePopupOpen(!isAddPlacePopupOpen);
}

function closeAllPopups() {
  setEditProfilePopupOpen(false);
  setAddPlacePopupOpen(false);
  setEditAvatarPopupOpen(false);
  setSelectedCard({});
}

  return (
    <div className='window'>
<div className='page'>
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}  onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
        <PopupWithForm name='new-avatar' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <input className="form__input" id="new-avatar-input" type="url" placeholder="Ссылка" name="avatar" required />
          <span className="form__error" id="new-avatar-input-error" />
        </PopupWithForm>

        <PopupWithForm name='element' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <input className="form__input" id="element-name-input" type="text" placeholder="Название" name="name" required maxLength={30} minLength={2} />
          <span className="form__error" id="element-name-input-error" />
          <input className="form__input" id="url-input" type="url" placeholder="Ссылка на картинку" name="link" required />
          <span className="form__error" id="url-input-error" />
        </PopupWithForm>

        <PopupWithForm name='delete-popup' title='Вы уверены?'/>

        <PopupWithForm name='bio' title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <input className="form__input form__input_content_name" id="profile-name-input" type="text" placeholder="Имя" name="name" required minLength={2} maxLength={40} />
          <span className="form__error" id="profile-name-input-error" />
          <input className="form__input form__input_content_description" id="description-input" type="text" placeholder="Описание" name="about" required minLength={2} maxLength={200} />
          <span className="form__error" id="description-input-error" />
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
        
      </div>
      </div>
  );
}

export default App;
