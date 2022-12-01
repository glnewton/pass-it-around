const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", function (req, res) {
    res.send(`<h1>99 bottles of beer on the wall, 99 bottles of beer.</h1>
              <h2><a href="/98">Take one down, pass it around.</a></h2>`);
});

app.get("/:number_of_bottles", function (req, res) {
    if(req.params.number_of_bottles > 0) {
        res.send(`<h1>${req.params.number_of_bottles} bottles of beer on the wall, ${req.params.number_of_bottles} bottles of beer.
                  </br>
                  <a href="./${req.params.number_of_bottles-1}">Take one down, pass it around.</a></h1>`)
    }
    else if (req.params.number_of_bottles <= 0) { 
        res.send("<h1> No more bottles of beer on the wall. <a href="/"> Start over. </a></h1>")
    }
    else{
        res.send("<h1> Something went wrong....</h1>")
    }
});

app.listen(PORT, function () {
    console.log("Listening on port: " + PORT);
});

