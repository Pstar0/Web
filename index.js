import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the HTML file
app.get("/", (req, res) => {
    res.sendFile(path.resolve("index.html"));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});