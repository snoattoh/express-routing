const express = require('express');
const { mean, median, mode } = require('./operations');
const app = express();

const makeIntArray = (queryNums) => queryNums.split(',').map((val) => val = +val);

app.get('/mean', (req, res) => {
    const nums = makeIntArray(req.query.nums)
    const val = mean(nums);
    return res.json({
        response:{
            operation: "mean",
            value: val
        }
    });
});

app.get('/median', (req, res) => {
    const nums = makeIntArray(req.query.nums)
    const val = median(nums);
    console.log(val);
    return res.json({
        response:{
            operation: "median",
            value: val
        }
    });
});

app.get('/mode', (req, res) => {
    const nums = makeIntArray(req.query.nums)
    const val = mode(nums);
    return res.json({
        response:{
            operation: "mode",
            value: val
        }
    });
});

app.get('/all', (req, res) => {
    const nums = makeIntArray(req.query.nums)
    const meanValue =   mean(nums);
    const medianValue = median(nums);
    const modeValue =   mode(nums);
    return res.json({
        response:{
            operation: "all",
            mean: meanValue,
            median: medianValue,
            mode: modeValue
        }
    });
});

// 404 handler

app.use(function (req, res, next) {
  const notFoundError = new ExpressError("Not Found", 404);
  return next(notFoundError)
});

// generic error handler
app.use(function(err, req, res, next) {
  // the default status is 500 Internal Server Error
  let status = err.status || 500;
  let message = err.message;

  // set the status and alert the user
  return res.status(status).json({
    error: {message, status}
  });
});
// end generic handler
app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});