const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

console.log('API Key:', process.env.AFRICASTALKING_API_KEY);  // Debugging line
console.log('Username:', process.env.AFRICASTALKING_USERNAME);  // Debugging line

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
const callRoute = require('./routes/call');
const smsRoute = require('./routes/sms');
const ussdRoute = require('./routes/ussd');

app.use('/call', callRoute);
app.use('/send-sms', smsRoute);
app.use('/ussd', ussdRoute);

app.get('/', (req, res) => {
    res.send('Welcome to Cultural Heritage Explorer');
});

// Serve the SMS and USSD pages
app.get('/sms', (req, res) => {
    res.sendFile(__dirname + '/public/sms.html');
});

app.get('/ussd', (req, res) => {
    res.sendFile(__dirname + '/public/ussd.html');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
