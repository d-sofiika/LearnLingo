import Modal from "../Modal/Modal";
import css from "./Registration.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";


export default function Registration({ isRegistrationOpen, setIsRegistrationOpen }) {
    const FeedbackSchema = Yup.object().shape({
      name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  email: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
password: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required")
  });
    const initValues = {
      name: "",
    email: "",
    password: "",
  };

   const handleSubmit = (values, actions) => {
        console.log(values);
        actions.resetForm();
    };

  return (
    <Modal isOpen={isRegistrationOpen} onClose={() => setIsRegistrationOpen(false)}>
      <h2 className={css.title}>Registration</h2>
      <p className={css.descr}>
        Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information
      </p>
      <Formik initialValues={initValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
              <Form className={css.form}>
                  <Field className={css.input} type="text" name="name"  placeholder="Name" />
          <ErrorMessage name="name" component="span" className={css.error} />
          <Field className={css.input} type="email" name="email"  placeholder="Email" />
          <ErrorMessage name="email" component="span" className={css.error} />
          <Field className={css.input} type="password" name="password"  placeholder="Password"/>
          <ErrorMessage name="password" component="span" className={css.error}/>
          <button type="submit" className={css.btn}>
            Log In
          </button>
        </Form>
      </Formik>
    </Modal>
  );
}
