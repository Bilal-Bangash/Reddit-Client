import React from "react";
import { Formik, Form } from "formik";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import Wrapper from "../components/Wrapper";
interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  const validateName = () => {
    console.log("Validate Name Called....");
  };
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          console.log("submit", values);
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   actions.setSubmitting(false);
          // }, 1000);
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input
                  value={values.username}
                  id="username"
                  onChange={handleChange}
                  placeholder="Username"
                />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};
export default Register;
