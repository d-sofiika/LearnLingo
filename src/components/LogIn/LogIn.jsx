import Modal from "../Modal/Modal";
import css from "./LogIn.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../redux/firebase";

export default function LogIn({ isLogInOpen, setIsLogInOpen }) {
  const FeedbackSchema = Yup.object().shape({
      email: Yup.string()
        .email("Invalid email format")
        .required("Required"),
    password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(30, "Password too long")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/\d/, "Must contain at least one number")
    .matches(/[@$!%*?&]/, "Must contain at least one special character (@$!%*?&)")
    .required("Required"),
  });
  const initValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values, actions) => {
    const { email, password } = values;
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User logged in:", user);

      actions.resetForm();
      setIsLogInOpen(false);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.error("Error:", errorCode, errorMessage);
    }
  };

  return (
    <Modal isOpen={isLogInOpen} onClose={() => setIsLogInOpen(false)}>
      <h2 className={css.title}>Log In</h2>
      <p className={css.descr}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>
      <Formik
        initialValues={initValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
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
            Log In
          </button>
        </Form>
      </Formik>
    </Modal>
  );
}
