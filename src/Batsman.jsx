import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const handleSingle = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }

  return (
    <div>
      <h3>Player: Bangla Batsman</h3>
      
      {runs > 50 && <p>You score: 50</p>}
      <h1>Score: {runs}</h1>
      <button onClick={handleSingle}>singles</button>
      <button>Four</button>
    </div>
  );
}
