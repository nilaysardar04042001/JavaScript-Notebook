{
  /* backend/src/index.ts */
}
import { createServer } from 'node:http';
import { application } from '../../shared/dist/application.js';
const port = Number(process.env.PORT ?? 3000);

const server = createServer((request, response) => {
  if (request.method === 'GET' && request.url === '/health') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(
      JSON.stringify({
        status: 'ok',
        application: application.title,
        version: application.version,
      }),
    );
    return;
  }

  response.writeHead(404, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(port, () => {
  console.log(`Backend health server listening on http://localhost:${port}`);
});

function stopServer() {
  server.close(() => process.exit(0));
}

process.once('SIGINT', stopServer);
process.once('SIGTERM', stopServer);
