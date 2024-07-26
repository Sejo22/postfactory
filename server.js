// const express = require("express");
// require("dotenv").config();
// const axios = require("axios");
// const app = express();
// const cors = require("cors");
// app.use(cors());

// // API request
// app.get("/", (req, res) => {
//   const options = {
//     method: "GET",
//     url: "https://fir-design-visitors-default-rtdb.europe-west1.firebasedatabase.app",
//     headers: {
//       "X-RapidAPI-Key": process.env.FIREBASE_API_KEY,
//       "X-RapidAPI-Host": "fir-design-visitors.firebaseapp.com",
//     },
//   };

//   axios
//     .request(options)
//     .then(function (response) {
//       res.json(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// });
