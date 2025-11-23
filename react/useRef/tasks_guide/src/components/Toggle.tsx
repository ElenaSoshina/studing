import { useState } from 'react';

export default function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
        <h1>Toggle</h1>
        <button onClick={() => {
        setIsOn(v => !v)
        }}>
        {isOn ? 'On' : 'Off'}
        </button>
    </>
  );
}