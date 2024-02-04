import styled from 'styled-components';

export const ButtonLoadMore = styled.button`
  border: none;
  display: block;
  background-color: transparent;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  color: #3470ff;

  transition: var(--transition);

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;
