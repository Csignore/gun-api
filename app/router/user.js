'use strict';

module.exports = app => {

  app.post('/signin', 'user.signin');
  app.post('/signup', 'user.signup');
};
