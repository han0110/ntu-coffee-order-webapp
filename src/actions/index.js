import axios from 'axios';

import {
  ORDER,
  PAY,
  DELIVER,
  DELETE,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILURE,
  CLEAR_UPDATE_REQUEST,
  CLEAR_UPDATE_SUCCESS,
  CLEAR_UPDATE_FAILURE,
} from '../constants';

export const order = (dispatch, data) => dispatch({ type: ORDER, data });
export const pay = (dispatch, number) => dispatch({ type: PAY, number });
export const deliver = (dispatch, number) => dispatch({ type: DELIVER, number });
export const deleteOrder = dispatch => dispatch({ type: DELETE });

export const getSavedOrder = () => async (dispatch) => {
  dispatch({ type: GET_ORDER_REQUEST });
  const res = await axios.get('/api/getOrder');
  if (res.status === 200) dispatch({ type: GET_ORDER_SUCCESS, data: res.data.orders });
  else dispatch({ type: GET_ORDER_FAILURE });
};

export const clearUpdateOrder = orders => async (dispatch) => {
  dispatch({ type: CLEAR_UPDATE_REQUEST });
  const res = await axios.post('/api/update', { orders });
  if (res.status !== 200) dispatch({ type: CLEAR_UPDATE_FAILURE });
  else dispatch({ type: CLEAR_UPDATE_SUCCESS });
};
