import React from 'react';

interface CardContentProps {
  children: React.ReactNode;
}

const CardContent: React.FC<CardContentProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default CardContent;