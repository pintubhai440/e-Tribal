import { GoogleGenAI, Type, ThinkingLevel } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

export const analyzeImage = async (base64Image: string, mimeType: string, prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Image,
              mimeType: mimeType,
            },
          },
          {
            text: prompt,
          },
        ],
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error analyzing image:", error);
    throw error;
  }
};

export const analyzeVideo = async (videoUri: string, prompt: string) => {
  // Note: Video analysis requires uploading the video using File API first.
  // This is a placeholder for the actual implementation which would need a backend or File API.
  // For this applet, we'll simulate it or use a simplified approach if needed.
  return "Video analysis is not fully supported in this client-only environment without File API upload.";
};

export const chatWithGemini = async (message: string, useThinking: boolean = false, useFast: boolean = false) => {
  try {
    let model = "gemini-3.1-pro-preview";
    if (useFast) {
      model = "gemini-3.1-flash-lite-preview";
    }
    
    const config: any = {};
    if (useThinking && !useFast) {
      config.thinkingConfig = { thinkingLevel: ThinkingLevel.HIGH };
    }

    const response = await ai.models.generateContent({
      model: model,
      contents: message,
      config: config
    });
    return response.text;
  } catch (error) {
    console.error("Error chatting with Gemini:", error);
    throw error;
  }
};

export const searchGrounding = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: query,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });
    return {
      text: response.text,
      chunks: response.candidates?.[0]?.groundingMetadata?.groundingChunks
    };
  } catch (error) {
    console.error("Error with search grounding:", error);
    throw error;
  }
};

export const mapsGrounding = async (query: string, lat?: number, lng?: number) => {
  try {
    const config: any = {
      tools: [{ googleSearch: {} }],
    };
    
    if (lat && lng) {
      config.toolConfig = {
        retrievalConfig: {
          latLng: {
            latitude: lat,
            longitude: lng
          }
        }
      };
    }

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: query,
      config: config,
    });
    return {
      text: response.text,
      chunks: response.candidates?.[0]?.groundingMetadata?.groundingChunks
    };
  } catch (error) {
    console.error("Error with maps grounding:", error);
    throw error;
  }
};
