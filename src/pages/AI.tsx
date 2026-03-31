import React, { useState, useRef, useEffect } from 'react';
import { Bot, Image as ImageIcon, Mic, Search, MapPin, Send, Loader2, BrainCircuit, Zap } from 'lucide-react';
import { chatWithGemini, analyzeImage, searchGrounding, mapsGrounding } from '../services/gemini';
import ReactMarkdown from 'react-markdown';

export default function AI() {
  const [activeTab, setActiveTab] = useState<'chat' | 'image' | 'search' | 'maps'>('chat');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string; type?: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageMimeType, setImageMimeType] = useState<string>('');
  const [useThinking, setUseThinking] = useState(false);
  const [useFast, setUseFast] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() && !selectedImage) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage || 'Analyzing image...', type: activeTab }]);
    setLoading(true);

    try {
      let response = '';

      if (activeTab === 'image' && selectedImage) {
        // Remove data:image/...;base64, prefix
        const base64Data = selectedImage.split(',')[1];
        response = await analyzeImage(base64Data, imageMimeType, userMessage || 'Describe this image in detail.');
        setSelectedImage(null);
      } else if (activeTab === 'search') {
        const res = await searchGrounding(userMessage);
        response = res.text;
        if (res.chunks && res.chunks.length > 0) {
          response += '\n\n**Sources:**\n' + res.chunks.map((c: any) => `- [${c.web?.title || 'Link'}](${c.web?.uri})`).join('\n');
        }
      } else if (activeTab === 'maps') {
        // Example coordinates for Kondakarakam region (approximate)
        const res = await mapsGrounding(userMessage, 18.0, 83.0);
        response = res.text;
        if (res.chunks && res.chunks.length > 0) {
          response += '\n\n**Locations:**\n' + res.chunks.map((c: any) => `- [${c.maps?.title || 'Map Link'}](${c.maps?.uri})`).join('\n');
        }
      } else {
        // Default Chat
        response = await chatWithGemini(userMessage, useThinking, useFast);
      }

      setMessages(prev => [...prev, { role: 'ai', content: response, type: activeTab }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'ai', content: 'Sorry, I encountered an error processing your request. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageMimeType(file.type);
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setActiveTab('image');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col animate-in fade-in duration-500">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-stone-900 flex items-center gap-3">
          <Bot className="text-emerald-600" size={32} /> AI Assistant
        </h1>
        <p className="text-stone-500 mt-1">Powered by Gemini. Ask questions, analyze images, or search for local info.</p>
      </div>

      <div className="flex-1 bg-white rounded-2xl shadow-sm border border-stone-200 flex flex-col overflow-hidden">
        {/* Tabs */}
        <div className="flex flex-wrap border-b border-stone-200 bg-stone-50 p-2 gap-2">
          <button
            onClick={() => setActiveTab('chat')}
            className={`px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 transition-colors ${activeTab === 'chat' ? 'bg-white text-emerald-700 shadow-sm border border-stone-200' : 'text-stone-600 hover:bg-stone-100'}`}
          >
            <Bot size={16} /> <span>General Chat</span>
          </button>
          <button
            onClick={() => setActiveTab('image')}
            className={`px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 transition-colors ${activeTab === 'image' ? 'bg-white text-emerald-700 shadow-sm border border-stone-200' : 'text-stone-600 hover:bg-stone-100'}`}
          >
            <ImageIcon size={16} /> <span>Analyze Image</span>
          </button>
          <button
            onClick={() => setActiveTab('search')}
            className={`px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 transition-colors ${activeTab === 'search' ? 'bg-white text-emerald-700 shadow-sm border border-stone-200' : 'text-stone-600 hover:bg-stone-100'}`}
          >
            <Search size={16} /> <span>Web Search</span>
          </button>
          <button
            onClick={() => setActiveTab('maps')}
            className={`px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 transition-colors ${activeTab === 'maps' ? 'bg-white text-emerald-700 shadow-sm border border-stone-200' : 'text-stone-600 hover:bg-stone-100'}`}
          >
            <MapPin size={16} /> <span>Local Maps</span>
          </button>
        </div>

        {/* Settings Bar (for Chat) */}
        {activeTab === 'chat' && (
          <div className="flex items-center gap-4 px-4 py-2 bg-stone-50 border-b border-stone-200 text-sm">
            <label className="flex items-center gap-2 cursor-pointer text-stone-700">
              <input type="checkbox" checked={useFast} onChange={(e) => { setUseFast(e.target.checked); if(e.target.checked) setUseThinking(false); }} className="rounded text-emerald-600 focus:ring-emerald-500" />
              <Zap size={14} className="text-amber-500" /> Fast Response (Flash-Lite)
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-stone-700">
              <input type="checkbox" checked={useThinking} onChange={(e) => { setUseThinking(e.target.checked); if(e.target.checked) setUseFast(false); }} className="rounded text-emerald-600 focus:ring-emerald-500" />
              <BrainCircuit size={14} className="text-purple-500" /> Deep Thinking (Pro)
            </label>
          </div>
        )}

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-stone-50/50">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-stone-400 space-y-4">
              <Bot size={48} className="text-emerald-200" />
              <p>How can I help you today?</p>
            </div>
          ) : (
            messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-emerald-600 text-white' : 'bg-stone-200 text-stone-700'}`}>
                  {msg.role === 'user' ? 'U' : <Bot size={18} />}
                </div>
                <div className={`max-w-[80%] rounded-2xl p-4 ${msg.role === 'user' ? 'bg-emerald-600 text-white rounded-tr-none' : 'bg-white border border-stone-200 shadow-sm rounded-tl-none text-stone-800'}`}>
                  <div className="prose prose-sm max-w-none prose-emerald">
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                </div>
              </div>
            ))
          )}
          {loading && (
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-stone-200 text-stone-700 flex items-center justify-center shrink-0">
                <Bot size={18} />
              </div>
              <div className="bg-white border border-stone-200 shadow-sm rounded-2xl rounded-tl-none p-4 flex items-center gap-2 text-stone-500">
                <Loader2 size={16} className="animate-spin" /> {useThinking ? 'Thinking deeply...' : 'Generating response...'}
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-stone-200">
          {selectedImage && (
            <div className="mb-4 relative inline-block">
              <img src={selectedImage} alt="Selected" className="h-24 rounded-lg border border-stone-200 shadow-sm" />
              <button onClick={() => setSelectedImage(null)} className="absolute -top-2 -right-2 bg-rose-500 text-white rounded-full p-1 shadow-md hover:bg-rose-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
          )}
          <div className="flex items-end gap-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="p-3 text-stone-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors"
              title="Upload Image"
            >
              <ImageIcon size={24} />
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              className="hidden"
            />
            <button
              className="p-3 text-stone-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors"
              title="Voice Input (Live API)"
              onClick={() => alert("Voice interaction requires microphone permissions and Live API setup. This is a placeholder for the native audio feature.")}
            >
              <Mic size={24} />
            </button>
            <div className="flex-1 relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder={activeTab === 'image' && selectedImage ? "Ask about this image..." : "Type your message..."}
                className="w-full max-h-32 min-h-[52px] rounded-2xl border-stone-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 py-3 pl-4 pr-12 resize-none border"
                rows={1}
              />
              <button
                onClick={handleSend}
                disabled={loading || (!input.trim() && !selectedImage)}
                className="absolute right-2 bottom-2 p-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
