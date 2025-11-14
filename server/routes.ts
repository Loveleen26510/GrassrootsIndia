import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import OpenAI from "openai";

// Support both OpenAI and OpenRouter API keys
// OpenRouter provides access to multiple AI models including OpenAI
const apiKey ="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";
const isOpenRouter = apiKey.startsWith("sk-or-");

const openai = new OpenAI({
  apiKey,
  baseURL: isOpenRouter ? "https://openrouter.ai/api/v1" : undefined,
  defaultHeaders: isOpenRouter ? {
    "HTTP-Referer": "https://grassrootsindia.org",
    "X-Title": "Grassroots India Chatbot"
  } : undefined
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Chatbot API endpoint
  app.post("/api/chatbot", async (req, res) => {
    try {
      // Check if API key is configured
      if (!apiKey) {
        console.error("OPENAI_API_KEY environment variable is not set");
        return res.status(503).json({ error: "Chatbot service is currently unavailable. Please try again later." });
      }
      
      const { message } = req.body;
      
      if (!message || typeof message !== "string") {
        return res.status(400).json({ error: "Message is required" });
      }

      // System prompt that gives context about Grassroots India
      const systemPrompt = `You are a helpful assistant for Grassroots India, a Section 8 not-for-profit organization dedicated to charitable activities and holistic community development.

Key information about Grassroots India:
- Mission: To undertake charitable activities for the development of the vulnerable
- Vision: To promote education, arts, and science at all levels
- Approach: To provide emergency relief, basic care, and public health services

Core Pillars of Work:
1. Relief & Rehabilitation: Providing immediate emergency relief and long-term rehabilitation support
2. Education For All: Ensuring access to quality education for underprivileged children
3. Health & Nutrition: Delivering essential healthcare services and nutritional support
4. Women Empowerment: Empowering women through skill development and economic opportunities
5. Livelihood & Commerce: Creating sustainable livelihood opportunities
6. Peace & Harmony: Fostering interfaith dialogue and community harmony

Impact Statistics:
- 5,000+ Lives Touched
- 25+ Projects Completed
- 1,200+ Children Educated
- 10+ Partner NGOs

Contact Information:
- Address: 123 Community Street, New Delhi, India
- Phone: +91 98765 43210
- Email: info@grassrootsindia.org

Answer questions about the organization, its mission, how to volunteer, how to donate, or how to partner. Be warm, compassionate, and professional. Keep responses concise and helpful.`;

      // Use appropriate model based on API provider
      const model = isOpenRouter ? "openai/gpt-4o-mini" : "gpt-4o-mini";
      
      const completion = await openai.chat.completions.create({
        model,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message }
        ],
        max_tokens: 500,
      });

      const reply = completion.choices[0].message.content;

      res.json({ reply });
    } catch (error: any) {
      // Log only safe error information - never log message or any field that might contain API keys
      const safeErrorInfo = {
        name: error?.name,
        status: error?.status,
        code: error?.code,
        type: error?.type
      };
      console.error("Chatbot error:", safeErrorInfo);
      
      // Return appropriate error message based on error type
      if (error?.status === 401 || error?.code === 'invalid_api_key') {
        console.error("API key authentication failed - please check OPENAI_API_KEY configuration");
        res.status(503).json({ error: "Chatbot service is currently unavailable. Please try again later." });
      } else {
        res.status(500).json({ error: "Failed to process your message. Please try again." });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
