import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStile = styled.header`
  background-color: #27408b;
  position: fixed;
  width: 100%;
  height: 80px;
  z-index: 2;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3),
    -23px 0 20px -23px rgba(0, 0, 0, 0.6), 23px 0 20px -23px rgba(0, 0, 0, 0.6),
    inset 0 0 40px rgba(0, 0, 0, 0.1);
`;

export const NavBox = styled.nav`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    gap: 10px;
  }
  @media screen and (min-width: 768px) {
    gap: 30px;
  }
`;

export const ListBox = styled.div`
  display: flex;
  gap: 20px;
`;
export const LinkStyled = styled(NavLink)`
  font-weight: 400;
  line-height: 1.43;
  color: #fff;

  transition: var(--transition);

  &:hover,
  &:focus {
    color: #3470ff;
  }

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const SvgLogo = styled.svg`
  width: 30px;
  height: 30px;
  fill: currentColor;
`;

export const LinkLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #000;
  transition: var(--transition);

  > p {
    font-weight: 600;
    color: currentColor;
  }

  &:hover,
  &:focus {
    color: #3470ff;
  }
`;

export const BurgerIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: none;
  stroke: #fff;
  display: block;
  cursor: pointer;
  transition: var(--transition);

  &:hover,
  &:focus {
    stroke: #3470ff;
  }

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
