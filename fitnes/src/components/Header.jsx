
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
  