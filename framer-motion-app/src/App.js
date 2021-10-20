import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import './App.scss';
import { MotionCard } from './components/motion-card/motion-card';
import { motionCardService } from './components/motion-card/motion-card.service'; 

const App = () => {
  const constraintsRef = useRef(null);
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
      motionCardService
        .getAllDogBreeds()
        .then(response => {
          if(response) {
            console.log(response)
            const allBreeds = response.map(({ id, name, origin, life_span, temperament, bred_for }) => ({
              id, name, origin, life_span, temperament, bred_for,
            }));
            setDogs(randomizeDogs(allBreeds));
          }
          
        })
        .finally(() => console.log("EFFECT DONE: getAllDogBreeds"));         
  }, []);

  const randomizeDogs = (dogs) => {
    return dogs.sort(() => 0.5 - Math.random());
  }

  return (
    <div className="App">
      <motion.div className="App-Ref" ref={constraintsRef}>
        {dogs.slice(0,3).map(dog => {
          return <MotionCard key={dog.id} title={dog.name} constraint={constraintsRef} />
        })}
      </motion.div>
    </div>
  );
}

export default App;
