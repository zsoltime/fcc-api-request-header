'use strict';

const express = require('express');
const cors = require('cors');

const {
  getIPAddress,
  getLanguages,
  getUserAgent,
} = require('../utils/request-parser');

const router = express.Router();

router.get('/whoami', cors(), (req, res) => {
  res.status(200).json({
    ipaddress: getIPAddress(req),
    language: getLanguages(req),
    software: getUserAgent(req),
  });
});

module.exports = router;
