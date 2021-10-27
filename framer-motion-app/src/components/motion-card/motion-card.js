import './motion-card.scss';
import { motion } from "framer-motion";
import { useState } from 'react';

const variants = {
    closed: {
        height: 'fit-content'
    },
    open: {
        height: '350px'
    }
};

export const MotionCard = (props) => {
    const [selected, onSelect] = useState(false);
    const [dragged, onDrag] = useState(false);

    const unavailable = <i>unavailable</i>;
    const Content = () => {
        if(selected) {
            return (
                <ul className="ul-content">
                    <img src={props.dog.image.url} alt="dog breed"></img>
                    <li className="life-span"><b>Life span: </b>{props.dog.life_span || unavailable}</li>
                    <li className="temperament"><b>Temperament: </b>{props.dog.temperament || unavailable}</li>
                    <li className="bred-for"><b>Bred for: </b>{props.dog.bred_for || unavailable}</li>
                </ul>
            );
        } else {
            return (
                <ul className="ul-content">
                    <img src={props.dog.image.url} alt="dog breed" hidden></img>
                    <li className="life-span"><b>Life span: </b>{props.dog.life_span || unavailable}</li>
                    <li className="temperament"><b>Temperament: </b>{props.dog.temperament || unavailable}</li>
                    <li className="bred-for"><b>Bred for: </b>{props.dog.bred_for || unavailable}</li>
                </ul>                
            );
        }
    };

    const checkDragEnd = (event, info) => {
        if(info.point.x >= window.innerWidth - 200 && info.point.y >= window.innerHeight - 200) {
            let removedBreeds = [];
            if(localStorage.getItem("removed-breeds")) {
                removedBreeds = JSON.parse(localStorage.getItem("removed-breeds"));
            }
            removedBreeds.push(props.dog.id);
            localStorage.setItem("removed-breeds", JSON.stringify(removedBreeds));
            props.update();
            console.log("%cTRASH!", "color: red");
        }
    }

    return (
        <motion.div 
            className="Motion-Card"
            onMouseDown={() => onDrag(false)}
            onMouseMove={() => onDrag(true)}
            onMouseUp={() => onSelect(dragged ? selected : !selected)}
            variants={variants}
            animate={selected ? 'open' : 'closed'}
            drag
            dragConstraints={props.constraint}
            onDragEnd={checkDragEnd}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, cursor: 'grabbing' }}
            >
            <h1 className="card-title">{props.dog.name}</h1>
            <div className="card-content">
                <Content />
            </div>
        </motion.div>
    );
}