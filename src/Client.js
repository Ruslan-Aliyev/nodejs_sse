import { useState, useEffect } from 'react';

function Client() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:3000/events');
    eventSource.onmessage = (e) => {
      const parsedData = JSON.parse(e.data);
      setMessage(parsedData.message);
    };

    return () => eventSource.close();
  })

  return (
    <div>
      {message}
    </div>
  );
}

export default Client;
