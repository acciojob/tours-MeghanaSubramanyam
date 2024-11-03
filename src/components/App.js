import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import "./styles/.App.js"

const url = 'https://api.example.com/tours'; // Replace with actual API URL

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter(tour => tour.id !== id));
  };

  if (loading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <div className="no-tours">
        <h2>No tours left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Our Tours</h1>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
