import React, { useState } from 'react';
import {
  BurgerIcon,
  HeaderStile,
  LinkLogo,
  LinkStyled,
  ListBox,
  NavBox,
  SvgLogo,
} from './Header.styled';
import sprite from '../../images/sprite.svg';
import MediaQuery from 'react-responsive';
import BurgerMenu from 'components/BurgerMenu';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <HeaderStile>
      <div className="container-header">
        <NavBox>
          <LinkLogo aria-label="Welcome page" to="/">
            <SvgLogo aria-label="Logo Luxor Car Rental">
              <use href={`${sprite}#icon-logo`} />
            </SvgLogo>
            <p>Luxor Car Rental</p>
          </LinkLogo>
          <MediaQuery minWidth={1440}>
            <ListBox>
              <LinkStyled to="/">Home</LinkStyled>
              <LinkStyled to="/catalog">Catalog</LinkStyled>
              <LinkStyled to="/favorites">Favorites</LinkStyled>
            </ListBox>
          </MediaQuery>
          <MediaQuery maxWidth={1439}>
            <BurgerIcon aria-label="Menu" onClick={toggleMenu}>
              <use href={`${sprite}#icon-burger-menu`} />
            </BurgerIcon>
          </MediaQuery>
          <MediaQuery maxWidth={1439}>
            {isMenuOpen && <BurgerMenu onClick={toggleMenu} />}
          </MediaQuery>
        </NavBox>
      </div>
    </HeaderStile>
  );
}

export default Header;
