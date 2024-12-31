import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <p style={{ fontSize: '20px' }}>Current Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{ margin: '5px', padding: '10px', backgroundColor: 'green', color: 'white' }}
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ margin: '5px', padding: '10px', backgroundColor: 'red', color: 'white' }}
      >
        Decrement
      </button>
      <button
        onClick={() => setCount(0)}
        style={{ margin: '5px', padding: '10px', backgroundColor: 'gray', color: 'white' }}
      >
        Reset
      </button>
    </div>
  );
}
export default Counter;
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <p style={{ fontSize: '20px' }}>Current Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{ margin: '5px', padding: '10px', backgroundColor: 'green', color: 'white' }}
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ margin: '5px', padding: '10px', backgroundColor: 'red', color: 'white' }}
      >
        Decrement
      </button>
      <button
        onClick={() => setCount(0)}
        style={{ margin: '5px', padding: '10px', backgroundColor: 'gray', color: 'white' }}
      >
        Reset
      </button>
    </div>
  );
}
function App() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Welcome to the Counter App</h1>
        <Counter />
      </div>
    );
  }  ;