const express = require('express');
const app = express();
const port = 3300;

app.get('/message', function (req, res) {
     res.send('This is the message');
});

app.get('/evaluator/isEven/:number', function (req, res) {
     const number = parseInt(req.params.number);
     var isEven = number % 2 == 0;
     var data = {
          Number: number,
          IsEven: isEven
     }
     res.send(data);
});

app.get('/evaluator/isOdd/:number', function (req, res) {
     const number = parseInt(req.params.number);
     var isOdd = number % 2 == 1;
     var data = {
          Number: number,
          IsOdd: isOdd
     }
     res.send(data);
});

app.get('/evaluator/isPrime/:number', function (req, res) {
     const number = parseInt(req.params.number);
     var isPrime = true;

     if (number == 1)
     {
          isPrime = false;
     }
     else if (number == 2)
     {
          isPrime = true;
     } else
     {
          for (var x = 2; x < number; x++) {
               if (number % x == 0) {
                    isPrime = false;
                    break;
               }
          }
     }

     var data = {
          Number: number,
          IsPrime: isPrime 
     }

     res.send(data);
});

app.listen(port, function () {
     console.log("\nServer is running on port " + port);
});

module.exports = app; // for testing