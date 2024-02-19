import React from "react";

const data = [1, 2, 3, 4];

function App() {
  const [arr, arrSet] = React.useState(data);
  const drag = React.useRef(0);
  const draggedOver = React.useRef(0);
  const handleDrag = () => {
    const newArr = [...arr];
    const initialDrag = newArr[drag.current];
    newArr[drag.current] = newArr[draggedOver.current];
    newArr[draggedOver.current] = initialDrag;
    arrSet(newArr);
  };
  return (
    <>
      {arr.map((a, idx) => (
        <div
          key={idx}
          draggable
          onDragStart={() => (drag.current = idx)}
          onDragEnter={() => (draggedOver.current = idx)}
          onDragEnd={handleDrag}
          onDragOver={(e) => e.preventDefault()}
        >
          {a}
        </div>
      ))}
    </>
  );
}

export default App;
