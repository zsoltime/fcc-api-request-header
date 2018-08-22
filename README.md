# API Project: freeCodeCamp Request Header Parser [![Build Status](https://img.shields.io/travis/zsoltime/fcc-api-request-header.svg?style=flat-square)](https://travis-ci.org/zsoltime/fcc-api-request-header)

This is my request header parser for [freeCodeCamp's second API project][fcc-link]. Demo is available on [my site][demo]. You can also check out [my other freeCodeCamp projects][projects].

## User Stories

It seems we're short on user stories, this is the only one this time:

- [ ] I can get the IP address, preferred languages (from header `Accept-Language`) and system infos (from header `User-Agent`) for my device.

## Example Usage

```
[project_url]/api/whoami
```

### Example output:

```json
{
  "ipaddress": "86.205.25.192",
  "language": "en-GB",
  "software": "Macintosh; Intel Mac OS X 10_13_6"
}
```

## Tools Used

- [ESLint](https://github.com/eslint/eslint) linter with Airbnb's [base config](https://www.npmjs.com/package/eslint-config-airbnb-base)
- [Express.js](https://github.com/expressjs/express) framework
- [Jest](https://github.com/facebook/jest) test framework
- [Pug](https://github.com/pugjs/pug) template engine
- [Supertest](https://github.com/visionmedia/supertest/) library

## Install and Build

#### Clone this repo

```bash
git clone https://github.com/zsoltime/fcc-api-request-header.git
cd fcc-api-request-header
```

#### Install dependencies

```bash
npm install
```

#### Start dev server

It starts a dev server, monitor for changes and restarts on any change.

```bash
npm run dev
```

#### Start

It starts the node.js application.

```bash
npm start
```

#### Run tests

It runs tests using Jest and Supertest.

```bash
npm test
```

[demo]: https://zsolti.me/apis/request-header
[fcc-link]: https://learn.freecodecamp.org/apis-and-microservices/apis-and-microservices-projects/request-header-parser-microservice
[projects]: https://github.com/zsoltime/freeCodeCamp
