import styled from 'styled-components';

export const SvgUp = styled.svg`
  width: 40px;
  height: 50px;
  fill: #27408b;

  @keyframes bounce {
    0%,
    20%,
    60%,
    100% {
      transform: translateY(0);
      transform: translateY(0);
    }

    40% {
      transform: translateY(-20px);
      transform: translateY(-20px);
    }

    80% {
      transform: translateY(-10px);
      transform: translateY(-10px);
    }
  }

  &:hover {
    animation: bounce 1s;
  }
`;
