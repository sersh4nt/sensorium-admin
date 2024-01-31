import { useForm } from "react-hook-form";
import Form from "src/components/forms/Form";

interface DeviceFormProps {
  defaultValues?: any;
  onSubmit: () => void;
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
      fields={[]}
      errors={errors}
    />
  );
};

export default DeviceForm;
