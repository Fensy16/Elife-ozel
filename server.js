import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 🔑 API anahtarını buraya koy
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Basit endpoint
app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Sen Elif ile sohbet eden nazik, romantik bir asistansın. Samimi, içten ve centilmence cevap ver." },
        { role: "user", content: userMessage }
      ]
    });

    const reply = completion.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: "⚠️ Sunucu hatası." });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Server http://localhost:${PORT} üzerinde çalışıyor`));
