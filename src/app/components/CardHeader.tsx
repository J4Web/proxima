import React from 'react';

interface CardHeaderProps {
  children: React.ReactNode;
}

const CardHeader: React.FC<CardHeaderProps> = ({ children }) => {
  return (
    <div className="border-b pb-2 mb-4">
      {children}
    </div>
  );
};

export default CardHeader;