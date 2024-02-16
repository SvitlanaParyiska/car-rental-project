import React, { useState } from 'react';
import {
  ButtonSearch,
  InputBox,
  MileageBox,
  PriceValue,
  SearchForm,
  Title,
} from './FilterCars.styled';
import arrCarsBrand from '../../resources/makes.json';
import priceArr from '../../resources/prices.json';

import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import { getOptions } from 'helpers/filterHelpers';
import { brandCustomStyle, priceCustomStyle } from './FilterCustomStyles';

function FilterCars({ getCarsByFilter }) {
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [maxMileage, setMaxMileage] = useState('');
  const [minMileage, setMinMileage] = useState('');

  const searchCars = event => {
    event.preventDefault();
    getCarsByFilter(brand, price, maxMileage, minMileage);
  };

  const brandOptions = getOptions(arrCarsBrand, 'All brand');
  const priceOption = getOptions(priceArr, 'All price');

  return (
    <div>
      <SearchForm name="search-form" onSubmit={searchCars}>
        <InputBox>
          <div>
            <Title>Car brand</Title>
            <Select
              options={brandOptions}
              aria-label="Car brand"
              styles={brandCustomStyle}
              placeholder="Enter the text"
              onChange={e => {
                setBrand(e.value);
              }}
            />
          </div>
          <div style={{ position: 'relative' }}>
            <PriceValue>{`To ${price}$`}</PriceValue>
            <Title>Price/ 1hour</Title>
            <Select
              options={priceOption}
              aria-label="Car prices"
              styles={priceCustomStyle}
              placeholder=""
              onChange={e => {
                setPrice(e.value);
              }}
            />
          </div>
          <div>
            <Title>Сar mileage / km</Title>
            <MileageBox>
              <div style={{ position: 'relative' }}>
                <span>{`From ${minMileage.replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ','
                )}`}</span>
                <Form.Control
                  id="mileage"
                  aria-describedby="min cars mileage"
                  aria-label="min Mileage"
                  type="number"
                  name="mileage-min"
                  className="input-form"
                  autoComplete="off"
                  value={minMileage}
                  onChange={e => {
                    setMinMileage(e.target.value);
                  }}
                  style={{
                    width: '136px',
                    height: '48px',
                    border: 'none',
                    backgroundColor: '#f7f7fb',
                    borderRadius: '14px 0 0 14px',
                    paddingLeft: '24px',
                    color: '#f7f7fb',
                    cursor: 'pointer',
                    borderRight: '1px solid rgba(138, 138, 137, 0.2)',
                  }}
                />
              </div>
              <div style={{ position: 'relative' }}>
                <span>{`To ${maxMileage.replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ','
                )}`}</span>
                <Form.Control
                  className="input-form"
                  aria-label="max Mileage"
                  type="number"
                  name="mileage-max"
                  autoComplete="off"
                  value={maxMileage}
                  onChange={e => {
                    setMaxMileage(e.target.value);
                  }}
                  style={{
                    width: '136px',
                    height: '48px',
                    border: 'none',
                    paddingLeft: '24px',
                    cursor: 'pointer',
                    backgroundColor: '#f7f7fb',
                    borderRadius: '0 14px 14px 0',
                    color: '#f7f7fb',
                  }}
                />
              </div>
            </MileageBox>
          </div>
          <ButtonSearch type="submit">Search</ButtonSearch>
        </InputBox>
      </SearchForm>
    </div>
  );
}

export default FilterCars;
