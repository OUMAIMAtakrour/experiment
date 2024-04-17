
import React from 'react';

const TrainersSection = () => {
  return (
    <section className="trainers-section bg-gray-900 text-white py-20 px-4 md:px-8">
      <div className="trainers-container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Trainers staff</h2>
        <div className="trainers-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="trainer-card">
            <img src="https://via.placeholder.com/150" alt="Trainer 1" className="w-full h-60 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold mb-2">Trainer 1</h3>
            <p className="text-gray-400">Certifications</p>
          </div>
          <div className="trainer-card">
            <img src="https://via.placeholder.com/150" alt="Trainer 2" className="w-full h-60 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold mb-2">Trainer 2</h3>
            <p className="text-gray-400">Certifications</p>
          </div>
          <div className="trainer-card">
            <img src="https://via.placeholder.com/150" alt="Trainer 3" className="w-full h-60 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold mb-2">Trainer 3</h3>
            <p className="text-gray-400">Certifications</p>
          </div>
          <div className="trainer-card">
            <img src="https://via.placeholder.com/150" alt="Trainer 4" className="w-full h-60 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold mb-2">Trainer 4</h3>
            <p className="text-gray-400">Certifications</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;