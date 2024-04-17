import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="max-w-md">
          <h2 className="text-2xl font-bold mb-4">About us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            diam a mauris facilisis, vel faucibus eros commodo.
          </p>
        </div>
        <div>
          <img src="gym-image.jpg" alt="Gym" className="max-w-sm" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;