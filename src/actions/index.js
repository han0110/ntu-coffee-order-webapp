import axios from 'axios';

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

  DELETE_REQUEST,
  DELETE_SUCCESS,
  DELETE_FAILURE,
} from '../constants';

export const order = data => async (dispatch) => {
  dispatch({ type: ORDER_REQUEST });
  const success = await axios.post('/api/order', data);
  if (!success) dispatch({ type: ORDER_FAILURE });
  dispatch({ type: ORDER_SUCCESS });
};

export const pay = data => async (dispatch) => {
  dispatch({ type: PAY_REQUEST });
  const success = await axios.post('/api/pay', data);
  if (!success) dispatch({ type: PAY_FAILURE });
  dispatch({ type: PAY_SUCCESS });
};

export const deliver = data => async (dispatch) => {
  dispatch({ type: DELIVER_REQUEST });
  const success = await axios.post('/api/deliver', data);
  if (!success) dispatch({ type: DELIVER_FAILURE });
  dispatch({ type: DELIVER_SUCCESS });
};

export const deleteOrder = data => async (dispatch) => {
  dispatch({ type: DELETE_REQUEST });
  const success = await axios.post('/api/delete', data);
  if (!success) dispatch({ type: DELETE_FAILURE });
  dispatch({ type: DELETE_SUCCESS });
};
