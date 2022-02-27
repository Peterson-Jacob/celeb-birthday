const express = require('express')
const axios = require('axios')
const app = express()
 const port = 8000
const date = new Date();


app.get('/', (req, res) => {

  const options = {
    method: 'GET',
 
  
  }
   
  options.url = 'https://imdb8.p.rapidapi.com/actors/list-born-today';
  options.params = {month: date.getMonth() + 1, day: date.getDate()};

  axios.request(options).then(function (response) {
      const celeb = response.data;
      const celebArray = [];
      let i = 0;
      while(celeb[i]){
        celebArray.push(celeb[i].substr(6));
        i++;  
      }
      options.url = 'https://imdb8.p.rapidapi.com/actors/get-bio';
      options.params = {nconst: celebArray[0]};
      
      
  axios.request(options).then(function (response) {
        const celebBio = response.data;

        res.send("<img src='" + celebBio.image.url + "'>");    
      
      }).catch(function (error) {
        console.error(error);
      });
    
     // res.send(data.name);
  }).catch(function (error) {
    console.error(error);
  });






})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
