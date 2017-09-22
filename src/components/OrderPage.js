import React from 'react';
import styled, { css } from 'styled-components';

import media from './style-utils';
import colors from './colors';
import ProductContainer from '../containers/ProductContainer';
import PrepareContainer from '../containers/PrepareContainer';

const Wrapper = styled.div`
  height: calc( 100vh - 60px );

  display: flex;

  box-sizing: border-box;
  background-color: #FFFFFF;
  font-size: 1.5em;
`;

const Div = styled.div`${props => css`
    padding: 0px 20px;
    margin: 20px 0px;
    
    display: flex;
    flex-direction: column;
    
    ${props.menu && `
      flex: 3;
      border-right: 2px dashed ${colors.pink};
    `};
    ${props.prepare && `
      flex: 2;
    `};
  `}
`;

const H1 = styled.div`
  margin-bottom: 10px;
  padding-left: 15px;
  
  font-size: 2em;
  border-left: 10px solid ${colors.pink};
`;

const OrderPage = () => (
  <Wrapper>
    <Div menu>
      <H1>菜單</H1>
      <ProductContainer />
    </Div>
    <Div prepare>
      <H1>準備中</H1>
      <PrepareContainer />
    </Div>
  </Wrapper>
);

export default OrderPage;
