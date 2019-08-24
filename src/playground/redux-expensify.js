import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [{
    id: 'fdasa',
    description: 'January Rent',
    note: 'Final payment',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    stateDate: undefined,
    endDate: undefined
  }
};