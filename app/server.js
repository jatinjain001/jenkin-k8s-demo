const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello from Jenkins CI/CD v2! 🚀");
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP"
    });
});

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});