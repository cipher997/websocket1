import React, { useReducer } from 'react';
import Login from './Login';
// import ResponseContext from './ResponseContext';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_RESPONSE':
      return [...state, action.data];
    default:
      return state;
  }
};

const GameTable = () => {
  const [res, dispatch] = useReducer(reducer, []);

  return (
    <div>
      <Login dispatch={dispatch} />
    </div>
  )
}

export default GameTable;
