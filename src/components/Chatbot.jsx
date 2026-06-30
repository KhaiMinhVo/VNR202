import React, { useState, useRef, useEffect } from 'react';
import { FaTimes, FaBroadcastTower, FaPaperPlane } from 'react-icons/fa';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ReactMarkdown from 'react-markdown';
import TEXTBOOK_CONTENT from '../data/textbookContext.txt?raw';
import './Chatbot.css';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'BỘ CHỈ HUY XIN NGHE. ĐỒNG CHÍ CẦN HỖ TRỢ GÌ VỀ GIAI ĐOẠN 1954 - 1975?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [tempApiKey, setTempApiKey] = useState(API_KEY);
  
  const messagesEndRef = useRef(null);

  const activeGenAI = tempApiKey ? new GoogleGenerativeAI(tempApiKey) : genAI;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    if (!activeGenAI) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'LỖI ĐƯỜNG TRUYỀN. YÊU CẦU NHẬP MÃ BẢO MẬT (GEMINI API KEY) ĐỂ KẾT NỐI.' }]);
      return;
    }

    setIsLoading(true);

    try {
      const model = activeGenAI.getGenerativeModel({ model: 'gemini-robotics-er-1.6-preview' });
      
      const prompt = `Bạn là hệ thống AI hỗ trợ học tập môn Lịch sử Đảng. Nhiệm vụ của bạn là trả lời câu hỏi DỰA TRÊN dữ liệu dưới đây.
YÊU CẦU QUAN TRỌNG:
1. Trả lời thẳng vào vấn đề một cách tự nhiên, thân thiện. TUYỆT ĐỐI KHÔNG đóng kịch kiểu quân đội, KHÔNG xưng hô "Báo cáo cấp trên", KHÔNG chốt câu bằng từ "Hết" hay "Báo cáo hết".
2. TUYỆT ĐỐI KHÔNG sử dụng các từ ngữ như "theo giáo trình", "dựa trên nội dung", "tài liệu cho thấy".
3. KHÔNG ĐƯỢC sao chép y nguyên hay bê nguyên một đoạn văn dài trong tài liệu. Hãy tự tổng hợp, tóm tắt và diễn đạt lại bằng lời của bạn một cách dễ hiểu nhất, trình bày rõ ràng với các gạch đầu dòng nếu cần.
4. Nếu câu hỏi nằm ngoài dữ liệu, hãy trả lời ngắn gọn là "Xin lỗi, dữ liệu hiện tại của hệ thống không chứa thông tin về vấn đề này".

===== BẮT ĐẦU NỘI DUNG GIÁO TRÌNH =====
${TEXTBOOK_CONTENT}
===== KẾT THÚC NỘI DUNG GIÁO TRÌNH =====

Hãy suy nghĩ và trả lời ngắn gọn, rõ ràng, thân thiện cho câu hỏi sau của người dùng: 
"${userMessage}"`;
      
      const result = await model.generateContent(prompt);
      const response = result.response.text();

      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'MẤT KẾT NỐI. YÊU CẦU THỬ LẠI SAU.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveApiKey = () => {
    setTempApiKey(apiKeyInput);
    setApiKeyInput('');
    setMessages([{ role: 'assistant', content: 'ĐÃ LƯU MÃ BẢO MẬT. ĐƯỜNG TRUYỀN THÔNG SUỐT.' }]);
  };

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <button className="chatbot-toggle" onClick={() => setIsOpen(true)}>
          <FaBroadcastTower size={24} />
          <span>ĐIỆN ĐÀI</span>
        </button>
      )}

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-title">
              <FaBroadcastTower /> MÁY ĐIỆN BÁO
            </div>
            <button className="chatbot-close" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>

          {!activeGenAI && (
            <div className="chatbot-api-key">
              <p>NHẬP MÃ BẢO MẬT (API KEY):</p>
              <input 
                type="password" 
                value={apiKeyInput} 
                onChange={(e) => setApiKeyInput(e.target.value)}
                placeholder="AIzaSy..."
              />
              <button onClick={handleSaveApiKey}>XÁC NHẬN</button>
            </div>
          )}

          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message message-${msg.role}`}>
                <div className="message-content">
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message message-assistant">
                <div className="message-content typing">ĐANG NHẬN TÍN HIỆU...</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="chatbot-input" onSubmit={handleSend}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Nhập bức điện..."
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading || !input.trim()}>
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
