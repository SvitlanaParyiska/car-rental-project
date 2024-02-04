import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStile = styled.header`
  background-color: #27408b;
`;

export const NavBox = styled.nav`
  display: flex;
  gap: 30px;
`;

export const LinkStyled = styled(NavLink)`
  font-weight: 600;
  font-size: 18px;
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
