const environment = process.env.NODE_ENV || 'development';
const envFile = '.env.' + environment ;

const dotenv = require('dotenv');
const parsedEnv = dotenv.config({ path: envFile }).parsed;

module.exports = function() {
  for (key in parsedEnv) {
    if (typeof parsedEnv[key] === 'string') {
      parsedEnv[key] = JSON.stringify(parsedEnv[key]);
    }
  }

  return parsedEnv;
}
