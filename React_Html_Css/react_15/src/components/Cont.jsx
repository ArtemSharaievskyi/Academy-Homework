import React, { useContext } from 'react';
import { CountContext } from '../App';

const Cont = () => {
  const { count } = useContext(CountContext);

  return (
    <>
      <h3>Cont Компонента</h3>
      <p>Значення count з контексту: {count}</p>
    </>
  );
};

export default Cont;
