
import React from 'react';

const MembershipSection = () => {
  return (
    <section className="membership-section bg-white py-20 px-4 md:px-8">
      <div className="membership-container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Gym membership</h2>
        <div className="membership-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="membership-card bg-gray-100 rounded-md p-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Basic</h3>
            <p className="text-4xl font-bold mb-4 text-gray-900">$15</p>
            <p className="text-gray-600 mb-6">per month</p>
            <ul className="membership-features text-gray-600 mb-8">
              <li className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Feature 1
              </li>
              <li className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Feature 2
              </li>
              <li className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Feature 3
              </li>
            </ul>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300">
              Sign up
            </button>
          </div>
          <div className="membership-card bg-gray-100 rounded-md p-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Premium</h3>
            <p className="text-4xl font-bold mb-4 text-gray-900">$25</p>
            <p className="text-gray-600 mb-6">per month</p>
            <ul className="membership-features text-gray-600 mb-8">
              <li className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Feature 1
              </li>
              <li className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Feature 2
              </li>
              <li className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Feature 3
              </li>
              <li className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Feature 4
              </li>
            </ul>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300">
              Sign up
            </button>
          </div>
          <div className="membership-card bg-gray-100 rounded-md p-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Elite</h3>
            <p className="text-4xl font-bold mb-4 text-gray-900">$35</p>
            <p className="text-gray-600 mb-6">per month</p>
            <ul className="membership-features text-gray-600 mb-8">
              <li className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Feature 1
              </li>
              <li className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Feature 2
              </li>
              <li className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Feature 3
              </li>
              <li className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Feature 4
              </li>
              <li className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Feature 5
              </li>
            </ul>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;