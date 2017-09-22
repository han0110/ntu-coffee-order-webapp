import { connect } from 'react-redux';

import { order } from '../actions';
import ProductList from '../components/ProductList';

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  onClickOrder(data) {
    dispatch(order(data));
  },
});

const ProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductList);

export default ProductContainer;
