import React from 'react'
import { Link } from "react-router-dom"

const Play = ({
    setMyChoice,
    score
}) => {

    
    return (
        <div className="play">
            <button><Link to="/game">
                <div onClick={() => setMyChoice("rock")} className="icon icon--rock">
                    Rock
                </div>
            </Link></button><br />
            <button><Link to="/game">
                <div onClick={() => setMyChoice("paper")} className="icon icon--paper">
                    Paper
                </div>
            </Link></button><br />
            <button><Link to="/game">
                <div onClick={() => setMyChoice("scissors")} className="icon icon--scissors">
                    Scissors
                </div>
            </Link></button><br />
            <br />
            Score:{score}
        </div>
    );
};

export default Play;