import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

import colors from './colors';

const fadeIn = keyframes`
  from {
    margin-top: 15px;
    opacity: 0;
  } to {
    margin-top: 0px;
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

const spin = keyframes`
  from {
    transform: rotate(0deg)
  } to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  padding: 15px;
  margin-bottom: 55px;

  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const Row = styled.div`${props => css`
  min-height: 35px;
  max-height: 35px;
  margin-bottom: 10px;
  line-height: 25px;

  box-sizing: border-box;

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

const Color = styled.span`
  padding-right: 3px;
  color: ${props => (props.type === '熱' ? colors.addHot : colors.addIce)};
`;

const Button = styled.i`
  animation: ${jumpOut} linear 0.5s;
`;

const Clear = styled.div`
  min-height: 35px;
  max-height: 35px;
  padding: 3px 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  align-self: flex-end;
  position: fixed;
  bottom: 30px;

  background-color: #DDDDDD;
  border-radius: 5px;
`;

const Loading = styled.div`
  width: 25px;
  height: 25px;
  box-sizing: border-box;
  border-radius: 50%;

  border-top: 3px solid transparent;
  border-bottom: 3px solid ${colors.pink};
  border-left: 3px solid ${colors.pink};
  border-right: 3px solid transparent;

  animation: ${spin} 0.6s linear .2s infinite;
`;

const PrepareList = ({ orders, status, onClickPay, onClickDeliver, onClickClear }) => (
  <Wrapper>
    <Row field>
      <Column field flex={1} center>編號</Column>
      <Column field flex={3}>品項</Column>
      <Column field flex={1} center>付款</Column>
      <Column field flex={1} center>出杯</Column>
    </Row>
    {
      orders.map(order => (
        <Row key={order.number} paid={order.paid} delivered={order.delivered}>
          <Column number center>{order.number}</Column>
          <Column name>
            <Color type={order.type}>{order.type}</Color>{order.name}
          </Column>
          <Column paid center onClick={() => { if (!order.paid) onClickPay(order.number); }}>
            {order.paid ? <Button className="fa fa-check" /> : order.cost}
          </Column>
          <Column delivered center onClick={() => { if (order.paid) onClickDeliver(order.number); }}>
            {order.delivered ? <Button className="fa fa-check" /> : <div style={{ display: 'inline-block' }} />}
          </Column>
        </Row>
      ))
    }
    <Clear onClick={() => onClickClear(orders.filter(order => (order.paid === true && order.delivered === true && order.number > 0)))}>
      {status === 'updating' ? <Loading /> : 'clear'}
    </Clear>
  </Wrapper>
);

PrepareList.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape({
    number: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    paid: PropTypes.bool.isRequired,
    delivered: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  status: PropTypes.string.isRequired,
  onClickPay: PropTypes.func.isRequired,
  onClickDeliver: PropTypes.func.isRequired,
  onClickClear: PropTypes.func.isRequired,
};

export default PrepareList;
