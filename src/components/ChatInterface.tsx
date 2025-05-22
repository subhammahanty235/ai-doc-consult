
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import MessageItem, { Message } from './MessageItem';
import ImageUpload from './ImageUpload';
import { mockResponses, genericResponses, noMatchResponse } from '@/data/responses';
import { Doctor } from '@/data/doctors';

interface ChatInterfaceProps {
  doctor: Doctor;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ doctor }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Initial greeting message
  useEffect(() => {
    const initialMessage: Message = {
      id: '0',
      content: `Hello! I'm ${doctor.name}, an AI assistant specializing in ${doctor.specialty}. How can I help you today?`,
      sender: 'ai',
      timestamp: new Date()
    };
    
    setMessages([initialMessage]);
  }, [doctor]);

  // Auto scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputText.trim() && !selectedImage) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputText,
      sender: 'user',
      timestamp: new Date(),
      imageUrl: selectedImage || undefined
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setSelectedImage(null);
    setIsTyping(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      const response = generateAIResponse(inputText);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Get doctor-specific responses
    const doctorResponses = mockResponses[doctor.id] || [];
    
    // Check if any keywords match
    for (const template of doctorResponses) {
      if (template.keywords.some(keyword => input.includes(keyword.toLowerCase()))) {
        return template.response;
      }
    }
    
    // If no keyword matches, return a generic response or suggest consultation
    const randomIndex = Math.floor(Math.random() * genericResponses.length);
    return userInput.length > 30 ? noMatchResponse : genericResponses[randomIndex];
  };

  const handleImageSelected = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  // Typing indicator component
  const TypingIndicator = () => (
    <div className="flex items-center space-x-1 p-2 bg-gray-100 rounded-xl w-20 ml-12">
      <div className="typing-dot w-2 h-2 bg-gray-500 rounded-full"></div>
      <div className="typing-dot w-2 h-2 bg-gray-500 rounded-full"></div>
      <div className="typing-dot w-2 h-2 bg-gray-500 rounded-full"></div>
    </div>
  );

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <div className="flex-1 overflow-y-auto p-4 chat-scrollbar">
        {messages.map((message) => (
          <MessageItem 
            key={message.id} 
            message={message} 
            doctorImage={doctor.imageUrl}
          />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="border-t p-4 bg-white">
        <form onSubmit={handleSendMessage} className="flex items-center">
          <ImageUpload onImageSelected={handleImageSelected} />
          <Input
            placeholder="Type your message here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="flex-1 mx-2 focus-visible:ring-medicalBlue"
          />
          <Button 
            type="submit" 
            size="icon" 
            className="bg-medicalBlue hover:bg-medicalBlue-dark"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;
