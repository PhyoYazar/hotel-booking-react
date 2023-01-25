import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import InputText from "../../LV2/Form/InputText";
import Button from "../../LV2/Button/Button";
import { apiController, apiRoutes } from "../../../controllers";
import { APILoginResInterface } from "../../../lib/interface/auth";
import { getUserInfo, setUserInfo } from "../../../services/auth";

const nameValidation = yup
  .object()
  .shape({
    name: yup.string().required(),
  })
  .required();

type NameType = {
  name: string;
};

const NameChangeForm = () => {
  const userData = getUserInfo();

  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    control,
  } = useForm<NameType>({
    mode: "onChange",
    defaultValues: {
      name: userData?.name,
    },
    resolver: yupResolver(nameValidation),
  });

  const onSubmit = async (data: NameType) => {
    const res: APILoginResInterface = await apiController({
      endpoint: apiRoutes.updateUserName,
      data,
    });
    if (res?.status === "success") {
      setUserInfo({ user_data: res.data });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputText
        control={control}
        name="name"
        errors={errors.name?.message}
        label="Name"
        placeholder="Enter name"
      />

      <div className="pt-4">
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
};

export default NameChangeForm;
