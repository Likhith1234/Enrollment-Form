// importing packages/modules 
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const { router } = require("./routes/routes")

const app = express();

// port 
const port = process.env.PORT || 8000;

// middlewares
app.use(express.json());
app.use(cors());
app.use("/enroll", router);

// db connection 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/enrollment", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => {
    app.listen(port, () => {console.log(`Connection Established on port ${port}`);})
})
.catch((err) => {console.log(`Error is: ${err.message}`);});


if (process.env.NODE_ENV === "production")
{
    app.use(express.static("build"));

    app.get("*", (req, res) => {
        const file = path.join(__dirname, "build", "index.html");
        res.sendFile(file);
    })
}