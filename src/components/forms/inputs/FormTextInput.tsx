import { TextInput } from "@mantine/core";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FormField } from "../Form";

export const FormTextInput = ({
  label,
  description,
  name,
  control,
  placeholder,
  required,
  validate,
}: FormField) => {
  const { t } = useTranslation();

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: required ? "field_required" : undefined, validate }}
      render={({ field, fieldState }) => (
        <TextInput
          label={t(label)}
          description={description && t(description)}
          placeholder={placeholder && t(placeholder)}
          required={required}
          error={fieldState?.error?.message && t(fieldState.error.message)}
          {...field}
        />
      )}
    />
  );
};
