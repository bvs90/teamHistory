var mongoose = require('mongoose');

module.exports = mongoose.model('TopScorers', {
  teamName : { type: String },
  teamNameShort : { type: String},
  topScorers : [{ name: String, goals: Number }]  
});
