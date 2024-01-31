import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface Props {
  onSubmit: (data: { city: string }) => void;
}

const validationSchema = Yup.object().shape({
  city: Yup.string().required("Please enter a city"),
});

const FormCity = ({ onSubmit }: Props) => {
  const initialValues = { city: "" };

  return (
    <Formik initialValues={initialValues} onSubmit={(values) => onSubmit({ city: values.city })} validationSchema={validationSchema}>
      <Form>
        <div>
          <label htmlFor="city">City:</label>
          <Field type="text" id="city" name="city" />
          <ErrorMessage component="div" name="city" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormCity;
