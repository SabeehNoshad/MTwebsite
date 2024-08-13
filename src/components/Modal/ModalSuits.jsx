import React from 'react';

const ModalSuits = ({ isVisible, onClose, data }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white p-4 bg-opacity-70 rounded-lg shadow-lg max-w-md w-full relative">
        
        <h2 className="text-xl font-bold mb-4 bg-primary/80">{data.title}</h2>
        
        <p className="mb-4">{data.description}</p>
        
        <button 
          onClick={onClose}
          className="bg-red-600 hover:bg-white hover:text-red-700 text-white py-2 px-4 rounded-full">
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalSuits;