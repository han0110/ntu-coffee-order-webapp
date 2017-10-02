import { connect } from 'react-redux';

import { pay, deliver, clearUpdateOrder } from '../actions';
import PrepareList from '../components/PrepareList';

const mapStateToProps = state => ({
  orders: state.orders.data.filter(order => !order.clear),
  status: state.orders.status,
});

const mapDispatchToProps = dispatch => ({
  onClickPay(number) {
    pay(dispatch, number);
  },
  onClickDeliver(number) {
    deliver(dispatch, number);
  },
  onClickClear(orders) {
    dispatch(clearUpdateOrder(orders));
  },
});

const PrepareContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrepareList);

export default PrepareContainer;
