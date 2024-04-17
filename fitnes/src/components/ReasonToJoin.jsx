import React from 'react';

const ReasonsToJoinSection = () => {
  return (
    <section className="reasons-to-join-section bg-white py-20 px-4 md:px-8">
      <div className="reasons-container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Reasons to join</h2>
        <div className="reasons-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="reason-card bg-gray-100 rounded-md p-6">
            <div className="reason-icon mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Reason 1</h3>
            <p className="text-gray-600">Description of Reason 1</p>
          </div>
          <div className="reason-card bg-gray-100 rounded-md p-6">
            <div className="reason-icon mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Reason 2</h3>
            <p className="text-gray-600">Description of Reason 2</p>
          </div>
          <div className="reason-card bg-gray-100 rounded-md p-6">
            <div className="reason-icon mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Reason 3</h3>
            <p className="text-gray-600">Description of Reason 3</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReasonsToJoinSection;