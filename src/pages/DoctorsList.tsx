
import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { Navigate } from 'react-router-dom';
import { doctors } from '@/data/doctors';
import Navbar from '@/components/Navbar';
import DoctorCard from '@/components/DoctorCard';

const DoctorsList = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">AI Doctor Consultations</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Select an AI doctor specialist to discuss your health concerns. Our AI doctors provide immediate health guidance and can refer you to human specialists when necessary.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorsList;
