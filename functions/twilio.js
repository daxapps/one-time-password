const twilio = require('twilio');

const accountSid = 'AC5a8ebb576dbd639f8ad34b21d1dcc84b';
const authToken = 'c496d5115d2d2253be04db4732025ea7';

module.exports = new twilio.Twilio(accountSid, authToken);