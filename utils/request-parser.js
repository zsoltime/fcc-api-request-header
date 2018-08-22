'use strict';

function getIPAddress(req) {
  return req.headers['x-forwarded-for'] || req.connection.remoteAddress;
}

function getLanguages(req) {
  return req.headers['accept-language']
    .split(',')
    .map(x => x.replace(/;(.*)/, ''));
}

function getUserAgent(req) {
  return req.headers['user-agent'];
  // .match(/\((.*?)\)/)[1];
}

module.exports = {
  getIPAddress,
  getLanguages,
  getUserAgent,
};
