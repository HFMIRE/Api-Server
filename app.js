
const express = require("express");
const airportData = require('./airportData')
const app = express();
const port = 5000;
const airportRoutes = require('./routes/airports.js')
app.use(express.json());


app.get("/", (req, res) => {
    res.send(airportData)
 })

app.post("/", async(req, res) => {
const newAirport = req.body
 airportData.push(newAirport)
 const result = airportData.find(airport => airport === newAirport)
res.send(result)
})

app.get("/airports/:id", (req, res) => {
    const result = airportData[req.params.id]
    res.send(result)
})

app.put("/airports/:id", (req, res) => {
    const updateAirport = req.body; 
    const result = airportData[req.params.id]
    console.log(result.name = updateAirport)
    res.send(result)
})

app.delete("/airports/:id", (req, res) => {
    const result = airportData[req.params.id]
    console.log(`aiport with id ${result} has been deleted`);
    
    aiports = aiportsData.filter(airport => airport !== result);
})


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });