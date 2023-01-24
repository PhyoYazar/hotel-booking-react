import * as yup from "yup";

import { Title } from "../../LV1";
import AuthForm from "./AuthForm";

const registerValidation = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(40).required(),
    passwordConfirm: yup.string().min(6).max(40).required(),
  })
  .required();

const Register = () => {
  return (
    <section>
      <AuthForm type="register" validation={registerValidation} />
    </section>
  );
};

export default Register;
