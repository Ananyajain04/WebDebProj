import React, { useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import "./gamepage.css";
import LetterBox from "../components/letterbox";
import Navbar from "../components/navbar";

function Gamepage() {
  const swiftWords = [
    "Swift",
    "Speak",
    "Style",
    "Lover",
    "Blank",
    "Vigil",
    "Karma",
    "Dress",
    "Glitz",
    "Rhode",
    "Chord",
    "Tears",
    "Chain",
    "Ghost",
    "Sparks",
    "Bench",
    "Clock",
    "Heart",
    "Cards",
    "Light",
  ];
  const navigate=useNavigate();
  const [randomWord, setRandomWord] = useState("");
  const [correctcount, setCorrectCount] = useState(0); 
  const [activeRow, setActiveRow] = useState(0); // Track active row
  //const [NullCheck, setNullCheck] =useState(0);
  const [inputs, setInputs] = useState(
    Array(6)
      .fill()
      .map(() => Array(5).fill(""))
  );
  const [letterStatus, setLetterStatus] = useState(
    Array(6)
      .fill()
      .map(() => Array(5).fill(null))
  );

  useEffect(() => {
    const selectedWord =
      swiftWords[Math.floor(Math.random() * swiftWords.length)];
    setRandomWord(selectedWord.toUpperCase()); // Store in lowercase
  }, []);
  useEffect(() => {
    //console.log(randomWord); // This will log the updated randomWord
  }, [randomWord]);

  const handleLetterChange = (rowIndex, colIndex) => (newValue) => {
    const newInputs = [...inputs];
    newInputs[rowIndex][colIndex] = newValue.value;
    setInputs(newInputs);
    //console.log(inputs);
  };
  
  const checkWord = () => {
    const currentRow = inputs[activeRow];
    const newLetterStatus = Array(5).fill(null);
    const wordArray = randomWord.split("");
    let count=0;
    let nc=0;
    for (let i = 0; i < 5; i++) {
      if(currentRow[i] === ""){
        nc=1;
      }
    }
    // First pass: Check for correct letters in the correct position
    for (let i = 0; i < 5 && nc==0; i++) {
      if (currentRow[i] === wordArray[i]) {
        newLetterStatus[i] = "correct"; // Mark as correct
        wordArray[i] = null; // Remove matched letter from the word array
        count++;
      }
    }

    // Second pass: Check for correct letters in the wrong position
    for (let i = 0; i < 5 && nc==0; i++) {
      if (
        newLetterStatus[i] !== "correct" &&
        wordArray.includes(currentRow[i])
      ) {
        newLetterStatus[i] = "wrong-position"; // Mark as wrong position
        wordArray[wordArray.indexOf(currentRow[i])] = null; // Remove matched letter from the word array
      } else if (newLetterStatus[i] !== "correct") {
        //console.log(wordArray[i],inputs[activeRow][i]);
        newLetterStatus[i] = "incorrect"; // Mark as incorrect
      }
    }
    const updatedLetterStatus = [...letterStatus]; // Create a copy of the current letterStatus
    updatedLetterStatus[activeRow] = newLetterStatus; // Update the specific row
    setLetterStatus(updatedLetterStatus);
    setCorrectCount(count);
    if (activeRow < 5 && nc==0) {
      // Only increment if we are not at the last row
      console.log("the value of null check is"+nc);
      console.log(inputs[activeRow]);
      setActiveRow(activeRow + 1);
    }
  };
  useEffect(() => {
    console.log(letterStatus); // This will log the updated randomWord
    if(correctcount==5){
      document.getElementById("changeifwon").textContent="Congrats!";
      }
      //console.log(correctcount,"we got it done");
  }, [letterStatus,correctcount])
  return(
    <div>
      <Navbar />
    
    <div id="maingame">
      <fieldset id="fieldgame">
      <h1 id="changeifwon">Swiftie at Test</h1>
      <div id="top">
        <div className="row" id="0">
          <LetterBox
            value={inputs[0][0]}
            className="one"
            disabled={activeRow !== 0}
            onChange={handleLetterChange(0, 0)}
            status={letterStatus[0][0]}
          />
          <LetterBox
            value={inputs[0][1]}
            className="two"
            disabled={activeRow !== 0}
            onChange={handleLetterChange(0, 1)}
            status={letterStatus[0][1]}
          />
          <LetterBox
            value={inputs[0][2]}
            className="three"
            disabled={activeRow !== 0}
            onChange={handleLetterChange(0, 2)}
            status={letterStatus[0][2]}
          />
          <LetterBox
            value={inputs[0][3]}
            className="four"
            disabled={activeRow !== 0}
            onChange={handleLetterChange(0, 3)}
            status={letterStatus[0][3]}
          />
          <LetterBox
            value={inputs[0][4]}
            className="five"
            disabled={activeRow !== 0}
            onChange={handleLetterChange(0, 4)}
            status={letterStatus[0][4]}
          />
        </div>
        <div className="row" id="1">
          <LetterBox
            value={inputs[1][0]}
            className="one"
            disabled={activeRow !== 1}
            onChange={handleLetterChange(1, 0)}
            status={letterStatus[1][0]}
          />
          <LetterBox
            value={inputs[1][1]}
            className="two"
            disabled={activeRow !== 1}
            onChange={handleLetterChange(1, 1)}
            status={letterStatus[1][1]}
          />
          <LetterBox
            value={inputs[1][2]}
            className="three"
            disabled={activeRow !== 1}
            onChange={handleLetterChange(1, 2)}
            status={letterStatus[1][2]}
          />
          <LetterBox
            value={inputs[1][3]}
            className="four"
            disabled={activeRow !== 1}
            onChange={handleLetterChange(1, 3)}
            status={letterStatus[1][3]}
          />
          <LetterBox
            value={inputs[1][4]}
            className="five"
            disabled={activeRow !== 1}
            onChange={handleLetterChange(1, 4)}
            status={letterStatus[1][4]}
          />
        </div>
        <div className="row" id="2">
          <LetterBox
            value={inputs[2][0]}
            className="one"
            disabled={activeRow !== 2}
            onChange={handleLetterChange(2, 0)}
            status={letterStatus[2][0]}
          />
          <LetterBox
            value={inputs[2][1]}
            className="two"
            disabled={activeRow !== 2}
            onChange={handleLetterChange(2, 1)}
            status={letterStatus[2][1]}
          />
          <LetterBox
            value={inputs[2][2]}
            className="three"
            disabled={activeRow !== 2}
            onChange={handleLetterChange(2, 2)}
            status={letterStatus[2][2]}
          />
          <LetterBox
            value={inputs[2][3]}
            className="four"
            disabled={activeRow !== 2}
            onChange={handleLetterChange(2, 3)}
            status={letterStatus[2][3]}
          />
          <LetterBox
            value={inputs[2][4]}
            className="five"
            disabled={activeRow !== 2}
            onChange={handleLetterChange(2, 4)}
            status={letterStatus[2][4]}
          />
        </div>
        <div className="row" id="3">
          <LetterBox
            value={inputs[3][0]}
            className="one"
            disabled={activeRow !== 3}
            onChange={handleLetterChange(3, 0)}
            status={letterStatus[3][0]}
          />
          <LetterBox
            value={inputs[3][1]}
            className="two"
            disabled={activeRow !== 3}
            onChange={handleLetterChange(3, 1)}
            status={letterStatus[3][1]}
          />
          <LetterBox
            value={inputs[3][2]}
            className="three"
            disabled={activeRow !== 3}
            onChange={handleLetterChange(3, 2)}
            status={letterStatus[3][2]}
          />
          <LetterBox
            value={inputs[3][3]}
            className="four"
            disabled={activeRow !== 3}
            onChange={handleLetterChange(3, 3)}
            status={letterStatus[3][3]}
          />
          <LetterBox
            value={inputs[3][4]}
            className="five"
            disabled={activeRow !== 3}
            onChange={handleLetterChange(3, 4)}
            status={letterStatus[3][4]}
          />
        </div>
        <div className="row" id="4">
          <LetterBox
            value={inputs[4][0]}
            className="one"
            disabled={activeRow !== 4}
            onChange={handleLetterChange(4, 0)}
            status={letterStatus[4][0]}
          />
          <LetterBox
            value={inputs[4][1]}
            className="two"
            disabled={activeRow !== 4}
            onChange={handleLetterChange(4, 1)}
            status={letterStatus[4][1]}
          />
          <LetterBox
            value={inputs[4][2]}
            className="three"
            disabled={activeRow !== 4}
            onChange={handleLetterChange(4, 2)}
            status={letterStatus[4][2]}
          />
          <LetterBox
            value={inputs[4][3]}
            className="four"
            disabled={activeRow !== 4}
            onChange={handleLetterChange(4, 3)}
            status={letterStatus[4][3]}
          />
          <LetterBox
            value={inputs[4][4]}
            className="five"
            disabled={activeRow !== 4}
            onChange={handleLetterChange(4, 4)}
            status={letterStatus[4][4]}
          />
        </div>
        <div className="row" id="5">
          <LetterBox
            value={inputs[5][0]}
            className="one"
            disabled={activeRow !== 5}
            onChange={handleLetterChange(5, 0)}
            status={letterStatus[5][0]}
          />
          <LetterBox
            value={inputs[5][1]}
            className="two"
            disabled={activeRow !== 5}
            onChange={handleLetterChange(5, 1)}
            status={letterStatus[5][1]}
          />
          <LetterBox
            value={inputs[5][2]}
            className="three"
            disabled={activeRow !== 5}
            onChange={handleLetterChange(5, 2)}
            status={letterStatus[5][2]}
          />
          <LetterBox
            value={inputs[5][3]}
            className="four"
            disabled={activeRow !== 5}
            onChange={handleLetterChange(5, 3)}
            status={letterStatus[5][3]}
          />
          <LetterBox
            value={inputs[5][4]}
            className="five"
            disabled={activeRow !== 5}
            onChange={handleLetterChange(5, 4)}
            status={letterStatus[5][4]}
          />
        </div>
      </div>
      <div id="bottom">
        <button
          onClick={() => {
            checkWord(); // Check the current row
          }}
          disabled={activeRow > 5} // Disable if we are at the last row
        >
         Submit
        </button>
      </div>
      </fieldset>
    </div>
    </div>
  );
}

export default Gamepage;
