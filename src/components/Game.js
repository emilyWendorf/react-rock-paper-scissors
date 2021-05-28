import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
const Game = ({
    myChoice, score, setScore
}) => {

    const [house, setHouse] = useState("");
    const [playerWin, setPlayerWin] = useState("");

    const newHousePick=()=>{
        const choices=["rock","paper","scissors"];
        setHouse(choices[Math.floor(Math.random()*3)])
    }

    useEffect(() => {
        newHousePick();
    }, [])

    const Result=()=>{
        if(myChoice==="rock" && house==="scissors"){
            setPlayerWin("win");
            setScore(score+1);
        }else if(myChoice==="rock" && house==="paper"){
            setPlayerWin("lose");
            setScore(score-1);
        }else if(myChoice==="scissors" && house==="paper"){
            setPlayerWin("win");
            setScore(score+1);
        }else if(myChoice==="scissors" && house==="rock"){
            setPlayerWin("lose");
            setScore(score-1);
        }else if(myChoice==="paper" && house==="rock"){
            setPlayerWin("win");
            setScore(score+1);
        }else if(myChoice==="paper" && house==="scissors"){
            setPlayerWin("lose");
            setScore(score-1);
        }else{
            setPlayerWin("draw");
        }
    }

    useEffect(() => {
        Result();
    }, [house]);


    return (
        <div className="game">
            <span>You: </span>{myChoice} <br />
            <span>Computer: </span>{house}

            
            {playerWin=="win" && <h2>You Win!</h2>}
            {playerWin=="lose" && <h2>You Lose!</h2>}
            {playerWin=="draw" && <h2>Draw!</h2>}
            
            <div className="replay">
                <button><Link to="/" onClick={()=>setHouse()}>
                    <span className="replay-btn">Play Again</span>
                </Link></button><br /><br />
                Score:{score}
            </div>
        </div>
    );
};

export default Game;
