import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProgressPage = () => {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await axios.get('/api/progress');
        setProgress(response.data.data);
      } catch (error) {
        console.error('Error fetching progress:', error);
      }
    };

    fetchProgress();
  }, []);

  return (
    <div>
      <h1>Your Progress</h1>
      {progress.length > 0 ? (
        <ul>
          {progress.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>Status: {item.status}</p>
              <p>Completion: {item.completion}%</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProgressPage;