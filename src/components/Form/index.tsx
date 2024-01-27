import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Card from "../Card";
import Text from "../Text";

interface Props {
  onSubmit: (data: Form) => void;
}
interface Form {
  city: string;
}

const validationSchema = Yup.object().shape({
  city: Yup.string().email("Invalid city").required("Required"),
});

const Findcity = ({ onSubmit }: Props) => {
  return (
    <Card>
      <Text>{"Weather Temperature"}</Text>
      <Card>
        <Formik initialValues={{ city: "" }} validationSchema={validationSchema} onSubmit={onSubmit}>
          {() => (
            <Form>
              <Card>
                <Text>{"City"}</Text>
                <Field type="text" name="city" placeholder="Search your city" />
                <ErrorMessage name="email" component="div" />
              </Card>
              <button type="submit">{"Submit"}</button>
            </Form>
          )}
        </Formik>
      </Card>
    </Card>
  );
};

export default Findcity;
