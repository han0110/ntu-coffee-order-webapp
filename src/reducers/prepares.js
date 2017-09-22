import {} from '../constants';

const initialState = [
  { number: 1, name: '熱拿鐵', paid: true, delivered: true },
  { number: 2, name: '冰美式', paid: true, delivered: false },
  { number: 3, name: '冰拿鐵', paid: true, delivered: false },
  { number: 4, name: '冰蜂蜜冰咖啡', paid: false, delivered: false },
];

const prepares = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default prepares;
