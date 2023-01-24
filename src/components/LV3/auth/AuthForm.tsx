import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../../LV2/Button/Button";
import { FormValues } from "../../../lib/interface/form";
import InputText from "../../LV2/Form/InputText";

interface AuthFormPropsI {
  type: string;
  validation: any;
}

// type FormData = {
//   type: "name" | "email" | "password" | "passwordConfirm";
//   label: string;
//   placeholder: string;
//   isLogin?: "hide";
// };

// const formData: FormData[] = [
//   {
//     type: "name",
//     label: "Name",
//     placeholder: "Enter your name",
//     isLogin: "hide",
//   },
//   { type: "email", label: "Email", placeholder: "Enter your email" },
//   { type: "password", label: "Password", placeholder: "Enter your password" },
//   {
//     type: "passwordConfirm",
//     label: "Confirm Password",
//     placeholder: "Enter your confirm password",
//     isLogin: "hide",
//   },
// ];

const AuthForm = (props: AuthFormPropsI) => {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    resolver: yupResolver(props.validation),
    mode: "onChange",
  });

  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        {props.type !== "login" && (
          <InputText
            control={control}
            name="name"
            label="Name"
            placeholder="Enter name"
          />
        )}

        <InputText
          type="email"
          control={control}
          name="email"
          label="Email"
          placeholder="Enter email"
        />

        <InputText
          type="password"
          control={control}
          name="password"
          label="Password"
          placeholder="Enter password"
        />

        {props.type !== "login" && (
          <InputText
            type="password"
            control={control}
            name="passwordConfirm"
            label="Confirm Password"
            placeholder="Enter confirm password"
          />
        )}

        <Button type="submit" textsize="md" fullWidth>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default AuthForm;
