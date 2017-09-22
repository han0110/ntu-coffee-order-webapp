import { connect } from 'react-redux';

import ProductList from '../components/ProductList';

const mapStateToProps = state => ({
  products: state.products,
});

const ProductContainer = connect(
  mapStateToProps,
)(ProductList);

export default ProductContainer;
