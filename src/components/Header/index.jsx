import React from 'react';
import { HeaderStile, LinkStyled, NavBox, SvgLogo } from './Header.styled';
import sprite from '../../images/sprite.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <HeaderStile>
      <div className="container-header">
        <NavBox>
          <Link aria-label="Welcome page" to="/">
            <SvgLogo>
              <use href={`${sprite}#icon-logo`} />
            </SvgLogo>
          </Link>
          <LinkStyled to="/">Home</LinkStyled>
          <LinkStyled to="/catalog">Catalog</LinkStyled>
          <LinkStyled to="/favorites">Favorites</LinkStyled>
        </NavBox>
      </div>
    </HeaderStile>
  );
}

export default Header;
