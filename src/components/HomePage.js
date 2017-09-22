import React from 'react';
import styled from 'styled-components';

import media from './style-utils';

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
  border-left: 10px solid #D78FA6;
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
  color: #${props => props.color};
`;

const HomePage = () => (
  <Wrapper>
    <H1>點餐標準流程</H1>
    <Ol>
      <Li nth={1}>確認餐點後新增訂單，訂單會新增至<Color color="D78FA6"> 準備中 </Color></Li>
      <Li nth={2}>確認收到錢後，將該筆訂單的<Color color="3FC380"> 已付款 </Color>打勾</Li>
      <Li nth={3}>確認送餐後，將該筆訂單的<Color color="3FC380"> 已送餐 </Color>打勾，等待 5 秒後會自行消失</Li>
    </Ol>
  </Wrapper>
);

export default HomePage;
