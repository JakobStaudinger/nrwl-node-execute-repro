import { createServer } from 'http';

async function bootstrap() {
  const port = 8002;

  const server = createServer((_req, res) => {
    res.statusCode = 200;
    res.end('OK');
  });

  server.listen(port, '0.0.0.0', () => {
    console.log(`Server2 listening on http://localhost:${port}`);
  });
}

bootstrap();
