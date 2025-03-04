import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/copy-url", (req, res) => {
    const text = req.query.text || "No URL Provided";
    res.send(`
        <script>
            navigator.clipboard.writeText("${text}").then(() => {
                alert("✅ 𝗘𝗦 𝗧𝗘𝗔𝗠𝗦 𝗩1 𝗨𝗥𝗟 𝗖𝗢𝗣𝗜𝗘𝗗 !");
                setTimeout(() => {
                    if (window.Telegram?.WebApp) {
                        window.Telegram.WebApp.close();
                    }
                }, 500);
            }).catch(err => {
                alert("⚠️ Failed to copy URL.");
                console.error("Copy Error:", err);
            });
        </script>
    `);
});

app.listen(PORT, () => {
    console.log(\`Server is running on http://localhost:\${PORT}\`);
});
