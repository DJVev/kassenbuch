import React from 'react';
import { Formik } from 'formik';

import LogoImage from '../../images/Logo.png';
import { Container, Logo, Form } from './styles';

const LoginPage = (props: any) => {
  const onSubmit = () => {};

  return (
    <Formik onSubmit={onSubmit} initialValues={{ email: '', password: '' }}>
      {formikData => {
        return (
          <Container>
            <Logo src={LogoImage} />
            <Form>hallo</Form>
          </Container>
        );
      }}
    </Formik>
  );
};

export default LoginPage;
