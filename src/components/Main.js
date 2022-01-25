import React from 'react';
import avatarPath from '../images/avatar.png';
import api from '../utils/Api';
import Card from './Card'
function Main(props) {

const [userName, setUserName] = React.useState('User');
const [userDescription, setUserDescription] = React.useState('Description');
const [userAvatar, setUserAvatar] = React.useState(avatarPath);
const [cards, setCards] = React.useState([]);

React.useEffect(() => {
  api.getUserInfo()
  .then((data) => {
    setUserName(data.name);
    setUserAvatar(data.avatar);
    setUserDescription(data.about)
  })
  api.getInitialCards()
  .then((data) => {
    setCards(data)
  })
})

    return(
        <main>
          <section className="profile">
            <div className="profile__main">
              <img className="profile__avatar" src={userAvatar} alt="Аватар профиля" />
              <div className="profile__avatar-edit-button" onClick={props.onEditAvatar}/>
              <div className="profile__profile-info">
                <h1 className="profile__name">{userName}</h1>
                <button className="profile__edit-button" type="button" onClick={props.onEditProfile}/>
                <p className="profile__description">{userDescription}</p>
              </div>
            </div>
            <button className="profile__add-button" type="button" onClick={props.onAddPlace}/>
          </section>
          <section className="elements">
            {cards.map((card) => (
                    <Card card={card} key={card._id} onCardClick={props.onCardClick}/>
                  )
            )}

          </section>
        </main>
    )
}

export default Main