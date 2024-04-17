import React from 'react';


const Header = () => {
  return (
    <nav className="bg-black text-white py-4 px-4 md:px-8">
      <div className="nav-container max-w-5xl mx-auto flex justify-between items-center">
        <div className="logo">
          <a href="/">Gym</a>
        </div>
        <ul className="nav-links hidden md:flex space-x-6">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button className="nav-toggle md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      <div className="text-lg font-bold">NexaVerse</div>
      <div>
        <input
          type="text"
          className="bg-gray-700 text-white px-3 py-2 rounded-md mr-4"
          placeholder="Search transactions, customers, descriptions..."
        />
        <span className="bg-gray-700 text-white px-3 py-2 rounded-md">A</span>
      </div>
    </header>
  );
};



const HeroSection = () => {
  return (
    <div>
      <Header />
      <section className="hero-section bg-black text-white py-24 px-4 md:px-8">
        <div className="hero-container max-w-5xl mx-auto flex items-center justify-between">
          <div className="hero-content max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Free trial session with a trainer</h1>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-md transition-colors duration-300">
              Join now
            </button>
          </div>
          <div className="hero-image w-64 md:w-80 mt-8 md:mt-0">
            <img src="https://via.placeholder.com/150" alt="Hero" className="w-full h-auto rounded-md" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
