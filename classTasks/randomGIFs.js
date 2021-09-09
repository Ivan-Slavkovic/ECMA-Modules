var axios = require("axios").default;
var options = {
    method: 'GET',
    url: 'https://api.giphy.com/v1/gifs/trending?limit=100',
    params: { api_key: 'LnT2AMJHLeYkZEnNvcc5KsmgJTzBKra8' },
    headers: { 'x-rapidapi-host': 'giphy.p.rapidapi.com', 'x-rapidapi-key': 'undefined' }
};

axios.request(options).then(function (response) {
    var randomNumber = Math.floor(Math.random() * response.data.data.length)
    // console.log(randomNumber);
    console.log(response.data.data[randomNumber].images.original.url);
    // console.log(response);
}).catch(function (error) {
    console.error(error);
});
