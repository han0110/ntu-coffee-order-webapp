import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import colors from './colors';

const fadeIn = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

const jumpOut = keyframes`
  0% {
    font-size: 0px;
  } 50% {
    font-size: 24px;
  } 100% {
    font-size: 18px;
  }
`;

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
  margin-bottom: 10px;

  flex: 1;
  display: flex;
  align-items: center;

  animation: ${fadeIn} linear 0.8s;

  ${!props.paid && !props.delivered && ` // red
    background-color: ${colors.alert};
    `};
    ${props.paid && !props.delivered && ` // yello
    background-color: ${colors.preparing};
    `};
    ${props.paid && props.delivered && ` // green
    background-color: ${colors.done};
  `};
  ${props.field && `
    background-color: inherit;
    border-bottom: 2px dashed;
    color: ${colors.pink};
    animation: none;
  `};

`}`;

const Column = styled.div`${props => css`
  ${props.number && 'flex: 1;'};
  ${props.name && 'flex: 3;'};
  ${props.paid && 'flex: 1;'};
  ${props.delivered && 'flex: 1;'};
  ${props.field && `flex: ${props.flex};`};

  text-align: ${props.center ? 'center' : ''};
`}`;

const Button = styled.i`
  animation: ${jumpOut} linear 0.5s;
`;

const PrepareList = ({ prepares }) => (
  <Wrapper>
    <Row field>
      <Column field flex={1} center>編號</Column>
      <Column field flex={3}>品項</Column>
      <Column field flex={1} center>付款</Column>
      <Column field flex={1} center>送餐</Column>
    </Row>
    {
      prepares.map((prepare, index) => (
        <Row key={index} paid={prepare.paid} delivered={prepare.delivered}>
          <Column number center>{prepare.number}</Column>
          <Column name>{prepare.name}</Column>
          <Column paid center>
            {prepare.paid ? <Button className="fa fa-check" /> : <div />}
          </Column>
          <Column delivered center>
            {prepare.delivered ? <Button className="fa fa-check" /> : <div />}
          </Column>
        </Row>
      ))
    }
  </Wrapper>
);

export default PrepareList;
