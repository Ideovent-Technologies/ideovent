import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const askGemini = async (question: string): Promise<string> => {
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        prompt: { text: question },
      }
    );

    console.log("🔍 Gemini Full Response:", JSON.stringify(response.data, null, 2));

    const text =
      response.data?.candidates?.[0]?.content?.[0]?.text ||
      response.data?.candidates?.[0]?.content?.map((p: any) => p.text).join(" ") ||
      null;

    return text || "⚠️ Gemini did not return a valid response";
  } catch (error: any) {
    console.error("❌ Gemini API Error:", error.response?.data || error.message);
    return "⚠️ Something went wrong with Gemini API";
  }
};
