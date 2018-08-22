'use strict';

const {
  getIPAddress,
  getLanguages,
  getUserAgent,
} = require('../../utils/request-parser');

let request = null;

describe('Request parser', () => {
  beforeAll(() => {
    request = {
      connection: {
        remoteAddress: '2.55.14.145',
      },
      headers: {
        'accept-language': 'en-GB,af;q=0.9,hu;q=0.8,en-US;q=0.7',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36',
        'x-forwarded-for': '145.55.14.145',
      },
    };
  });

  describe('getIPAddress()', () => {
    it('should return the x-forwarded-for header', () => {
      expect(getIPAddress(request)).toBe('145.55.14.145');
    });

    it('should return the connection.remoteAddress if no x-forwarded-for header is present', () => {
      delete request.headers['x-forwarded-for'];

      expect(getIPAddress(request)).toBe('2.55.14.145');
    });
  });

  describe('getLanguages()', () => {
    it('should return an array of languages', () => {
      expect(getLanguages(request)).toEqual(
        expect.arrayContaining(['en-US', 'en-GB', 'af', 'hu'])
      );
    });
  });

  describe('getUserAgent()', () => {
    it('should return the browser UA string', () => {
      expect(getUserAgent(request)).toBe(
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36'
      );
    });
  });
});
