import test from 'tape';
import request from 'supertest';
import app from '../src/app';

test('GET / Hello World', (t) => {
  request(app)
    .get('/')
    .expect('Content-Type', /text\/html/)
    .expect(200)
    .end((err, res) => {
      t.error(err, 'No error');
      t.equal(res.text, 'Hello World', 'retreive hello world');
      t.end();
    });
});
