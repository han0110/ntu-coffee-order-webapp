import React from 'react';
import styled from 'styled-components';

import media from './style-utils';
import colors from './colors';

const Wrapper = styled.div`
  height: calc( 100vh - 60px );
  padding: 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  background-color: #FFFFFF;
  font-size: 1.5em;
`;

const H1 = styled.div`
  margin-bottom: 10px;
  padding-left: 15px;
  
  font-size: 2em;
  border-left: 10px solid ${colors.pink};
`;

const Ol = styled.div`
  margin: 10px 10px;
`;

const Li = styled.div`
  margin: 10px 15px;

  &:before {
    content: '${props => props.nth}. '
  }
`;

const Color = styled.span`
  color: ${props => props.color};
`;

const HomePage = () => (
  <Wrapper>
    <H1>點餐標準流程</H1>
    <Ol>
      <Li nth={1}>確認餐點後新增訂單，訂單會新增至<Color color={colors.pink}> 準備中 </Color></Li>
      <Li nth={2}>確認收到錢後，將該筆訂單的<Color color="rgba(63,200,128,1)"> 付款 </Color>欄打勾</Li>
      <Li nth={3}>確認送餐後，將該筆訂單的<Color color="rgba(63,200,128,1)"> 出杯 </Color>欄打勾</Li>
      <Li nth={4}>按右下角<Color color="rgba(160,160,160,1)"> clear </Color>將已出杯的紀錄隱藏</Li>
    </Ol>
  </Wrapper>
);

export default HomePage;
