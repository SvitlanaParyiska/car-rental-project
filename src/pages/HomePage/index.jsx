import React from 'react';
import {
  AdvantagesList,
  HomePageBox,
  LinkStyled,
  Section,
} from './HomePage.styled';

function HomePage() {
  return (
    <Section>
      <HomePageBox className="container">
        <h1 className="visually-hidden">About us</h1>
        <div>
          <h2>Advantages of Car Rental</h2>
          <AdvantagesList>
            <li>Freedom and Flexibility</li>
            <li>Comfort and Privacy</li>
            <li>Time and Energy Savings</li>
            <li>Cost-Effectiveness</li>
          </AdvantagesList>
        </div>
        <LinkStyled to="/catalog">Catalog</LinkStyled>
      </HomePageBox>
    </Section>
  );
}

export default HomePage;
