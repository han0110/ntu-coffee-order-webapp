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
  dispatch({ type: ORDER_REQUEST, data });
  const res = await axios.post('/api/update');
  if (res.status !== 200) dispatch({ type: ORDER_FAILURE });
  dispatch({ type: ORDER_SUCCESS });
};

export const pay = () => async (dispatch) => {
  dispatch({ type: PAY_REQUEST });
  const res = await axios.post('/api/update', {});
  if (res.status !== 200) dispatch({ type: PAY_FAILURE });
  dispatch({ type: PAY_SUCCESS });
};

export const deliver = () => async (dispatch) => {
  dispatch({ type: DELIVER_REQUEST });
  const res = await axios.post('/api/update', {});
  if (res.status !== 200) dispatch({ type: DELIVER_FAILURE });
  dispatch({ type: DELIVER_SUCCESS });
};

export const deleteOrder = data => async (dispatch) => {
  dispatch({ type: DELETE_REQUEST });
  const res = await axios.post('/api/delete', data);
  if (res.status !== 200) dispatch({ type: DELETE_FAILURE });
  dispatch({ type: DELETE_SUCCESS });
};
