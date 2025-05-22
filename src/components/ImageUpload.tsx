
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Image, X } from 'lucide-react';
import { toast } from 'sonner';

interface ImageUploadProps {
  onImageSelected: (imageUrl: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelected }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (!file) return;
    
    // Check file type
    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file');
      return;
    }
    
    // Check file size (limit to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image size should be less than 5MB');
      return;
    }
    
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      setPreviewUrl(result);
      onImageSelected(result);
    };
    
    reader.readAsDataURL(file);
  };

  const clearImage = () => {
    setPreviewUrl(null);
  };

  return (
    <div className="flex items-center">
      {previewUrl ? (
        <div className="relative mr-2">
          <img 
            src={previewUrl} 
            alt="Preview" 
            className="h-14 w-14 object-cover rounded-md border border-gray-300" 
          />
          <button 
            onClick={clearImage}
            className="absolute -top-2 -right-2 bg-white rounded-full p-0.5 shadow-md"
          >
            <X size={16} className="text-gray-600" />
          </button>
        </div>
      ) : (
        <label htmlFor="image-upload" className="cursor-pointer">
          <div className="rounded-full p-2 hover:bg-gray-100 transition-colors duration-200">
            <Image size={20} className="text-gray-500" />
          </div>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
      )}
    </div>
  );
};

export default ImageUpload;
