import axios from "axios";
// Open Weather API Key 
const apiKeyOpenWeather = '27e2b94a1a01bc405c314d4025bd1174';


const API = {
  // getQuotes returns all quotes from out db
  getAllUsers: function() {
    return axios.get("/api/info");
  },
  // Save quote saves a quote to the db,
  // expects to be passed the new quotes text as an argument
  saveSignUp: function(newUser) {
    console.log("inside of API.js");
    console.log(newUser);
    return axios.post("/api/user", newUser );
  },
  // deleteQuote deletes a quote from the db,
  // expects the id of the quote to delete as an argument
  deleteQuote: function(id) {
    return axios.delete(`/api/quotes/${id}`);
  },
  // favorite quote toggle's a quote's 'favorite' status in the db,
  // expects the quote object as an argument
  userAccepted: function(user) {
    console.log("inside user accepted:", user);
    //invert isLoggedIn to true.
    user.isLoggedIn = !user.isLoggedIn;
    const { _id, isLoggedIn } = user;
    return axios.patch(`/api/user/${_id}`, { isLoggedIn });
  },
  passport: function(credentials) {
    console.log("inside of passport method in API");
    console.log(credentials);
    return axios.post("/api/credentials", credentials);
  },
  // This will run our query.
  getWeather: function() {
    console.log("Get Weather!");
    // Run a weather search using Axios. Then return the results as an object with an array.
    // See the Axios documentation for details on how we structured this with the params.
    return axios.get("http://api.openweathermap.org/data/2.5/weather", {
      params: {
        'appid': apiKeyOpenWeather,
        'q': 'San Diego'
      }
    })
    .then((results) => {
      console.log("Axios Results", results);
      return results;
    }).catch(function (error) {
      console.log(error);
    });
  }
};

export default API;
