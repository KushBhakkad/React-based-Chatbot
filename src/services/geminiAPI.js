import { GoogleGenAI } from '@google/genai';

const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateResponse = async (userMessage) => {
  const prompt = `${userMessage}`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-lite-001",
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });
    // Extract the generated text
    if (
      response &&
      response.candidates &&
      response.candidates[0] &&
      response.candidates[0].content &&
      response.candidates[0].content.parts &&
      response.candidates[0].content.parts[0].text
    ) {
      const generatedText = response.candidates[0].content.parts[0].text;
      return generatedText;
    } else {
      throw new Error('Response does not contain expected content field');
    }
  } catch (error) {
    console.error('Error generating response:', error);
    throw new Error('Failed to get response from Gemini API');
  }
};