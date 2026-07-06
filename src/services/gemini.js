import { GoogleGenerativeAI } from "@google/generative-ai";

console.log(
  "API Key:",
  import.meta.env.VITE_GEMINI_API_KEY?.slice(0, 10)
);


const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

export async function generateNotes(topic, format) {
  const prompt = `
Create high-quality notes on "${topic}".

Generate notes according to this length:

One Line → 1 sentence only
Short → 100-150 words
Detailed → 300-500 words
1 Page → 700-1000 words

Selected Format: ${format}
Follow this structure:

# Introduction
Give a simple introduction to the topic.

# Key Concepts
Explain the important concepts clearly.

# Important Points
Provide important points in bullet form.

# Examples
Give real-world examples wherever possible.

# Conclusion
Summarize the topic briefly.

Instructions:
- Use clear headings.
- Use bullet points.
- Make it beginner-friendly.
- Keep the notes well-structured.
- Avoid unnecessary repetition.
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
}
export async function generateQuiz(topic) {
  const prompt = `
Create 5 multiple-choice questions on "${topic}".

Format:

Q1. Question

A) Option
B) Option
C) Option
D) Option

Answer: Correct Option

Make questions educational and beginner-friendly.
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
}
export async function generateFlashcards(topic) {
  const prompt = `
Create 10 study flashcards on "${topic}".

Format exactly like this:

Flashcard 1
Question: What is ...?
Answer: ...

Flashcard 2
Question: What is ...?
Answer: ...

Make the flashcards beginner-friendly and useful for revision.
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
}