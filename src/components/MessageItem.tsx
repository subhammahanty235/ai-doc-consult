
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  imageUrl?: string;
}

interface MessageItemProps {
  message: Message;
  doctorImage?: string;
}

const MessageItem: React.FC<MessageItemProps> = ({ message, doctorImage }) => {
  const isUser = message.sender === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      {!isUser && (
        <div className="mr-3 flex-shrink-0">
          <Avatar>
            <AvatarImage src={doctorImage} alt="Doctor" />
            <AvatarFallback className="bg-medicalBlue text-white">AI</AvatarFallback>
          </Avatar>
        </div>
      )}
      <div className={`max-w-[80%] ${isUser ? 'bg-medicalBlue text-white' : 'bg-gray-100 text-gray-800'} rounded-xl px-4 py-2`}>
        {message.content}
        {message.imageUrl && (
          <div className="mt-2">
            <img 
              src={message.imageUrl} 
              alt="Uploaded" 
              className="rounded-md max-h-60 w-auto" 
            />
          </div>
        )}
        <div className={`text-xs mt-1 ${isUser ? 'text-blue-200' : 'text-gray-500'}`}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
      {isUser && (
        <div className="ml-3 flex-shrink-0">
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1599566150163-29194dcaad36" alt="User" />
            <AvatarFallback className="bg-gray-500 text-white">U</AvatarFallback>
          </Avatar>
        </div>
      )}
    </div>
  );
};

export default MessageItem;
