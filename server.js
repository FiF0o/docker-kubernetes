const fs = require('fs').promises;
const exists = require('fs').exists;
const path = require('path');
const axios = require('axios');

const express = require('express');
const bodyParser = require('body-parser');

console.log(process.env)

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use('/feedback', express.static('feedback'));

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'pages', 'feedback.html');
  res.sendFile(filePath);
});

app.get('/exists', (req, res) => {
  const filePath = path.join(__dirname, 'pages', 'exists.html');
  res.sendFile(filePath);
});

app.post('/create', async (req, res) => {
  const title = req.body.title;
  const content = req.body.text;

  const adjTitle = title.toLowerCase();

  const tempFilePath = path.join(__dirname, 'temp', adjTitle + '.txt');
  const finalFilePath = path.join(__dirname, 'feedback', adjTitle + '.txt');

  await fs.writeFile(tempFilePath, content);
  exists(finalFilePath, async (exists) => {
    if (exists) {
      res.redirect('/exists');
    } else {
      await fs.copyFile(tempFilePath, finalFilePath);
      await fs.unlink(tempFilePath);
      res.redirect('/');
    }
  });
});

// starwars API
app.get('/movies', async (req, res) => {
  console.log({req})
  try {
    const response = await axios.get('https://swapi.dev/api/films/?format=json')
    res.status(200).json({movies: response.data})

  }catch(e) {
    console.error(e)
    res.status(500).json({message: 'ouch starwars API broken'})
  }
})


app.listen(process.env.PORT || 8080);
