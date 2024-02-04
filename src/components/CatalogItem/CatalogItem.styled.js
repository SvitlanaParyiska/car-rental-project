import styled from 'styled-components';

export const CarItem = styled.li`
  position: relative;
`;

export const ImgThumb = styled.div`
  border-radius: 14px;
  overflow: hidden;
  position: relative;
`;

export const Image = styled.img`
  width: 274px;
  height: 268px;
  object-fit: cover;
`;

export const GradientBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;

  background: linear-gradient(
    180deg,
    rgba(18, 20, 23, 0.5) 2.5%,
    rgba(18, 20, 23, 0) 41.07%
  );
`;
export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  padding-right: 9px;

  > p {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #121417;
  }
`;
export const Title = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;

  > span {
    color: #3470ff;
  }
`;

export const AddressList = styled.ul`
  display: flex;
  //gap: 12px;
  justify-content: flex-start;
  margin-top: 8px;
  overflow: hidden;

  > li {
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
    padding: 0 5px;

    border-right: 1px solid rgba(18, 20, 23, 0.1);

    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      border-right: none;
    }
  }
`;

export const ModelList = styled.ul`
  display: flex;
  //gap: 12px;
  justify-content: flex-start;
  margin-top: 4px;
  overflow: hidden;

  > li {
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
    padding: 0 5px;
    border-right: 1px solid rgba(18, 20, 23, 0.1);

    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      border-right: none;
    }
  }
`;

export const BtnFav = styled.button`
  width: 24px;
  height: 24px;

  border: none;
  background: transparent;
  position: absolute;
  top: 14px;
  right: 16px;
`;

export const SvgFav = styled.svg`
  width: 18px;
  height: 18px;
  stroke: #fff;
  fill: none;
  transition: var(--transition);

  &:hover,
  &:focus {
    fill: #fff;
  }
`;

export const SvgFavAdd = styled.svg`
  width: 18px;
  height: 18px;
  fill: #3470ff;
  stroke: #3470ff;
  transition: var(--transition);

  &:hover,
  &:focus {
    fill: #fff;
    stroke: #fff;
  }
`;

export const Button = styled.button`
  border-radius: 12px;
  border: none;
  margin-top: 28px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  width: 100%;
  height: 44px;
  background-color: #3470ff;
  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  color: #fff;
  transition: var(--transition);

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
