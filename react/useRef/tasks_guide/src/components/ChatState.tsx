import { useState, useRef } from 'react';

export default function ChatState() {
  const [text, setText] = useState('');
  const latestTextRef = useRef(text)

  function handleSend() {
    setTimeout(() => {
      alert('Sending: ' + latestTextRef.current
      );
    }, 3000);
  }

  return (
    <>
      <h1>ChatState</h1>
      <input
        value={text}
        onChange={e => {
            setText(e.target.value)
            latestTextRef.current = e.target.value
        }
        }
      />
      <button
        onClick={handleSend}>
        Send
      </button>
    </>
  );
}