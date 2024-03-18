import React from "react";

const data = [1, 2, 3, 4];

function App() {
  const [arr, arrSet] = React.useState<number[]>(data);
  const [drop, dropSet] = React.useState(-1);
  const drag = React.useRef(-1);
  const draggedOver = React.useRef(-1);

  const handleDrag = () => {
    const newArr = [...arr];
    const initialDrag = newArr.at(drag.current) as number;
    newArr[drag.current] = newArr.at(draggedOver.current) as number;
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
          onDragOver={(e) => {
            dropSet(idx);
            e.preventDefault();
          }}
          onDragLeave={(e) => {
            dropSet(-1);
            e.preventDefault();
          }}
          onDrop={() => dropSet(-1)}
          style={{
            border: `1px solid ${drop === idx ? "black" : "transparent"}`,
          }}
        >
          {a}
        </div>
      ))}
    </>
  );
}

export default App;
