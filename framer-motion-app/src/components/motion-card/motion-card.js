import './motion-card.scss';
import { motion } from "framer-motion";
import { useState } from 'react';

const variants = {
    closed: {
        height: '150px'
    },
    open: {
        height: '250px'
    }
};

export const MotionCard = (props) => {
    const [selected, onSelect] = useState(false);
    const [dragged, onDrag] = useState(false);

    return (
        <motion.div 
            className="Motion-Card"
            onMouseDown={() => onDrag(false)}
            onMouseMove={() => onDrag(true)}
            onMouseUp={() => onSelect(dragged ? selected : !selected)}
            variants={variants}
            animate={selected ? 'open' : 'closed'}
            drag
            //dragConstraints={{ left: -100, right: 100, top: 100, bottom: 100 }}
            dragConstraints={props.constraint}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, cursor: 'grabbing' }}
            >
            <h1 className="card-title">{props.title}</h1>
            <div className="card-content">
                
            </div>
        </motion.div>
    );
}