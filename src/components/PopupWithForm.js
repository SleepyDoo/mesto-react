function PopupWithForm(props) {
    return(
        <div className={props.isOpen ? `popup popup_content_${props.name} popup_opened` : `popup popup_content_${props.name}`}> 
          <div className="popup__container">
            <button className="popup__close-button popup__close-button_content_edit-bio" type="button" onClick={props.onClose}/>
            <form className="form" name={props.name} noValidate>
              <h2 className="form__heading">{props.title}</h2>
              <fieldset className="form__fieldset">
                {props.children}
                <button className="form__save-button" type="submit" >Сохранить</button>
              </fieldset>
            </form>
          </div>
        </div>
    )
}

export default PopupWithForm;
{/* <input className="form__input form__input_content_name" id="profile-name-input" type="text" placeholder="Имя" name="name" required minLength={2} maxLength={40} />
                <span className="form__error" id="profile-name-input-error" />
                <input className="form__input form__input_content_description" id="description-input" type="text" placeholder="Описание" name="about" required minLength={2} maxLength={200} />
                <span className="form__error" id="description-input-error" /> */}

