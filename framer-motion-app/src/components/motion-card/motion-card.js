import './motion-card.scss';
import { motion } from "framer-motion"

export const MotionCard = (props) => {
    return (
        <motion.div 
            className="Motion-Card"
            drag
            //dragConstraints={{ left: -100, right: 100, top: 100, bottom: 100 }}
            dragConstraints={props.constraint}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, cursor: 'grabbing' }}
            >
            <h1 className="card-title">{props.title}</h1>
        </motion.div>
    );
}