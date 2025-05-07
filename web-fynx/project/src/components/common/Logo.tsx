import React from 'react';
import { Shield } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Shield className="w-8 h-8 text-blue-500 mr-2" />
      <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
        Fynx
      </span>
    </div>
  );
};

export default Logo;