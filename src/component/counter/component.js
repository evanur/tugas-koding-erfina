import React, { useState } from 'react';

function Counters() {
  const [number, setnumber] = useState(100);
  return (
    <React.Fragment>
      <h1>{number}</h1>
      <button onClick={() => setnumber(number + 1)}>+</button>
      <button onClick={() => setnumber(number - 1)}>-</button>
      <button onClick={() => setnumber(number / 2)}>/</button>
      <button onClick={() => setnumber(number * 2)}>*</button>
    </React.Fragment>
  );
}

export default Counters;
