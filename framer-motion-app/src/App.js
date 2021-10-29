import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import './App.scss';
import { MotionCard } from './components/motion-card/motion-card';
import { motionCardService } from './components/motion-card/motion-card.service';
import trashCan from '../src/assets/trash-can.png';

const App = () => {
  const constraintsRef = useRef(null);
  const [dogs, setDogs] = useState([]);
  const numberOfCards = 4;

  useEffect(() => {
      motionCardService
        .getAllDogBreeds()
        .then(response => {
          if(response) {
            const allBreeds = response.map(({ id, name, image, life_span, temperament, bred_for }) => ({
              id, name, image, life_span, temperament, bred_for,
            }));
            const removedBreeds = JSON.parse(localStorage.getItem("removed-breeds"));
            setDogs(randomizeDogs(allBreeds));
            if(removedBreeds) {
              setDogs(dogs => dogs.filter(dog => !removedBreeds.includes(dog.id)));
            }
          }
        })
        .finally(() => console.log("EFFECT DONE: getAllDogBreeds"));         
  }, []);

  const checkDogs = () => {
    const removedBreeds = JSON.parse(localStorage.getItem("removed-breeds"));
    setDogs(dogs => dogs.filter(dog => !removedBreeds.includes(dog.id)));
  };

  const randomizeDogs = (dogs) => {
    return dogs.sort(() => 0.5 - Math.random());
  }

  return (
    <div className="App">
      <motion.div className="App-Ref" ref={constraintsRef}>
        <AnimatePresence>
          {dogs.slice(0,numberOfCards).map((dog,index) => (
            <MotionCard key={dog.id} dog={dog} update={checkDogs} numberOfCards={numberOfCards} index={index} constraint={constraintsRef} />
          ))}
        </AnimatePresence>
      </motion.div>
      <img className="trash-can" src={trashCan} alt="trash can"></img>
    </div>
  );
}

export default App;
