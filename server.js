import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message || "";

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `Sen Elif ile konuşan kibar, romantik bir asistansın. 
Cevapların kısa, samimi, tatlı olsun. 
Her cevabının SONUNDA Elif'e küçük bir soru sor. 🌹🦋`,
        },
        { role: "user", content: userMessage },
      ],
    });

    const reply = completion.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error("API Hatası:", err);
    res.status(500).json({ reply: "⚠️ Sunucuda bir sorun oldu." });
  }
});

app.listen(port, () => {
  console.log(`✅ Backend http://localhost:${port} adresinde çalışıyor`);
});
