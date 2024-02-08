import React, { useEffect, useState } from 'react';
import sprite from '../../images/sprite.svg';
import defaultPicture from '../../images/images.jpg';
import Modal from 'components/Modal';
import { addFavorite, deleteFavorite } from '../../redux/catalogSlice';
import {
  AddressList,
  BtnFav,
  Button,
  CarItem,
  GradientBox,
  Image,
  ImgThumb,
  ModelList,
  SvgFav,
  SvgFavAdd,
  Title,
  TitleBox,
} from './CatalogItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAccent,
  getAddressCity,
  getAddressCountry,
  getPremiumCar,
} from 'helpers/itemCarHelpers';
import { selectCarsFavorites } from '../../redux/catalogSelectors';
import Notiflix from 'notiflix';

function CatalogItem({ car, index }) {
  const [isShowModal, setIsShowModal] = useState(false);
  const [showCar, setShowCar] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);
  const favCarsArray = useSelector(selectCarsFavorites);
  const dispatch = useDispatch();

  useEffect(() => {
    if (favCarsArray.some(item => item.id === car.id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [car.id, favCarsArray]);

  const showModal = () => {
    setIsShowModal(true);
    setShowCar(car);
  };

  const closeModal = () => {
    setIsShowModal(false);
    setShowCar({});
  };

  const handleFav = () => {
    if (isFavorite) {
      dispatch(deleteFavorite(car.id));
      Notiflix.Notify.success('Car was successful deleted!', {
        timeout: 2000,
      });
    } else {
      dispatch(addFavorite(car));
      Notiflix.Notify.success('Car was successful added!', {
        timeout: 2000,
      });
    }
  };

  return (
    <CarItem>
      <ImgThumb>
        <Image src={car.img ? car.img : defaultPicture} alt={car.model} />
        <GradientBox />
      </ImgThumb>

      <BtnFav
        type="button"
        aria-label="add or delete car from favorites"
        onClick={handleFav}
      >
        {isFavorite ? (
          <SvgFavAdd>
            <use href={`${sprite}#icon-normal`}></use>
          </SvgFavAdd>
        ) : (
          <SvgFav>
            <use href={`${sprite}#icon-normal`}></use>
          </SvgFav>
        )}
      </BtnFav>
      <div>
        <TitleBox>
          <Title>
            {car.make}
            {index <= 2 && <span> {car.model}</span>},<span> </span>
            {car.year}
          </Title>
          <p>{car.rentalPrice}</p>
        </TitleBox>

        <AddressList>
          <li>{getAddressCity(car.address)}</li>
          <li>{getAddressCountry(car.address)}</li>
          <li>{car.rentalCompany}</li>
          {getPremiumCar(car.make) && <li>Premium</li>}
        </AddressList>
        <ModelList>
          <li>{car.type}</li>
          <li>{car.make}</li>
          <li>{car.id}</li>
          <li>{getAccent(car.accessories, car.functionalities)}</li>
        </ModelList>
        <Button type="button" onClick={showModal}>
          Learn more
        </Button>
      </div>
      {isShowModal && <Modal carData={showCar} closeModal={closeModal} />}
    </CarItem>
  );
}

export default CatalogItem;
