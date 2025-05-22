
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { LogOut, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) return null;

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/doctors" className="flex items-center">
              <span className="text-2xl font-bold text-medicalBlue">MedAI</span>
              <span className="ml-2 text-sm bg-medicalGreen text-white px-2 py-0.5 rounded-full">Beta</span>
            </a>
          </div>
          <div className="flex items-center">
            <div className="flex items-center">
              <User className="h-5 w-5 text-gray-500 mr-2" />
              <span className="text-gray-700 mr-4">{user?.name}</span>
            </div>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={logout}
              className="flex items-center text-gray-500 hover:text-gray-700"
            >
              <LogOut className="h-4 w-4 mr-1" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
