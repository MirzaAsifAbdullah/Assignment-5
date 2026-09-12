import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnologyGrid from './components/TechnologyGrid';
import technologyIcons from './components/technologyIcons';
import Footer from './components/Footer';

function App() {
 

  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    fetch('/technologies.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load technologies');
        }

        return response.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading technologies:', error);
        setLoading(false);

        toast.error('Failed to load technologies.');
      });
  }, []);



  const handleAdd = (technology) => {
    const alreadyAdded = selectedStack.some(
      (item) => item.id === technology.id
    );

    // Prevent duplicate
    if (alreadyAdded) {
      toast.warning(
        `${technology.name} is already in your stack.`
      );

      return;
    }

    // Add technology
  setSelectedStack((previousStack) => [
  ...previousStack,
  technology,
]);

    toast.success(
      `${technology.name} added to your stack!`
    );
  };

  

  const handleRemove = (id) => {
    const technology = selectedStack.find(
      (item) => item.id === id
    );

    setSelectedStack((previousStack) =>
      previousStack.filter(
        (item) => item.id !== id
      )
    );

    if (technology) {
      toast.info(
        `${technology.name} removed from your stack.`
      );
    }
  };


  const handleRemoveAll = () => {
    if (selectedStack.length === 0) {
      return;
    }

    setSelectedStack([]);

    toast.info(
      'All technologies removed from your stack.'
    );
  };



  return (
    <div className="app">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Technologies */}
      {loading ? (
        <div className="loading-container">
          <div className="loader"></div>

          <p>
            Loading technologies...
          </p>
        </div>
      ) : (
        <TechnologyGrid
          technologies={technologies}
          selectedStack={selectedStack}
          onAdd={handleAdd}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      )}

      {/* Toast Notifications */}
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
      <Footer />

    </div>
  );
}

export default App;