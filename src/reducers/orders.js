import {
  ORDER,
  PAY,
  DELIVER,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILURE,
  CLEAR_UPDATE_REQUEST,
  CLEAR_UPDATE_SUCCESS,
  CLEAR_UPDATE_FAILURE,
} from '../constants';

const orders = (state = {
  data: [],
  nextNumber: 1,
  status: 'init',
}, action) => {
  switch (action.type) {
    case ORDER:
      return {
        ...state,
        data: [...state.data, {
          number: state.nextNumber,
          name: action.data.name,
          type: action.data.type,
          cost: action.data.cost,
          paid: false,
          delivered: false,
          clear: false,
        }],
        nextNumber: state.nextNumber + 1,
      };
    case PAY:
      return {
        ...state,
        data: state.data.map(
          element => (element.number === action.number
            ? { ...element, paid: true }
            : element),
        ),
      };
    case DELIVER:
      return {
        ...state,
        data: state.data.map(
          element => (element.number === action.number
            ? { ...element, delivered: !element.delivered }
            : element),
        ),
      };
    case GET_ORDER_REQUEST:
      return { ...state, status: 'requesting' };
    case GET_ORDER_SUCCESS:
      return {
        ...state,
        data: action.data.map(
          element => ({ ...element, paid: true, delivered: true, clear: true }),
        ),
        nextNumber: action.data.length + 1,
      };
    case GET_ORDER_FAILURE:
      return { ...state, status: 'error' };

    case CLEAR_UPDATE_REQUEST:
      return { ...state, status: 'updating' };
    case CLEAR_UPDATE_SUCCESS:
      return {
        ...state,
        data: state.data.map(
          element => ((element.paid === true && element.delivered === true)
            ? { ...element, clear: true }
            : element),
        ),
        status: 'done',
      };
    case CLEAR_UPDATE_FAILURE:
      return { ...state, status: 'error' };
    default:
      return state;
  }
};

export default orders;
