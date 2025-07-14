const http = require('http');
const fs = require('fs');
const url = require('url');

const PORT = 3000;
const DATA_FILE = './phrases.json';

//  Допоміжні функції
function loadPhrases() {
  if (!fs.existsSync(DATA_FILE)) return [];
  return JSON.parse(fs.readFileSync(DATA_FILE));
}

function savePhrases(phrases) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(phrases, null, 2));
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const method = req.method;
  const pathname = parsedUrl.pathname;

  // Встановлюємо CORS для фронтенду
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  // === [GET] /api/phrases?search=word
  if (method === 'GET' && pathname === '/api/phrases') {
    const phrases = loadPhrases();
    const search = parsedUrl.query.search?.toLowerCase();

    const filtered = search
      ? phrases.filter(p =>
          p.english.toLowerCase().includes(search) ||
          p.translation.toLowerCase().includes(search)
        )
      : phrases;

    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(filtered));
  }

  // === [POST] /api/phrases
  if (method === 'POST' && pathname === '/api/phrases') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const { english, translation } = JSON.parse(body);
      if (!english || !translation) {
        res.writeHead(400);
        return res.end('Missing data');
      }

      const phrases = loadPhrases();
      const newPhrase = {
        id: Date.now(),
        english,
        translation,
        learned: false
      };
      phrases.push(newPhrase);
      savePhrases(phrases);

      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(newPhrase));
    });
    return;
  }

  // === [DELETE] /api/phrases/:id
  if (method === 'DELETE' && pathname.startsWith('/api/phrases/')) {
    const id = Number(pathname.split('/').pop());
    const phrases = loadPhrases();
    const updated = phrases.filter(p => p.id !== id);

    if (phrases.length === updated.length) {
      res.writeHead(404);
      return res.end('Phrase not found');
    }

    savePhrases(updated);
    res.writeHead(204);
    return res.end();
  }

  // === [PUT] /api/phrases/:id (toggle learned)
  if (method === 'PUT' && pathname.startsWith('/api/phrases/')) {
    const id = Number(pathname.split('/').pop());
    const phrases = loadPhrases();
    const phrase = phrases.find(p => p.id === id);

    if (!phrase) {
      res.writeHead(404);
      return res.end('Phrase not found');
    }

    phrase.learned = !phrase.learned;
    savePhrases(phrases);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(phrase));
  }

  // === 404 Not Found
  res.writeHead(404);
  res.end('Not Found');
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
