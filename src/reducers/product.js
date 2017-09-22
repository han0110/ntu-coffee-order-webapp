import { } from '../constants';

const initialState = [
  { name: '美式', symbol: '?', hot: true, ice: true, hotPrice: 40, icePrice: 40 },
  { name: '原味拿鐵', symbol: '?', hot: true, ice: true, hotPrice: 55, icePrice: 60 },
  { name: '香草拿鐵', symbol: '?', hot: true, ice: true, hotPrice: 60, icePrice: 65 },
  { name: '焦糖拿鐵', symbol: '?', hot: true, ice: true, hotPrice: 60, icePrice: 65 },
  { name: '抹茶拿鐵', symbol: '?', hot: true, ice: true, hotPrice: 60, icePrice: 65 },
  { name: '榛果拿鐵', symbol: '?', hot: true, ice: true, hotPrice: 60, icePrice: 65 },
  { name: '摩卡', symbol: '?', hot: true, ice: true, hotPrice: 65, icePrice: 65 },
  { name: '貝禮詩帖', symbol: '?', hot: true, ice: true, hotPrice: 70, icePrice: 75 },
  { name: '蜂蜜冰咖啡', symbol: '?', hot: false, ice: true, hotPrice: 0, icePrice: 55 },
  { name: '蜂蜜威士忌拿鐵', symbol: '?', hot: false, ice: true, hotPrice: 0, icePrice: 75 },
  { name: '薰衣草特調', symbol: '?', hot: true, ice: true, hotPrice: 60, icePrice: 65 },
  { name: '可可歐蕾', symbol: '?', hot: true, ice: true, hotPrice: 45, icePrice: 45 },
  { name: '抹茶歐蕾', symbol: '?', hot: true, ice: true, hotPrice: 45, icePrice: 45 },
  { name: '紅茶歐蕾', symbol: '?', hot: true, ice: true, hotPrice: 45, icePrice: 45 },
  { name: '薰衣草鮮奶茶', symbol: '?', hot: false, ice: true, hotPrice: 0, icePrice: 45 },
];

const product = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default product;
