import { connect } from 'react-redux';

import PrepareList from '../components/PrepareList';

const mapStateToProps = state => ({
  prepares: state.prepares,
});

const PrepareContainer = connect(
  mapStateToProps,
)(PrepareList);

export default PrepareContainer;
