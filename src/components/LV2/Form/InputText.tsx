import styled, { useTheme } from "styled-components";
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  FieldError,
  //   UseControllerProps,
} from "react-hook-form";

import { FormValues } from "../../../lib/interface/form";
import { Image, Text } from "../../LV1";

interface Props<T extends FieldValues> {
  // errors: FieldError | undefined;
  name: FieldPath<FormValues>;
  control: Control<FormValues>;
  defaultValue?: any;

  errors: string | undefined;
  label: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;

  password?: boolean;
  showPass?: boolean;
  onClick?: () => void;
}

const InputText = <T extends FieldValues>(props: Props<T>) => {
  const theme = useTheme();

  return (
    <div className="flex flex-col gap-1">
      <LabelStyled htmlFor={props.name}>{props.label}</LabelStyled>
      <div className="relative">
        <Controller
          name={props.name}
          control={props.control}
          render={({ field }) => (
            <InputStyled
              {...field}
              type={props.type ? props.type : "text"}
              id={props.name}
              placeholder={props.placeholder}
              disabled={props.disabled}
            />
          )}
          defaultValue={props.defaultValue}
          rules={{ required: true }}
        />

        {props.password && (
          <div
            className="absolute top-0 right-2 h-full flex items-center z-10 cursor-pointer"
            onClick={props.onClick}
          >
            <Image
              iconType={props.showPass ? "eyeOpen" : "eyeClose"}
              width={25}
              height={25}
              fillColor={theme.colors.neutral700}
            />
          </div>
        )}

        {props.errors && <ErrorTextStyled>{props.errors}</ErrorTextStyled>}
      </div>
    </div>
  );
};

export default InputText;

const ErrorTextStyled = styled(Text)`
  color: ${({ theme }) => theme.colors.rose400};
`;

const LabelStyled = styled.label`
  font-size: ${({ theme }) => theme.fontSize.md}px;
  font-weight: ${({ theme }) => theme.fontWeight.lg};
  color: ${({ theme }) => theme.colors.neutral600};
`;

const InputStyled = styled.input`
  width: 300px;
  padding: 5px 10px;
  font-size: ${({ theme }) => theme.fontSize.md}px;

  border: 3px solid ${({ theme }) => theme.colors.neutral400};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.neutral600};

  /* transition: all 0.1s; */

  &:active,
  &:focus {
    outline: none;
    border: 3px solid ${({ theme }) => theme.colors.neutral500};
  }
`;
