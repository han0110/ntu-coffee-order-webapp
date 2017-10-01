import {
  ORDER_REQUEST,
  ORDER_SUCCESS,
  ORDER_FAILURE,
  PAY_REQUEST,
  PAY_SUCCESS,
  PAY_FAILURE,
  DELIVER_REQUEST,
  DELIVER_SUCCESS,
  DELIVER_FAILURE,
  CLEAR_ORDER,
} from '../constants';

const initialState = [
  { number: 1, name: '拿鐵', type: 'hot', cost: 55, paid: true, delivered: true },
  { number: 2, name: '美式', type: 'ice', cost: 40, paid: true, delivered: false },
  { number: 3, name: '拿鐵', type: 'hot', cost: 55, paid: true, delivered: false },
  { number: 4, name: '蜂蜜冰咖啡', type: 'ice', cost: 55, paid: false, delivered: false },
];

const prepares = (state = {
  data: initialState,
  nextNumber: 5,
  status: 'done',
}, action) => {
  switch (action.type) {
    case ORDER_REQUEST:
      return {
        ...state,
        data: [...state.data, {
          number: state.nextNumber,
          name: action.data.name,
          type: action.data.type,
          cost: action.data.cost,
          paid: false,
          delivered: false,
        }],
        nextNumber: state.nextNumber + 1,
        status: 'request'
      };
    case ORDER_SUCCESS:
      return {...state, status: 'done' };
    case ORDER_FAILURE:
      return { ...state, status: 'error' };

    case PAY_REQUEST:
      return {
        ...state,
        data: state.data.map(
          element => element.number === action.number
            ? { ...element, paid: true }
            : element
        ),
      };
    case PAY_SUCCESS:
      return { ...state, status: 'done' };
    case PAY_FAILURE:
      return { ...state, status: 'error' };

    case DELIVER_REQUEST:
      return {
        ...state,
        data: state.data.map(
          element => element.number === action.number
            ? { ...element, delivered: !element.delivered }
            : element
        ),
      }
    case DELIVER_SUCCESS:
      return { ...state, status: 'done' };
    case DELIVER_FAILURE:
      return { ...state, status: 'error' };

    case CLEAR_ORDER:
      return {
        ...state,
        data: state.data.filter(element => (element.paid === false || element.delivered === false))
      }
    default:
      return state;
  }
};

export default prepares;
