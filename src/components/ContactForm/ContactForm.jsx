// import { Formik, Form } from 'formik';
export default function ContactForm ({onAdd}) {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        onAdd({
            id:(Date.now()),
            name:evt.target.elements.name.value,
            number:evt.target.elements.number.value
        })
        evt.target.reset();
      };
    return (
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" />
          <input type="number" name="number" />
          <button type="submit">Add contact</button>
        </form>
      );
  }