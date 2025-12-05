import { GoogleGenAI, Type } from "@google/genai";
import { Product } from "../types";
import { PRODUCTS } from "../constants";

// Initialize Gemini
// Note: In a real app, ensure process.env.API_KEY is defined.
// For this demo, we assume the environment is set up correctly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getFurnitureRecommendation = async (userQuery: string): Promise<{ text: string; productIds: string[] }> => {
  try {
    const productListString = JSON.stringify(PRODUCTS.map(p => ({ id: p.id, name: p.name, category: p.category, price: p.price })));

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `User Query: "${userQuery}". 
      Available Products Catalog: ${productListString}.
      
      You are an expert interior design consultant for Modern Amenities. 
      Analyze the user's request and recommend suitable products from the catalog.
      Provide a helpful, professional response explaining why you chose these items.
      Also return the list of matching product IDs.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendationText: {
              type: Type.STRING,
              description: "A professional, polite, and persuasive response to the user recommending the furniture.",
            },
            recommendedProductIds: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Array of product IDs from the catalog that match the user's needs.",
            },
          },
          required: ["recommendationText", "recommendedProductIds"],
        },
      },
    });

    const jsonResponse = JSON.parse(response.text || '{}');
    
    return {
      text: jsonResponse.recommendationText || "I couldn't find a specific match, but please browse our extensive catalog.",
      productIds: jsonResponse.recommendedProductIds || []
    };

  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      text: "I'm having trouble connecting to the design server right now. Please browse our collections manually.",
      productIds: []
    };
  }
};