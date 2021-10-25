import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import './App.scss';
import { MotionCard } from './components/motion-card/motion-card';
import { motionCardService } from './components/motion-card/motion-card.service';
import trashCan from '../src/assets/trash-can.png';

const App = () => {
  const constraintsRef = useRef(null);
  const [dogs, setDogs] = useState([]);
  const removedBreeds = JSON.parse(localStorage.getItem("removed-breeds"));

  useEffect(() => {
      motionCardService
        .getAllDogBreeds()
        .then(response => {
          if(response) {
            console.log(response)
            const allBreeds = response.map(({ id, name, image, life_span, temperament, bred_for }) => ({
              id, name, image, life_span, temperament, bred_for,
            }));
            setDogs(randomizeDogs(allBreeds));
          }
          
        })
        .finally(() => console.log("EFFECT DONE: getAllDogBreeds"));         
  }, []);

  

  const randomizeDogs = (dogs) => {
    return dogs.sort(() => 0.5 - Math.random());
  }

  const checkDogs = (dogs) => {
    removedBreeds.forEach(dog => {
      
    })
  };

  return (
    <div className="App">
      <motion.div className="App-Ref" ref={constraintsRef}>
        {dogs.slice(0,3).map(dog => {
          return <MotionCard 
          key={dog.id} 
          title={dog.name} 
          image={dog.image}
          life_span={dog.life_span}
          temperament={dog.temperament}
          bred_for={dog.bred_for}
          constraint={constraintsRef} 
          />
        })}
      </motion.div>
      <img className="trash-can" src={trashCan} alt="trash can"></img>
    </div>
  );
}

export default App;
