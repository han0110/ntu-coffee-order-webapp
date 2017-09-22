import { css } from 'styled-components';

const sizes = {
  desktop: 1440,
  tablet: 1024,
  phone: 376,
};

const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  const instant = accumulator;
  instant[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return instant;
}, {});

export default media;
