const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = 8080;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// your code goes here

app.get(__dirname +"/", function(req, res){
    res.setHeader("Content-type", "application/JSON");

    res.status(200).sendFile(JSON.stringify('InitialData.js'), (err)=>{
        if(err) console.log(err);
    });

});


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   