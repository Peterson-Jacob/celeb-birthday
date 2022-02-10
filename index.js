const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000
const date = new Date();

/*
      const options = {
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/actors/get-bio',
      params: {nconst: 'nm1760272/'},
      headers: {
        'x-rapidapi-host': 'imdb8.p.rapidapi.com',
        'x-rapidapi-key': '649d2fdc5cmsh99c14c1d8264b45p1b5fd1jsnc9570bb02b41'
      }
    };

    axios.request(options).then(function (response) {
      const data = response.data;
      res.send(data.name);
    }).catch(function (error) {
      console.error(error);
    });*/

app.get('/', (req, res) => {

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',
      'x-rapidapi-key': '649d2fdc5cmsh99c14c1d8264b45p1b5fd1jsnc9570bb02b41'
    }
  }
    //url: 'https://imdb8.p.rapidapi.com/actors/get-bio',
    //params: {nconst: 'nm1760272/'},

  options.url = 'https://imdb8.p.rapidapi.com/actors/list-born-today';
  options.params = {month: date.getMonth() + 1, day: date.getDate()};

  axios.request(options).then(function (response) {
      const celeb = response.data;
      let i = 0;
      let text = "";
      while(celeb[i]){
        text += celeb[i].substr(6) + "<br/>";
        i++;
      }

      //getBio.params.nconst = text;
      //res.send(getBio.params.nconst);

      res.send(text);
  }).catch(function (error) {
    console.error(error);
  });





})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
