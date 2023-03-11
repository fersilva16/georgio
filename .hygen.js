const { DateTime } = require('luxon');
const inflection = require('inflection');

module.exports = {
  helpers: {
    DateTime,
    dasherize: (str) => inflection.dasherize(str.toLowerCase()),
  },
};
