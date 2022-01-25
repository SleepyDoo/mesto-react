export default function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  } 

    return(
      <div className="element">
        <div className="element__img-container">
          <img className="element__image" alt={props.card.name} src={props.card.link} onClick={handleClick}/>
        </div>
        <div className="element__info">
          <h3 className="element__name">{props.card.name}</h3>
          <div className="element__like-container">
          <button className="element__like-button" type="button"></button>
          <span className="element__likes-counter">{props.card.likes.length}</span>
          </div>
        </div>
        <button className="element__delete-icon"></button>
      </div>
    )
}