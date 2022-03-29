var path = require('path')
const express = require('express') // express to run server and routes
const mockAPIResponse = require('./mockAPI.js')
const fetchAPI = require("./meaning-cloud.js");

/* Instantiate app */
const app = express() //start up an instance of app

/* Setup Dotenv */
const dotenv = require('dotenv');
dotenv.config();

/* Setup project folder */
app.use(express.static('dist'))

console.log(__dirname)
console.log(`Your API key is ${process.env.API_KEY}`);

/* Setup API */
//var textapi = new aylien({
//       application_key: process.env.API_KEY,
//  });

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* CORS for cross origin allowance */
const cors = require('cors')
app.use(cors())

/* Setup Home route endpoint */
app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

/* Create a local server */
//app.get('/test', function (req, res) {
//    res.send(mockAPIResponse)
//})
app.post("/submit", async (req, res) => {
    const userInput = req.body;
  
    try {
      const apiData = await fetchAPI(userInput);
      sentimentAnalysis = JSON.stringify(apiData);
      res.status(200).send(sentimentAnalysis);
    } catch (e) {
      res.status(400).send(e);
    }
  });


/* Create a local server */
// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})