import React from 'react';
import SideImage from '../components/loginComponents/sideImage/sideImage';
import styled from 'styled-components';
import Form from '../components/loginComponents/formSide/form';

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: row;
`;

const loginContainer = () => {

  return (
    <Container>
      <Form />
      <SideImage />
    </Container>
  );
};

export default loginContainer;