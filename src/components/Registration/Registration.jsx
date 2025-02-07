import Modal from "../Modal/Modal";
import css from "./Registration.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../redux/firebase";
import { ref, set } from "firebase/database";

export default function Registration({
  isRegistrationOpen,
  setIsRegistrationOpen,
}) {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too long!")
      .matches(/^[a-zA-Z\s]+$/, "Only letters are allowed")
      .required("Required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .max(30, "Password too long")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/[a-z]/, "Must contain at least one lowercase letter")
      .matches(/\d/, "Must contain at least one number")
      .matches(
        /[@$!%*?&]/,
        "Must contain at least one special character (@$!%*?&)"
      )
      .required("Required"),
  });

  const initValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (values, actions) => {
    const { name, email, password } = values;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User registered:", user);

      await set(ref(db, "users/" + user.uid), {
        name: name,
        email: email,
      });
      console.log("User name and email added to Realtime Database");

      actions.resetForm();
      setIsRegistrationOpen(false);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error:", errorCode, errorMessage);
      alert("Error: " + error.message);
    }
  };

  return (
    <Modal
      isOpen={isRegistrationOpen}
      onClose={() => setIsRegistrationOpen(false)}
    >
      <h2 className={css.title}>Registration</h2>
      <p className={css.descr}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>
      <Formik
        initialValues={initValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            name="name"
            placeholder="Name"
          />
          <ErrorMessage name="name" component="span" className={css.error} />
          <Field
            className={css.input}
            type="email"
            name="email"
            placeholder="Email"
          />
          <ErrorMessage name="email" component="span" className={css.error} />
          <Field
            className={css.input}
            type="password"
            name="password"
            placeholder="Password"
          />
          <ErrorMessage
            name="password"
            component="span"
            className={css.error}
          />
          <button type="submit" className={css.btn}>
            Sign Up
          </button>
        </Form>
      </Formik>
    </Modal>
  );
}
