const express = require("express");
const airportData = require('./airportData')
const app = express();
const port = 5000;
app.use(express.json());

app.get("/airports", (req, res) => {
    res.send(airportData)
 })

app.post("/airports", async(req, res) => {
  const newAirport = req.body
  airportData.push(newAirport)
  const result = airportData.find(airport => airport === newAirport)
  res.send(result)
})

app.get("/airports/:id", (req, res) => {
  const result = airportData.find(value => value.icao === req.params.id)
  if (!result) {
    res.statusCode(404)
  }
  res.send(result)
})

app.put("/airports/:id", (req, res) => {
  const updateAirport = req.body; 
  let  result = airportData.find(value => value.icao === req.params.id)
  if (!result) {
    res.statusCode(404)
  }
  res.send(result)
})

app.delete("/airports/:id", (req, res) => {
  let result = airportData.find(value => value.icao === req.params.id)
  console.log(`aiport with id {req.param.id} has been deleted`);
  res.send(result)
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
  });

  module.exports = app; 