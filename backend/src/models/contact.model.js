// contact-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

require('mongoose-type-email');

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const contact = new mongooseClient.Schema({
      words: {
        type: String,
        required: [true, 'First Name is required']
      },
    keyword : {
      type: String,
      required: false
    },
    des : {
      type: String,
      required: false
    },
    createdAt: { type: Date, 'default': Date.now },
    updatedAt: { type: Date, 'default': Date.now }
  });

  return mongooseClient.model('contact', contact);
};
