import { connect } from 'react-redux';

import { pay, deliver, clearOrder } from '../actions';
import PrepareList from '../components/PrepareList';

const mapStateToProps = state => ({
  prepares: state.prepares.data,
  status: state.prepares.status,
});

const mapDispatchToProps = dispatch => ({
  onClickPay(number) {
    dispatch(pay(number));
  },
  onClickDeliver(number) {
    dispatch(deliver(number));
  },
  onClickClear() {
    clearOrder(dispatch);
  }
});

const PrepareContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrepareList);

export default PrepareContainer;
