import React from 'react';
import ScrollToTop from 'react-scroll-up';
import sprite from '../../images/sprite.svg';
import { SvgUp } from './ScrollUp.styled';

function ScrollUp() {
  return (
    <ScrollToTop
      style={{
        bottom: '50px',
        right: '50px',
      }}
      showUnder={160}
    >
      <SvgUp>
        <use href={`${sprite}#icon-angles-up-solid`} />
      </SvgUp>
    </ScrollToTop>
  );
}

export default ScrollUp;
