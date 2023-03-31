const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
mongoose
  .connect(
    "mongodb+srv://swethak:Swetha240@cluster0.1xjubpd.mongodb.net/Netflix-clone?retryWrites=true&w=majority"
  )
  .then((con) => console.log("data connection established"))
  .catch((err) => console.log("failed", err));
mongoose.set("strictQuery", false);
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", require("./routes/authRoute"));
app.use("/user",require("./routes/userRoute"));
app.use("/movies",require("./routes/MovieRoute"));
app.use("/lists",require("./routes/listRoute"))
app.listen(4000, () => console.log("listening port to 4k..."));
//git config --global http.postBuffer 2097152000