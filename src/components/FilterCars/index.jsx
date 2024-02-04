import React, { useState } from 'react';
import {
  ButtonSearch,
  InputBox,
  MileageBox,
  SearchForm,
  Title,
} from './FilterCars.styled';
import arrCarsBrand from '../../resources/makes.json';
import priceArr from '../../resources/prices.json';
import { useDispatch } from 'react-redux';
import { getCarsByFilter } from '../../redux/catalogOperations';

import Form from 'react-bootstrap/Form';

function FilterCars() {
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [maxMileage, setMaxMileage] = useState('');
  const [minMileage, setMinMileage] = useState('');
  const dispatch = useDispatch();

  const searchCars = event => {
    event.preventDefault();
    console.log(brand, price, maxMileage, minMileage);
    dispatch(getCarsByFilter({ brand, price, maxMileage, minMileage }));
  };

  return (
    <div>
      <SearchForm name="search-form" onSubmit={searchCars}>
        <InputBox>
          <div>
            <Title>Car brand</Title>

            <Form.Select
              aria-label="Car brand"
              name="brand"
              onChange={e => {
                setBrand(e.target.value);
              }}
              style={{
                width: '224px',
                height: '48px',
                border: 'none',
                backgroundColor: '#f7f7fb',
                borderRadius: '14px',
                paddingLeft: '18px',
                fontFamily: 'inherit',
                fontWeight: '500',
                fontSize: ' 18px',
                lineHeight: '1.11',
                color: '#121417',
              }}
            >
              <option value="" disabled selected>
                Enter the text
              </option>
              {arrCarsBrand.map((brand, index) => (
                <option value={brand} key={index}>
                  {brand}
                </option>
              ))}
            </Form.Select>
          </div>

          <div>
            <Title>Price/ 1hour</Title>
            <Form.Select
              aria-label="Car price"
              name="price"
              onChange={e => {
                setPrice(e.target.value);
              }}
              style={{
                width: '125px',
                height: '48px',
                border: 'none',
                backgroundColor: '#f7f7fb',
                borderRadius: '14px',
                paddingLeft: '18px',
                fontFamily: 'inherit',
                fontWeight: '500',
                fontSize: ' 18px',
                lineHeight: '1.11',
                color: '#121417',
              }}
            >
              <option value="" disabled selected>
                To $
              </option>
              {priceArr.map((brand, index) => (
                <option value={brand} key={index}>
                  {brand}
                </option>
              ))}
            </Form.Select>
          </div>
          <div>
            <Title>Сar mileage / km</Title>
            <MileageBox>
              <Form.Control
                id="mileage"
                aria-describedby="min cars mileage"
                aria-label="min Mileage"
                type="number"
                name="mileage-min"
                placeholder="From"
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
                  fontFamily: 'inherit',
                  fontWeight: '500',
                  fontSize: ' 18px',
                  lineHeight: '1.11',
                  color: '#121417',
                  borderRight: '1px solid rgba(138, 138, 137, 0.2)',
                }}
              />
              <Form.Control
                aria-label="max Mileage"
                type="number"
                name="mileage-max"
                placeholder="To"
                value={maxMileage}
                onChange={e => {
                  setMaxMileage(e.target.value);
                }}
                style={{
                  width: '136px',
                  height: '48px',
                  border: 'none',
                  paddingLeft: '24px',
                  backgroundColor: '#f7f7fb',
                  borderRadius: '0 14px 14px 0',
                  fontFamily: 'inherit',
                  fontWeight: '500',
                  fontSize: ' 18px',
                  lineHeight: '1.11',
                  color: '#121417',
                }}
              />
            </MileageBox>
          </div>
          <ButtonSearch type="submit">Search</ButtonSearch>
        </InputBox>
      </SearchForm>
    </div>
  );
}

export default FilterCars;
