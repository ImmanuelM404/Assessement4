// const express = require("express");
// const cors = require("cors");

// const app = express();


// app.use(cors());

// app.use(express.json()); // When we want to be able to accept JSON.



// app.get("/api/compliment", (req, res) => {
//   const compliments = [
//            "Gee, you're a smart cookie!",
// 					 "Cool shirt!",
// 					 "Your Javascript skills are stellar.",
//   ];

//   // choose random compliment
//   let randomIndex = Math.floor(Math.random() * compliments.length);
//   let randomCompliment = compliments[randomIndex];

//   res.status(200).send(randomCompliment);
  
// });

// app.get("/api/fortunes", (req, res) => {
//   const fortunes = [
//            "Self-knowledge is a life long process.",
// 					 "Soon life will become more interesting.",
// 					 "Success is a journey, not a destination.",
//            "Take`1   the high road.",
//            "Stand tall. Don’t look down upon yourself."
//   ];
//   // random fortune
//   let randomIndex = Math.floor(Math.random(3) * fortunes.length);
//   let randomFortunes = fortunes[randomIndex];

//   res.status(200).send(randomFortunes);
  
// });

// app.post('/api/encourage', (req, res) => {
//   let {meaning, message} = req.body;
//   res.status(200).send(`Here's a message for you: ${message}`);
// })

// app.post('/api/inspire', (req, res) => {
//   let {meaning, message} = req.body;
//   res.status(200).send(`Here's a message for you: ${message}`);
// })

// app.post('/api/help', (req, res) => {
//   let {meaning, message} = req.body;
//   res.status(200).send(`Here's a message for you: ${message}`);
// })

// app.delete('/api/help/:message', (req, res) => {
//    res.status(200).send(`Message has been deleted. Refresh page to start over again.`);
// })

// app.get('/api/helpInput/', (req, res) => {
//   let {paramInput2} = req.body;
//   res.status(200).send(`Your affirmation has been stored to the console. Thank you and best of luck. ${paramInput2}`);
// })



// app.listen(4000, () => console.log("Server running on 4000"));


            // u  P
const express = require("express");
const cors = require("cors");
const path = require('path')
            
const app = express();
            
            
app.use(cors());
            
app.use(express.json()); // When we want to be able to accept JSON.
app.use(express.static('client'))
app.use(express.static(path.join(__dirname, 'client/frontend.js')))


app.get("/api/compliment", (req, res) => {
  const compliments = [
           "Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortunes", (req, res) => {
  const fortunes = [
           "Self-knowledge is a life long process.",
					 "Soon life will become more interesting.",
					 "Success is a journey, not a destination.",
           "Take`1   the high road.",
           "Stand tall. Don’t look down upon yourself."
  ];
  // random fortune
  let randomIndex = Math.floor(Math.random(3) * fortunes.length);
  let randomFortunes = fortunes[randomIndex];

  res.status(200).send(randomFortunes);
  
});

app.post('/api/encourage', (req, res) => {
  let {meaning, message} = req.body;
  res.status(200).send(`Here's a message for you: ${message}`);
})

app.post('/api/inspire', (req, res) => {
  let {meaning, message} = req.body;
  res.status(200).send(`Here's a message for you: ${message}`);
})

app.post('/api/help', (req, res) => {
  let {meaning, message} = req.body;
  res.status(200).send(`Here's a message for you: ${message}`);
})

app.delete('/api/help/:message', (req, res) => {
   res.status(200).send(`Message has been deleted. Refresh page to start over again.`);
})

app.get('/api/helpInput/', (req, res) => {
  let {paramInput2} = req.body;
  res.status(200).send(`Your affirmation has been stored to the console. Thank you and best of luck. ${paramInput2}`);
})

            
 app.get('/', (req,res)=>{
 res.sendFile(path.join(__dirname, '../index.html'))
 })

 const port = process.env.PORT || 4000

app.listen(port, ()=>{
    console.log(`App is running on ${port}`);
})
