import { createServer } from 'http';

async function bootstrap() {
  const port = 8001;

  const server = createServer((_req, res) => {
    res.statusCode = 200;
    res.end('OK');
  });

  server.listen(port, '0.0.0.0', () => {
    console.log(`Server1 listening on http://localhost:${port}`);
  });
}

bootstrap();
