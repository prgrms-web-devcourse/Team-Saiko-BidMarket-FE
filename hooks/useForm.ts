import { ChangeEvent, useState } from 'react';

type InitialValuesType = {};

interface useFormProps {
  initialValues: InitialValuesType;
  onSubmit: (values: InitialValuesType) => void;
  validate: (initialValues: InitialValuesType) => {};
}

const useForm = ({ initialValues, onSubmit, validate }: useFormProps) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e: SubmitEvent) => {
    setIsLoading(true);
    e.preventDefault();

    const newErrors = validate ? validate(values) : {};

    if (Object.keys(newErrors).length === 0) {
      await onSubmit({ ...values });
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
