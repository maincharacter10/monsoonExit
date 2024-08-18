const mongoose = require("mongoose");
mongoose
  .connect('mongodb+srv://alexjohn1047:alexjohn@cluster0.oybuu96.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
