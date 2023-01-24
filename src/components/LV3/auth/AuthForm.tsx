import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../../LV2/Button/Button";
import { FormValues } from "../../../lib/interface/form";
import InputText from "../../LV2/Form/InputText";
import { Text, Title } from "../../LV1";
import styled, { useTheme } from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

interface AuthFormPropsI {
  type: string;
  validation: any;
}

const AuthForm = (props: AuthFormPropsI) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordC, setShowPasswordC] = useState<boolean>(false);

  const theme = useTheme();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
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
    <Container>
      <WrapStyled>
        <Title
          size="bg"
          className="text-center"
          color={theme.colors.neutral600}
        >
          {props.type}
        </Title>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-3">
            {props.type !== "login" && (
              <InputText
                control={control}
                name="name"
                errors={errors.name?.message}
                label="Name"
                placeholder="Enter name"
              />
            )}

            <InputText
              type="email"
              control={control}
              name="email"
              errors={errors.email?.message}
              label="Email"
              placeholder="Enter email"
            />

            <InputText
              password={true}
              type={showPassword ? "text" : "password"}
              control={control}
              name="password"
              errors={errors.password?.message}
              label="Password"
              placeholder="Enter password"
              showPass={showPassword}
              onClick={() => setShowPassword((prev) => !prev)}
            />

            {props.type !== "login" && (
              <InputText
                password
                type={showPasswordC ? "text" : "password"}
                control={control}
                name="passwordConfirm"
                errors={errors.passwordConfirm?.message}
                label="Confirm Password"
                placeholder="Enter confirm password"
                showPass={showPasswordC}
                onClick={() => setShowPasswordC((prev) => !prev)}
              />
            )}

            <div className="pt-4">
              <Button
                disabled={isSubmitting}
                type="submit"
                textsize="md"
                textcolor={theme.colors.white}
                bordercolor={theme.colors.amber500}
                bgcolor={theme.colors.amber500}
                bghovercolor={theme.colors.amber600}
                borderhovercolor={theme.colors.amber600}
                fullWidth
              >
                Submit
              </Button>
            </div>
          </div>
        </form>

        <div className="flex-center mt-4 mb-3">
          <Link to={props.type === "login" ? "/register" : "/login"}>
            <Text color={theme.colors.neutral400}>
              {props.type === "login" ? "Are you new" : "Have an account"}?{" "}
              <Text
                as="span"
                size="sm"
                weight="lg"
                color={theme.colors.neutral400}
              >
                {props.type === "login" ? "Register" : "Login"}
              </Text>
            </Text>
          </Link>
        </div>
      </WrapStyled>
    </Container>
  );
};

export default AuthForm;

const WrapStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 15px 40px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.neutral300};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.amber50};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
