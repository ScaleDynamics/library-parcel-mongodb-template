import '@warpjs/engine';
import Microservice from './.microservice/microservice.js';

const { hello, fetchMovies } = new Microservice({
  env: process.env.DEPLOY_ENV || 'auto',
});

module.exports = { hello, fetchMovies };
