import * as yup from "yup";

import { Title } from "../../LV1";
import AuthForm from "./AuthForm";

const loginValidation = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(40).required(),
  })
  .required();

const Login = () => {
  return (
    <section>
      <AuthForm type="login" validation={loginValidation} />
    </section>
  );
};

export default Login;
