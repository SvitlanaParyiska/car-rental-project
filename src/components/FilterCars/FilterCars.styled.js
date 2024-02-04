import styled from 'styled-components';

export const SearchForm = styled.form`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 50px;
  max-width: 859px;
  background-color: #fff;
  //overflow: hidden;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 17px;
`;

export const Title = styled.p`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: #8a8a89;
`;

export const MileageBox = styled.div`
  display: flex;
  gap: 0px;
`;

export const ButtonSearch = styled.button`
  border: none;
  border-radius: 12px;
  padding: 14px 44px;
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
