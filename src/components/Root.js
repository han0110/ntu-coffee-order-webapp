import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import media from './style-utils';
import Navbar from './Navbar';
import HomePage from './HomePage';
import OrderPage from './OrderPage';
import LoginPage from './LoginPage';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  
  ${media.desktop`padding: 60px calc( 50vw - 480px ) 0px calc( 50vw - 480px );`};
  ${media.tablet`padding: 60px 20px 0px 20px`};

  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  background-color: #F0F0F0;
  color: #333333;
  font-family: futura;
  font-size: 12px;
`;

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Wrapper>
        <Navbar />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path="/home" component={HomePage} />
        <Route path="/order" component={OrderPage} />
        <Route path="/login" component={LoginPage} />
      </Wrapper>
    </HashRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Root;
