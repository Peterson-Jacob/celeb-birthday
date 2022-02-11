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

      res.send(celeb[1]);
  }).catch(function (error) {
    console.error(error);
  });





})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
