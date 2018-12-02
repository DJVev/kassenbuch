import styled from '@emotion/styled';
import { Form as UnstyledForm } from 'formik';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const Logo = styled.img`
  display: block;
  height: 80px;
  width: 80px;
  margin-bottom: 24px;
`;

export const Form = styled(UnstyledForm)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
`;
