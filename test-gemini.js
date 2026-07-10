import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Simple manual .env parser
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, '.env.local');

let apiKey = '';
if (fs.existsSync(envPath)) {
  const envFile = fs.readFileSync(envPath, 'utf-8');
  const match = envFile.match(/VITE_GEMINI_API_KEY=(.*)/);
  if (match && match[1]) {
    apiKey = match[1].trim();
  }
}

if (!apiKey) {
  console.error('No VITE_GEMINI_API_KEY found in .env.local');
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

try {
  const result = await model.generateContent('Say hello world');
  console.log('Success! Connection works. Response:', result.response.text());
} catch (error) {
  console.log('Gemini API Error Status:', error.status);
  console.log('Gemini API Error Message:', error.message);
}

