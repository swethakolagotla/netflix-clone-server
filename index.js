const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
 

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });
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