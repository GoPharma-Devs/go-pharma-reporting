const moongose = require("mongoose");
const UserSchema = moongose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = moongose.model("User", UserSchema);
