// Define public constant variables relevant to backend
const ssr = 'ssr.xenial.com/?env=';


const express = require('express');

const app = express();
app.listen(3000, () => console.log('Listening at 3000'));
app.use(express.static('frontend'));

