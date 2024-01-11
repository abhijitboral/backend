const express       = require('express')
const app           = express();
const donenv        = require('dotenv');
donenv.config();

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(process.env.PORT, () => {
    console.log(`This app listening on port ${process.env.PORT}`)
});