import React, { useState } from "react";

const Accordian = () => {
  const [state, setState] = useState(-1);

  const data = [
    { question: "Question 1", answer: "Answer 1" },
    { question: "Question 2", answer: "Answer 2" },
    { question: "Question 3", answer: "Answer 3" },
  ];

  return (
    <div>
      <h2>Accordion</h2>

      {data.map((item, index) => (
        <div key={index}>
          <button onClick={() => setState(index)}> {item.question} </button>

          {state === index && <p>{item.answer}</p>} 
          
          </div>
      ))}
    </div>
  );
};

export default Accordian;