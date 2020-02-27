const mongoose = require("mongoose");

//DB connection

mongoose.connect("mongodb+srv://Viktor:Mikkeli@cluster0-8spbw.mongodb.net/associations?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on("connected", () =>{
    console.log("Mongoose is connected!");
});

//Merges
//POST

let postSchema = new mongoose.Schema({
    title: String,
    content: String
});

let Post = mongoose.model("Post", postSchema);

//USER

let userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

let User = mongoose.model("User", userSchema);


let newUser = new User({
    email: "viktor",
    name: "Viktor",
    posts: [
        {title: "Hello", content: "Blah blah"}
    ]
});

//newUser.save((error, user) => {
    //if (error) {
        //console.log(errro);
    //} else {
        //console.log(user);
    //}
//});

//User.findOne({
    //name: "Viktor"
//}, (error, user) => {
    //if (error) {
        //console.log(error);
    //} else {
        //console.log(user);
    //}
//});

//References

let userRefSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [{
        type: mongoose.Schema.Types>ObjectId,
        ref: "Post"
    }]
});

let User = mongoose.model("User", userRefSchema);