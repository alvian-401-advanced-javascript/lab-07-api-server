'use strict';

module.exports = (req,res,next) => {
  console.log('Unknown Route');
  res.status(404);
  res.send('Invalid request');
  res.end();
};
