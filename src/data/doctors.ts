
export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  description: string;
  imageUrl: string;
  expertise: string[];
}

export const doctors: Doctor[] = [
  {
    id: "dr-emily-pediatric",
    name: "Dr. Emily Chen",
    specialty: "Pediatrics",
    description: "AI Specialist in children's health from newborns to adolescents.",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    expertise: ["Childhood Diseases", "Development", "Vaccinations", "Nutrition"]
  },
  {
    id: "dr-james-cardio",
    name: "Dr. James Wilson",
    specialty: "Cardiology",
    description: "AI Expert in heart health, prevention and management of heart conditions.",
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    expertise: ["Heart Disease", "Blood Pressure", "Cholesterol", "Cardiac Health"]
  },
  {
    id: "dr-sarah-derma",
    name: "Dr. Sarah Johnson",
    specialty: "Dermatology",
    description: "AI Specialist in skin conditions, treatments and preventative care.",
    imageUrl: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    expertise: ["Acne", "Eczema", "Skin Cancer", "Rashes"]
  },
  {
    id: "dr-michael-neuro",
    name: "Dr. Michael Brown",
    specialty: "Neurology",
    description: "AI Expert in brain and nervous system disorders and treatments.",
    imageUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    expertise: ["Headaches", "Seizures", "Cognitive Issues", "Movement Disorders"]
  },
  {
    id: "dr-lisa-gynae",
    name: "Dr. Lisa Martinez",
    specialty: "Gynecology",
    description: "AI Specialist in women's reproductive health and wellness.",
    imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    expertise: ["Reproductive Health", "Menstruation", "Pregnancy", "Menopause"]
  },
  {
    id: "dr-david-ortho",
    name: "Dr. David Lee",
    specialty: "Orthopedics",
    description: "AI Expert in musculoskeletal system, bones, joints and muscles.",
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    expertise: ["Joint Pain", "Fractures", "Sports Injuries", "Arthritis"]
  }
];
