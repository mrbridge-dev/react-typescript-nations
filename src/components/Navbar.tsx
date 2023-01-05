import { Brightness6Sharp } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100vw;
    height: 80px;
    display: flex;
    padding-left: 80px;
    padding-right: 80px;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-elements);
    position: sticky;
    top: 0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
    & a {
      display: content;
      text-decoration: none;
    }
    @media screen and (max-width: 480px) {
      padding-left: 28px;
      padding-right: 28px;
    }
`;
const Div = styled.div`
    display: contents;
    width: 130px;
`;

const Title = styled.h2`
  @media screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 12px;
  }
`;

const Span = styled.span`
  @media screen and (max-width: 480px) {
      font-size: 12px;
    }
`;

const Mode = styled.p`
  width: 100px;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
  color: hsl(0, 0%, 100%);
  &: svg {
    fill: var(--color-text);
    @media screen and (max-width: 480px) {
      font-size: 12px;
      line-hight: 16px;
    }
  };
  &: ${Span} {
    fill: var(--color-text);
    font-weight: 600;
    @media screen and (max-width: 480px) {
      font-size: 12px;
      line-hight: 16px;
    }
  }
  @media screen and (max-width: 480px) {
    width: 87px;
  }
`;



const Navbar:React.FC = () => {
  return (
    <Container>
        <Link to="/">
          <Div>
            <Title>Where in the world...</Title>
            <Span>is that country?</Span>
          </Div>
        </Link>
        <Mode id="themeToggler">
          <Brightness6Sharp />
          <Span>Go Dark</Span>
        </Mode>
    </Container>
  )
}

export default Navbar