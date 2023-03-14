//require the mongoose module
const mongoose = require('./db');

//create a Schema variable and assign the Schema class from mongoose to it
const Schema = mongoose.Schema;

//Create a UserSchema variable and assign a document structure
// to the new instance of Schema. We will
const UserSchema = new Schema({
  firstname: {
    type: String,
    required: [true, 'Firstname is required'],
  },
  lastname: {
    type: String,
    required: [true, 'Lastname is required'],
  },
});

// create a mongoose model that provides a way to interact with db to update, delete, create records etc.
// It will be created with a collection name and user schema created above.
const userModel = mongoose.model('user', UserSchema);

//exporting the model
module.export = userModel;
