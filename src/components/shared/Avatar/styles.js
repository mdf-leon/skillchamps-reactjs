import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-right: 12px;

  img {
    width: 48px;
    height: 48px;
    border-radius: 100%;
    border: 1px solid #fff;
  }
  svg {
    display: none;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  img:hover + svg,
  svg:hover {
    display: block;
  }

  input[type='file'] {
    display: none;
  }
`;

Container.displayName = 'Avatar';
