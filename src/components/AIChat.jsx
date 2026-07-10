import React, { useState, useEffect, useRef } from 'react';
import { Send, X, Bot, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey || 'dummy');
console.log("Is Gemini API Key loaded in this build?:", !!apiKey);

const SYSTEM_PROMPT = `
You are the AI Assistant for Jithendra Mallela's portfolio website. Your purpose is to answer questions about him professionally and enthusiastically. 

Here are some facts about Jithendra:
- Pursuing a B.Tech degree in Computer Science/Engineering (SEM 6).
- Aspiring Software Engineer and Data Science learner based in India.
- Enthusiastic about Full Stack Web Development, Artificial Intelligence, and Retrieval-Augmented Generation (RAG).
- Skills: Python, React, JavaScript, HTML, CSS, Tailwind, AI tools, LangChain, FAISS, Django, OpenAI API.
- Projects:
  1. AI-Powered Research Assistant using RAG (Dec 2025 - Feb 2026): Python, RAG, LangChain, FAISS, Streamlit. Allows Q&A over PDF logic.
  2. AI-Interview Coach Web App (Aug 2025 - Jan 2026): Django, OpenAI, LangChain. AI-scored feedback and resume analyzer.
- Personal traits: Continuous learner, problem solver, driven to build high-impact solutions.

Guidelines:
- If a user asks a question, provide a concise, helpful answer based on these facts.
- Do not make up information that isn't provided here. If you don't know, suggest they contact Jithendra directly through the Contact section.
- Write in a friendly, professional, but conversational tone.
- Keep responses relatively brief (max 2-3 short paragraphs), as this is a small chat widget.
`;

const AIChat = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm Jithendra's AI assistant. Ask me anything about his skills, projects, or background!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    if (!apiKey || apiKey === 'your_api_key_here') {
      setMessages(prev => [...prev, 
        { role: 'user', content: input },
        { role: 'assistant', content: 'It looks like the Gemini API Key is missing. Please add the `VITE_GEMINI_API_KEY` to your environment to chat with me!' }
      ]);
      setInput('');
      return;
    }

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
      
      const chat = model.startChat({
        history: [
          {
            role: "user",
            parts: [{ text: "System instructions: " + SYSTEM_PROMPT }]
          },
          {
            role: "model",
            parts: [{ text: "Understood! I am ready to answer questions about Jithendra Mallela." }]
          },
          ...messages.filter(m => m.role !== 'assistant' || m.content !== "Hi! I'm Jithendra's AI assistant. Ask me anything about his skills, projects, or background!").map(m => ({
            role: m.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: m.content }]
          }))
        ]
      });

      const result = await chat.sendMessage(userMsg);
      const text = result.response.text();
      
      setMessages(prev => [...prev, { role: 'assistant', content: text }]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Oops! Something went wrong while connecting to my brain. Please try again later.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="ai-chat-widget glass animate-fade-in">
      <div className="chat-header">
        <div className="chat-title">
          <Bot size={20} className="text-highlight" />
          <span>AI Assistant</span>
        </div>
        <button className="chat-close" onClick={onClose} aria-label="Close chat">
          <X size={20} />
        </button>
      </div>
      
      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-message ${msg.role}`}>
            <div className="message-avatar">
              {msg.role === 'assistant' ? <Bot size={16} /> : <User size={16} />}
            </div>
            <div className="message-content">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.content}</ReactMarkdown>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="chat-message assistant">
            <div className="message-avatar"><Bot size={16} /></div>
            <div className="message-content typing-indicator">
              <span></span><span></span><span></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSend} className="chat-input-area">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Jithendra..."
          className="chat-input"
        />
        <button type="submit" className="chat-send-btn" disabled={!input.trim() || isLoading}>
          <Send size={18} />
        </button>
      </form>
    </div>
  );
};

export default AIChat;
