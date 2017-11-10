const development = require('./../env/development');
const preproduction = require('./../env/preproduction');
const production = require('./../env/production');

const envs = {
  development,
  preproduction,
  production,
};

let envToUse = development;
if (process.env.NODE_ENV && envs[process.env.NODE_ENV]) {
  envToUse = envs[process.env.NODE_ENV];
}

module.exports = envToUse;
