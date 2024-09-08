import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import css from './ContactForm.module.css';
// Importă Notiflix dacă dorești să folosești notificări
// import Notiflix from 'notiflix';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    // Obține datele din formular
    const name = form.elements.name.value.trim();
    const phone = form.elements.number.value;

    // Verifică dacă contactul există deja în redux store
    // const contacts = useSelector(selectContacts);
    // const names = contacts.map(contact => contact.name.toLowerCase());
    // if (names.includes(name.toLowerCase())) {
    //   form.reset();
    //   Notiflix.Notify.failure(
    //     `Contact with name '${name}' is already in contacts.`
    //   );
    //   return;
    // }

    dispatch(
      addContact({
        name,
        phone,
      })
    );

    form.reset();
    // Notiflix.Notify.success(
    //   `Contact with name '${name}' has been added successfully to contacts list.`
    // );
  };

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <label className={css.contactForm__label} htmlFor="name">
        Name
      </label>
      <input
        className={css.contactForm__field}
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż]+(([' \-][a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż])?[a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={css.contactForm__label} htmlFor="number">
        Number
      </label>
      <input
        className={css.contactForm__field}
        id="number"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.contactForm__button} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
