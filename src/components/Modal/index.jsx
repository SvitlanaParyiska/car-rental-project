import React, { useEffect } from 'react';
import sprite from '../../images/sprite.svg';
import { createPortal } from 'react-dom';
import { nanoid } from 'nanoid';
import {
  AccessList,
  AddressList,
  BtnClose,
  ConditionsList,
  FuilList,
  Image,
  ImageThumb,
  ModalDiv,
  ModalOverlay,
  RentalLink,
  SvgClose,
} from './Modal.styled';
import {
  getAddressCity,
  getAddressCountry,
  getRentalConditions,
} from 'helpers/itemCarHelpers';

const modalRoot = document.querySelector('#modal-root');

function Modal({ carData, closeModal }) {
  useEffect(() => {
    function onCloseModal({ code }) {
      if (code === 'Escape') {
        closeModal();
      }
    }
    window.addEventListener('keydown', onCloseModal);
    return () => {
      window.removeEventListener('keydown', onCloseModal);
    };
  }, [closeModal]);

  const handlerCloseModal = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  const rentalConditionValid = getRentalConditions(carData.rentalConditions);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return createPortal(
    <ModalOverlay onClick={handlerCloseModal}>
      <ModalDiv>
        <BtnClose type="button" onClick={() => closeModal()}>
          <SvgClose>
            <use href={`${sprite}#icon-x`}></use>
          </SvgClose>
        </BtnClose>
        <ImageThumb>
          <Image src={carData.img} alt={carData.model} />
        </ImageThumb>
        <h2>
          {carData.make}
          <span> {carData.model}</span>, {carData.year}
        </h2>
        <AddressList>
          <li>{getAddressCity(carData.address)}</li>
          <li>{getAddressCountry(carData.address)}</li>
          <li>Id: {carData.id}</li>
          <li>Year: {carData.year}</li>
          <li>Type: {carData.type}</li>
        </AddressList>
        <FuilList>
          <li>Fuel Consumption: {carData.fuelConsumption}</li>
          <li>Engine Size: {carData.engineSize}</li>
        </FuilList>
        <p>{carData.description}</p>
        <h3>Accessories and functionalities:</h3>
        <AccessList>
          {carData.accessories.map(item => (
            <li key={nanoid()}>{item}</li>
          ))}
          {carData.functionalities.map(item => (
            <li key={nanoid()}>{item}</li>
          ))}
        </AccessList>
        <h3>Rental Conditions:</h3>
        <ConditionsList>
          <li>
            Minimum age :<span> {rentalConditionValid[0]}</span>
          </li>
          <li>{rentalConditionValid[1]}</li>
          <li>{rentalConditionValid[2]}</li>
        </ConditionsList>
        <ConditionsList>
          <li>
            Mileage:
            <span>
              {carData.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
          </li>
          <li>
            Price: <span>{carData.rentalPrice.toString().slice(1)}$</span>
          </li>
        </ConditionsList>
        <RentalLink href="tel:+380730000000">Rental Car</RentalLink>
      </ModalDiv>
    </ModalOverlay>,
    modalRoot
  );
}

export default Modal;
