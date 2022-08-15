import { ChangeEvent, useState } from 'react';

interface UseFormProps<InitialValuesType> {
  initialValues: InitialValuesType;
  onSubmit: (values: InitialValuesType) => void;
  validate: (initialValues: InitialValuesType) => InitialValuesType;
}

const useForm = ({ initialValues, onSubmit, validate }: UseFormProps<any>) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, unknown>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setIsLoading(true);
    e.preventDefault();

    const newErrors = validate ? validate(values) : {};

    if (Object.keys(newErrors).length === 0) {
      await onSubmit({ ...values, e });
    }

    setErrors(newErrors);
    setIsLoading(false);
  };
  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
