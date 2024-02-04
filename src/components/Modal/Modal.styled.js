import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(18, 20, 23, 0.5);
`;

export const ModalDiv = styled.div`
  overflow: auto;
  background-color: #fff;
  border-radius: 24px;
  position: relative;
  max-width: 541px;
  max-height: 85%;
  padding: 40px;
  z-index: 9999;

  -ms-overflow-style: none;
  scrollbar-width: none;

  -webkit-scrollbar {
    width: 0;
    height: 0;
  }
  > h2 {
    margin-top: 14px;
    font-weight: 500;
    font-size: 18px;
    line-height: 133%;
    color: #121417;
    > span {
      color: #3470ff;
    }
  }
  > h3 {
    margin-top: 24px;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.43;
    color: #121417;
  }

  > p {
    width: 461px;
    margin-top: 14px;
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    color: #121417;
  }
`;

export const ImageThumb = styled.div`
  border-radius: 14px;
  width: 461px;
  height: 248px;
  overflow: hidden;
`;

export const Image = styled.img`
  object-fit: cover;
`;
export const BtnClose = styled.button`
  width: 24px;
  height: 24px;

  border: none;
  background: transparent;
  position: absolute;
  top: 16px;
  right: 18px;
`;

export const SvgClose = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #121417;
  transition: var(--transition);

  &:hover,
  &:focus {
    stroke: #000;
  }
`;

export const AddressList = styled.ul`
  margin-top: 8px;
  display: flex;
  gap: 12px;

  > li {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
  }
`;

export const FuilList = styled.ul`
  margin-top: 4px;
  display: flex;
  gap: 12px;

  > li {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
  }
`;

export const AccessList = styled.ul`
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px 12px;
  width: 461px;

  > li {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
  }
`;

export const ConditionsList = styled.ul`
  margin-top: 15px;
  padding-left: 14px;
  display: flex;
  gap: 28px;

  > li {
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #363535;

    > span {
      font-weight: 600;
      color: #3470ff;
    }
  }
`;

export const RentalLink = styled.a`
  display: inline-block;
  margin-top: 24px;
  border-radius: 12px;
  padding: 12px 50px;
  background-color: #3470ff;
  font-weight: 600;
  font-size: 14px;
  line-height: 143%;
  color: #fff;
  transition: var(--transition);

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
