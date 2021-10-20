import { motion } from 'framer-motion';
import { useRef } from 'react';
import './App.scss';
import { MotionCard } from './components/motion-card/motion-card';

const App = () => {
  const constraintsRef = useRef(null);

  return (
    <div className="App">
      <motion.div className="App-Ref" ref={constraintsRef}>
        <MotionCard title="DOUR" constraint={constraintsRef} />
        <MotionCard title="PUKKELPOP" constraint={constraintsRef} />
        <MotionCard title="RAMPAGE" constraint={constraintsRef} />
      </motion.div>
    </div>
  );
}

export default App;
