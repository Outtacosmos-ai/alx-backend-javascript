import express from 'express';
import routes from './routes/index';

const app = express();
const defaultPort = 1245;

function startServer(port) {
  app.use('/', routes);

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is already in use. Trying port ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('An error occurred:', err);
    }
  });
}

startServer(defaultPort);

export default app;
