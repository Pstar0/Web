import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from 'public' folder
app.use(express.static("public"));

// Route for Copy URL
app.get("/copy-url", (req, res) => {
    res.sendFile(path.resolve("copy-url.html"));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});