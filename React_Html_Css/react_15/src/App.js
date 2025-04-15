import React, { useState, createContext } from 'react';
import MyRef from './components/MyRef';
import Portal from './components/Portal';
import Cont1 from './components/Cont1';

// Створення контексту зі значенням count та функцією setCount
export const CountContext = createContext({ count: 0, setCount: () => {} });

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React Context, Refs, Portals, Fragments Demo</h1>
      <p>Значення count: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>

      <hr />

      {/* Компонента, яка демонструє роботу з ref */}
      <MyRef />

      <hr />

      {/* Компонента-портал */}
      <Portal />

      <hr />

      {/* Провайдер контексту для Cont1 та його дочірніх компонентів */}
      <CountContext.Provider value={{ count, setCount }}>
        <Cont1 />
      </CountContext.Provider>
    </>
  );
};

export default App;
