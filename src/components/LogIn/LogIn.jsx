import Modal from "../Modal/Modal";
import css from "./LogIn.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";


export default function LogIn({ isLogInOpen, setIsLogInOpen }) {
  const FeedbackSchema = Yup.object().shape({
  email: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
password: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required")
  });
  const initValues = {
    email: "",
    password: "",
  };

   const handleSubmit = (values, actions) => {
		console.log(values);
		actions.resetForm();
	};

  return (
    <Modal isOpen={isLogInOpen} onClose={() => setIsLogInOpen(false)}>
      <h2 className={css.title}>Log In</h2>
      <p className={css.descr}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>
      <Formik initialValues={initValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
        <Form className={css.form}>
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
