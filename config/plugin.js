'use strict';

module.exports = {
  static  : true,
  security: false,
  session : true,
  cors    : {
    enable : true,
    package: 'egg-cors'
  },
  ejs     : {
    enable : true,
    package: 'egg-view-ejs'
  }
};
