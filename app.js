const express = require("express");
// console.log(express)

// Include shop routes
const shopRoutes = require("./routes/shopRoutes");

const PORT = 8000;
const app = express();

app.use(shopRoutes);


app.listen(PORT,() => console.log(`Server running on port ${PORT}`))