import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import fetchweather from "@/libs/weatherAPI";

const validationSchema = Yup.object().shape({
  city: Yup.string().required("Required"),
});

const Searchbar = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4">
      <Formik
        initialValues={{ city: "" }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setErrors }) => {
          try {
            // Call fetchweather and pass the city from the form values
            await fetchweather(values.city);
            // If the city is valid, navigate to the next page
            router.push(`/weather-result/${values.city}`);
          } catch (error) {
            // If fetchweather throws an error, display it in the form errors
            if (error instanceof Error) {
              setErrorMessage(error.message);
            }
          }
        }}>
        {({ errors, touched }) => (
          <>
            <Form className="flex gap-4">
              <Field name="city" className="flex w-96 h-20 bg-teal-100 border-none outline-none rounded-full pl-10 text-gray-700 text-lg" placeholder="Search your city" />
              <button type="submit" className="flex justify-center items-center w-20 h-20 bg-teal-100 rounded-full cursor-pointer">
                <span>
                  <FaSearch />
                </span>
              </button>
            </Form>
            {(touched.city && errors.city) || errorMessage ? <p className="error text-2xl text-red-500 pl-6">{(touched.city && errors.city) || errorMessage}</p> : null}
          </>
        )}
      </Formik>
    </div>
  );
};
export default Searchbar;
