import React from 'react';
import { LinkStyled, Section, TitleHome } from './HomePage.styled';

function HomePage() {
  return (
    <Section>
      <div className="container">
        <h1 className="visually-hidden">About us</h1>
        <TitleHome>
          <h2>
            Rent your dream car today with <span>Luxor Car Rental</span>
          </h2>
          <p>Easy way to travel with comfort </p>
          <LinkStyled to="/catalog">Find a car</LinkStyled>
        </TitleHome>
      </div>
    </Section>
  );
}

export default HomePage;
