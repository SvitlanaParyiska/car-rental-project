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
import Select from 'react-select';

import { getOptions } from 'helpers/filterHelpers';
import getCustomStyles from './FilterCustomStyles';

function FilterCars() {
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [maxMileage, setMaxMileage] = useState('');
  const [minMileage, setMinMileage] = useState('');
  const dispatch = useDispatch();

  const searchCars = event => {
    event.preventDefault();
    dispatch(getCarsByFilter({ brand, price, maxMileage, minMileage }));
  };

  const brandOptions = getOptions(arrCarsBrand, 'Enter the text');

  return (
    <div>
      <SearchForm name="search-form" onSubmit={searchCars}>
        <InputBox>
          <div>
            <Title>Car brand</Title>
            <Select
              options={brandOptions}
              aria-label="Car brand"
              styles={getCustomStyles}
              placeholder="Enter the text"
              onChange={e => {
                setBrand(e.value);
              }}
              theme={theme => ({
                ...theme,
                colors: {
                  ...theme.colors,
                },
              })}
            />
          </div>
          <div>
            <Title>Price/ 1hour</Title>
            <Form.Select
              aria-label="Car price"
              name="price"
              defaultValue=""
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
              <option value="" disabled>
                To $
              </option>
              {priceArr.map((price, index) => (
                <option value={`To ${price}$`} key={index}>
                  {price}
                </option>
              ))}
            </Form.Select>
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
