import styled from 'styled-components';
import car from '../../images/audi.jpg';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.8),
      rgba(46, 47, 66, 0.2)
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

export const TitleHome = styled.div`
  max-width: 400px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;

  > h2 {
    font-size: 22px;
    margin-top: 20px;
    color: #fff;

    > span {
      display: block;
      font-size: 28px;
      margin-top: 10px;
    }
  }

  > p {
    font-size: 22px;
    margin-top: 30px;
    color: #fff;
  }
`;

export const LinkStyled = styled(Link)`
  display: inline-block;
  margin-top: 44px;
  border-radius: 12px;
  padding: 12px 50px;
  background-color: #3470ff;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  color: #fff;
  transition: var(--transition);

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
