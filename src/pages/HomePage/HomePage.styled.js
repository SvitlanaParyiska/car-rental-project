import styled from 'styled-components';
import car from '../../images/car.png';

export const HomePageBox = styled.div`
  @media screen and (min-width: 768px) {
    background-image: url(${car});
    background-repeat: no-repeat;
    background-position: 100% 50%;
    background-size: 60%;
  }
`;

export const AdvantagesList = styled.ul`
  > li {
    margin-top: 20px;
  }
`;
