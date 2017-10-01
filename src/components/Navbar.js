import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import media from './style-utils';
import colors from './colors';

const Wrapper = styled.div`
  height: 60px;
  ${media.desktop`width: 960px;`};
  ${media.desktop`padding: 0 calc( 50vw - 480px );`};

  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0px;
  left: 0px;

  background-color: ${colors.pink};
`;

const style = (toRight) => {
  const marginLeft = toRight === true ? 'auto' : '';
  return {
    padding: '0px 10px',
    color: `${colors.yello}`,
    fontSize: '1.5em',
    textDecoration: 'none',
    marginLeft,
  };
};

const Link = ({ to, toRight = false, children }) => (
  <NavLink to={`/${to}`} style={style(toRight)}>{children}</NavLink>
);

const Navbar = () => (
  <Wrapper>
    <Link to="home">首頁</Link>
    <Link to="order">點餐</Link>
    <Link to="login" toRight>登入</Link>
  </Wrapper>
);

Link.propTypes = {
  to: PropTypes.string.isRequired,
  toRight: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

export default Navbar;
