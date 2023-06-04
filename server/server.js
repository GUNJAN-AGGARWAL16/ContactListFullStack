const express = require("express");
const connectDB = require("./src/config/db");
const path = require("path");
const app = express();
require("dotenv").config();

const corsOptions = {
  origin: "https://contactlistf.onrender.com/", 
}


// Connect Database
connectDB();
// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/users", require("./src/routes/users"));
app.use("/api/auth", require("./src/routes/auth"));
app.use("/api/contacts", require("./src/routes/contacts"));

// Serve Static assets in production
if (process.env.NODE_ENV === "production") {
  //  Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
