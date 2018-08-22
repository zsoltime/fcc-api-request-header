'use strict';

const request = require('supertest');

const app = require('../app');

describe('Endpoints', () => {
  describe('GET / ', () => {
    it('should return the documentation', (done) => {
      request(app)
        .get('/')
        .expect('Content-Type', /html/)
        .expect(200)
        .then((res) => {
          expect(res.text).toEqual(
            expect.stringContaining('Request Header Parser')
          );
          done();
        });
    });
  });

  describe('GET /api/whoami', () => {
    it('should return a JSON object with the IP address, languages, and user agent', (done) => {
      const ipAddress = '34.11.30.129';
      const languages = 'en-GB,af;q=0.9,hu;q=0.8,en-US;q=0.7';
      const userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2454.85 Safari/537.36';

      request(app)
        .get('/api/whoami')
        .set('User-Agent', userAgent)
        .set('Accept-Language', languages)
        .set('x-forwarded-for', ipAddress)
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
          expect(res.body.language).toEqual(
            expect.arrayContaining(['af', 'en-GB', 'en-US', 'hu'])
          );
          expect(res.body.ipaddress).toBe(ipAddress);
          expect(res.body.software).toBe(userAgent);
          done();
        });
    });
  });
});
