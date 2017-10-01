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
  line-height: 25px;

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
  color: ${props => props.type === 'hot' ? colors.addHot : colors.addIce};
`;

const Button = styled.i`
  animation: ${jumpOut} linear 0.5s;
`;

const Clear = styled.div`
  min-height: 35px;
  max-height: 35px;
  padding: 3px 10px;
  line-height: 35px;

  align-self: flex-end;
  position: fixed;
  bottom: 30px;

  background-color: #DDDDDD;
  border-radius: 5px;
`;

const PrepareList = ({ prepares, status, onClickPay, onClickDeliver, onClickClear }) => (
  <Wrapper>
    <Row field>
      <Column field flex={1} center>編號</Column>
      <Column field flex={3}>品項</Column>
      <Column field flex={1} center>付款</Column>
      <Column field flex={1} center>出杯</Column>
    </Row>
    {
      prepares.map((prepare, index) => (
        <Row key={index} paid={prepare.paid} delivered={prepare.delivered} onDoubleClick={() => console.log('hello')}>
          <Column number center>{prepare.number}</Column>
          <Column name>
            <Color type={prepare.type}>{prepare.type === 'hot' ? '熱' : '冰'}</Color>{prepare.name}
          </Column>
          <Column paid center onClick={() => {if (!prepare.paid) onClickPay(prepare.number)}}>
            {prepare.paid ? <Button className="fa fa-check" /> : prepare.cost}
          </Column>
          <Column delivered center onClick={() => {if (prepare.paid) onClickDeliver(prepare.number)}}>
            {prepare.delivered ? <Button className="fa fa-check" /> : <div style={{ display: 'inline-block' }} />}
          </Column>
        </Row>
      ))
    }
    <Clear onClick={() => onClickClear()}>clear</Clear>
  </Wrapper>
);

PrepareList.propTypes = {
  prepares: PropTypes.arrayOf(PropTypes.shape({
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
