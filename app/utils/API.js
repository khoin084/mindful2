import axios from "axios";
// Open Weather API Key 
const apiKeyOpenWeather = '27e2b94a1a01bc405c314d4025bd1174';
// NYT API Key (Replace with your own API Key)
var APIKey = "9b3adf57854f4a19b7b5782cdd6e427a";


const API = {
  // getAllUsers returns all registered users from our db
  getAllUsers: function() {
    return axios.get("/api/info");
  },
  // getAllAudio returns all the audio meditation files from our db.
  getAllAudio: function() {
    return axios.get("/api/audio");
  },
  // Save users to the db,
  saveSignUp: function(newUser) {
    console.log("inside of API.js");
    console.log(newUser);
    return axios.post("/api/user", newUser );
  },
  // Save users to the db,
  saveAudio: function(newAudio) {
    console.log(newAudio);
    return axios.post("/api/audio", newAudio );
  },
  // deleteQuote deletes a quote from the db,
  // expects the id of the quote to delete as an argument
  deleteQuote: function(id) {
    return axios.delete(`/api/quotes/${id}`);
  },
  // favorite quote toggle's a quote's 'favorite' status in the db,
  // expects the quote object as an argument
  userAccepted: function(user) {
    console.log("inside user accepted: ", user);
    //invert isLoggedIn to true.
    user.isLoggedIn = !user.isLoggedIn;
    const { _id, isLoggedIn } = user;
    return axios.patch(`/api/user/${_id}`, { isLoggedIn });
  },
  logOutUser: function(user) {
    user.isLoggedIn = !user.isLoggedIn;
    console.log("insdie log out user: ", user);
    const { _id, isLoggedIn } = user;
    return axios.patch(`/api/user/${_id}`, { isLoggedIn });
  },
  passport: function(credentials) {
    console.log("inside of passport method in API");
    console.log(credentials);
    return axios.post("/api/credentials", credentials);
  },
  // getting weather.
  getWeather: function(city) {
    console.log("Get Weather of city: " + city);
    // Run a weather search using Axios. Then return the results as an object with an array.
    // See the Axios documentation for details on how we structured this with the params.
    return axios.get("http://api.openweathermap.org/data/2.5/weather", {
      params: {
        'appid': apiKeyOpenWeather,
        'q': city
      }
    })
    .then((results) => {
      console.log("Axios Results", results);
      return results;
    }).catch(function (error) {
      console.log(error);
    });
  },
  // getting news.
  getNews: function() {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      params: {
        "api-key": APIKey
      }
    })
    .then(function(results) {
      console.log("Axios Results", results.data.response);
      return results.data.response;
    });
  } 
};

export default API;
