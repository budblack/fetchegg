'use strict';

module.exports = (app) => {
  const { pubSite: ConPubSite } = app.controller;
  
  app.get('/', ConPubSite.page.showIndex);
};
