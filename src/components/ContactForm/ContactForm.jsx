import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";


export default function ContactForm ({onAdd}) {
    // const handleSubmit = (evt) => {
    //     evt.preventDefault();
    //     onAdd({
    //         id:(Date.now()),
    //         name:evt.target.elements.name.value,
    //         number:evt.target.elements.number.value
    //     })
    //     evt.target.reset();
    //   };
    const ContactFormSchema = Yup.object().shape({
      name: Yup.string()
      .min(3, "Too Short!")
      .max(50,"Too Long!")
      .required("Required"),
      number: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long").required("Required"),
    });
    const initialValues = {
      id: "",
      name: "",
      number: "",
     
    };
    
      const nameFieldId = useId();
      const numberlFieldId = useId();
     
    
      const handleSubmit = (values, actions) => {
       onAdd(values);
        actions.resetForm();
      };

    return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ContactFormSchema}>
        <Form >
        <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId}/>
          <label htmlFor={numberlFieldId}>Number</label>
          <ErrorMessage name="name" component="span" />
          <Field type="number" name="number" id={numberlFieldId} />
          <ErrorMessage name="number" component="span" />
          <button type="submit">Add contact</button>
        </Form>
        </Formik>
      );}