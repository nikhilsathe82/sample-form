// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);
//Create a body parsing middleware with the built in express body-parser in order to populate the req.body with our inputs
app.use(express.urlencoded({extended: true}))

//Set the view engine to ejs
app.set("view engine", "ejs")

// Create a route for displaying the html form we created
app.get("/index", (req, res)=>{
  res.render("index")
});

//Import the userModel from the models.js 
const UserModel = require("./model.js");

//Create a route/endpoint for collecting and sending the user inputs to our Mongo DataBase
app.post("/api_user", (req, res)=>{
  //Instantiate the UserModel and pass the req.body as an argument
  //The req.body holds the user inputs sent from the form.
  const SaveUser = new UserModel(req.body);

  //Save the UserInput to your database by adding the following lines of code to the endpoint:
  SaveUser.save((error, savedUser)=>{
    if(error) throw error
    res.json(savedUser);
});


