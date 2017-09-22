import {
  ORDER_REQUEST,
  ORDER_SUCCESS,
  ORDER_FAILURE,
} from '../constants';

const initialState = [
  { number: 1, name: '熱拿鐵', paid: true, delivered: true },
  { number: 2, name: '冰美式', paid: true, delivered: false },
  { number: 3, name: '冰拿鐵', paid: true, delivered: false },
  { number: 4, name: '冰蜂蜜冰咖啡', paid: false, delivered: false },
];

const prepares = (state = {
  data: initialState,
  status: 'done',
}, action) => {
  switch (action.type) {
    case ORDER_REQUEST:
      return { data: [...state.data, action.data], status: 'request' };
    case ORDER_SUCCESS:
      return { ...state, status: 'done' };
    case ORDER_FAILURE:
      return { ...state, status: 'error' };
    default:
      return state;
  }
};

export default prepares;
