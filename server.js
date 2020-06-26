const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req,res) => {
  res.send([
    {
      'id': 1,
      'image': 'https://placeimage.com/64/64/1',
      'name': '진예서',
      'birthday': '091231',
      'gender': '여자',
      'job': '첫째'
    },
    {
      'id': 2,
      'image': 'https://placeimage.com/64/64/2',
      'name': '진예림',
      'birthday': '140530',
      'gender': '여자',
      'job': '둘째'
    },
    {
      'id': 3,
      'image': 'https://placeimage.com/64/64/3',
      'name': '진예림',
      'birthday': '160428',
      'gender': '남자',
      'job': '셋째'
    }
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));