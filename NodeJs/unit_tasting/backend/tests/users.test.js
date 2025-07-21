const request = require('supertest');
const app = require('../index');
const { resetUsers } = require('../users');

beforeEach(() => {
  resetUsers();
});

describe('GET /api/users', () => {
  it('повертає масив користувачів зі статусом 200', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(2);
    expect(res.body[0]).toHaveProperty('name');
  });
});

describe('POST /api/users', () => {
  it('створює нового користувача при валідному запиті', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ name: 'Олег' });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe('Олег');
  });

  it('повертає 400 якщо ім’я не передано', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({});

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
});
