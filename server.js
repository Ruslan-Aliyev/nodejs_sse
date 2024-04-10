const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
const corsOptions = {
	origin: "http://localhost:3001"
};

app.get('/events', cors(corsOptions), (req, res) => {
  const headers = {
    'Content-Type': 'text/event-stream',
    'Connection': 'keep-alive',
    'Cache-Control': 'no-cache'
  };
  res.writeHead(200, headers);

  setInterval(() => {
  	const data = {message: `Now: ${new Date().toISOString()}`};
  	res.write(`data: ${JSON.stringify(data)}\n\n`);
  }, 1000);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));