import mongoose from "mongoose";

// Connect to MongoDB
const Connection = (username, password) => {
  const URL =
    `mongodb+srv://${username}:${password}@blog-app.7elbpa6.mongodb.net/?retryWrites=true&w=majority&appName=blog-app`;
  mongoose
    .connect(URL)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default Connection;
