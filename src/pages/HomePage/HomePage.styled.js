import styled from 'styled-components';
import car from '../../images/rentcar.jpg';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
    ),
    url(${car});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HomePageBox = styled.div`
  h2 {
    font-weight: 500;
    font-size: 26px;
    color: #fff;
  }
`;

export const AdvantagesList = styled.ul`
  > li {
    font-size: 22px;
    margin-top: 20px;
    color: #fff;
  }
`;

export const LinkStyled = styled(Link)`
  display: inline-block;
  margin-top: 24px;
  border-radius: 12px;
  padding: 12px 50px;
  background-color: #3470ff;
  font-weight: 600;
  font-size: 14px;
  line-height: 143%;
  color: #fff;
  transition: var(--transition);

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
