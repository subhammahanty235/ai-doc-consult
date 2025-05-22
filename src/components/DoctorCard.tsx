
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Doctor } from '@/data/doctors';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  const navigate = useNavigate();

  const handleConsult = () => {
    navigate(`/chat/${doctor.id}`);
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={doctor.imageUrl} 
          alt={doctor.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-medicalBlue">{doctor.name}</CardTitle>
        <CardDescription className="text-gray-500 font-medium">
          {doctor.specialty}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-gray-600 text-sm mb-3">{doctor.description}</p>
        <div className="flex flex-wrap gap-1">
          {doctor.expertise.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="outline" className="bg-medicalBlue-light text-medicalBlue border-none">
              {skill}
            </Badge>
          ))}
          {doctor.expertise.length > 3 && (
            <Badge variant="outline" className="bg-gray-100 text-gray-500 border-none">
              +{doctor.expertise.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleConsult} 
          className="w-full bg-medicalBlue hover:bg-medicalBlue-dark text-white"
        >
          Consult Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DoctorCard;
