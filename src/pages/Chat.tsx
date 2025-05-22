
import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { doctors } from '@/data/doctors';
import Navbar from '@/components/Navbar';
import ChatInterface from '@/components/ChatInterface';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Chat = () => {
  const { doctorId } = useParams<{ doctorId: string }>();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  
  const selectedDoctor = doctors.find(doc => doc.id === doctorId);
  
  if (!selectedDoctor) {
    return <Navigate to="/doctors" />;
  }

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="bg-white border-b py-2 px-4 flex items-center">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => navigate('/doctors')}
          className="mr-2"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back
        </Button>
        <div>
          <h1 className="font-medium">{selectedDoctor.name}</h1>
          <p className="text-xs text-gray-500">{selectedDoctor.specialty}</p>
        </div>
      </div>
      <ChatInterface doctor={selectedDoctor} />
    </div>
  );
};

export default Chat;
