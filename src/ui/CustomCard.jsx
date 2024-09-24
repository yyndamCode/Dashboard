import React from 'react'


export const CustomCard = ({ children, className }) => {
  return (
    <div
      className={`relative  border shadow-lg rounded-md  ${className}`}
    >
      {children}
    </div>
  );
};
