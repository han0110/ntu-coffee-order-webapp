import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import colors from './colors';

const Wrapper = styled.div`
  padding: 15px;

  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const Row = styled.div`${props => css`
  min-height: 35px;
  max-height: 35px;

  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;

  box-sizing: border-box;
  
  ${props.field && `
    flex: 2 1 auto;
    border-bottom: 2px dashed;
    color: ${colors.pink};
  `};

  ${(props.nth + 1) % 5 === 0 && `
    border-bottom: 2px dotted ${colors.transparentPink};
  `};
`}`;

const Column = styled.div`${props => css`
    font-family: Helvetica;
    ${props.name && 'flex: 3;'}
    ${props.symbol && 'flex: 2;'}
    ${props.button && 'flex: 2;'}
    ${props.field && 'flex: 2;'}
  `};
`;

const Button = styled.i`${props => css`
    color: rgba(0,0,0,0);

    ${props.field && `color: ${colors.pink};`};
    ${props.hot && `color: ${colors.addHot};`}
    ${props.ice && `color: ${colors.addIce};`}
  `}
`;

const ProductList = ({ products, onClickOrder }) => (
  <Wrapper>
    <Row field>
      <Column name>品項</Column>
      <Column symbol>代號</Column>
      <Column field>熱杯</Column>
      <Column field>冷杯</Column>
    </Row>
    {
      products.map((product, index) => (
        <Row nth={index} key={index}>
          <Column name>{product.name}</Column>
          <Column symbol>{product.symbol}</Column>
          <Column button>
            <Button hot={product.hot} className="fa fa-plus-circle" onClick={() => onClickOrder({
              number: products.length,
              name: `熱${product.name}`,
              paid: false,
              delivered: false,
            })}
            />
          </Column>
          <Column button>
            <Button ice={product.ice} className="fa fa-plus-circle" onClick={() => onClickOrder({
              number: products.length,
              name: `冰${product.name}`,
              paid: false,
              delivered: false,
            })}
            />
          </Column>
        </Row>
      ))
    }
  </Wrapper>
);

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    hot: PropTypes.bool.isRequired,
    ice: PropTypes.bool.isRequired,
    hotPrice: PropTypes.number.isRequired,
    icePrice: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  onClickOrder: PropTypes.func.isRequired,
};

export default ProductList;
