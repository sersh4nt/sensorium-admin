import { Button, MantineSpacing, Stack, Text } from "@mantine/core";
import {
  Control,
  FieldErrors,
  FieldValues,
  ValidateResult,
} from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FormPasswordInput, FormTextInput } from "./inputs";

type FieldType = "text" | "password";

export interface FormFieldDescription {
  type: FieldType;
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  description?: string;
  validate?: (
    value: any,
    fieldValues: any
  ) => ValidateResult | Promise<ValidateResult>;
}

export interface FormField extends FormFieldDescription {
  control: Control;
}

const createFormField = (
  field: FormFieldDescription,
  control: Control<any, any>,
  key: number
) => {
  switch (field.type) {
    case "text":
      return <FormTextInput {...field} control={control} key={key} />;
    case "password":
      return <FormPasswordInput {...field} control={control} key={key} />;
  }
};

interface FormProps<DT extends FieldValues> {
  control: Control<DT, any>;
  fields: FormFieldDescription[];
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  isLoading?: boolean;
  submitBtnText?: string;
  extraBefore?: JSX.Element | null;
  extraAfter?: JSX.Element | null;
  spacing?: MantineSpacing;
  errors: FieldErrors<DT>;
}

const Form = <DT extends FieldValues>({
  onSubmit,
  fields,
  control,
  isLoading = false,
  submitBtnText,
  extraBefore,
  extraAfter,
  spacing = "md",
  errors,
}: FormProps<DT>) => {
  const { t } = useTranslation();

  return (
    <form onSubmit={onSubmit}>
      <Stack gap={spacing}>
        {fields.map((field, key) => createFormField(field, control, key))}
      </Stack>

      {extraBefore && extraBefore}

      <Button fullWidth mt="xl" type="submit" loading={isLoading}>
        {t(submitBtnText ?? "submit")}
      </Button>

      {errors.root?.message ? (
        <Text mt="sm" c="red">
          {t(errors.root.message)}
        </Text>
      ) : null}

      {extraAfter && extraAfter}
    </form>
  );
};

export default Form;
