import { Device } from "src/models";
import { useForm } from "react-hook-form";
import Form from "../forms/Form";

interface DeviceFormProps {
  defaultValues?: Device;
  onSubmit: (data: any) => void;
}

const DeviceForm: React.FC<DeviceFormProps> = ({ defaultValues, onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  return (
    <Form
      control={control}
      onSubmit={handleSubmit(onSubmit)}
      fields={[{ name: "name", type: "text", label: "text", required: true }]}
      errors={errors}
    />
  );
};

export default DeviceForm;
