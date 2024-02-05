import { NavLink } from 'react-router-dom';
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
  gap: 30px;
`;

export const LinkStyled = styled(NavLink)`
  font-weight: 400;
  font-size: 24px;
  line-height: 1.43;
  color: #fff;

  transition: var(--transition);

  &:hover,
  &:focus {
    color: #3470ff;
  }
`;

export const SvgLogo = styled.svg`
  width: 30px;
  height: 30px;
  transition: var(--transition);

  &:hover,
  &:focus {
    fill: #3470ff;
  }
`;
