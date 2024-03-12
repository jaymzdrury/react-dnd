import React from "react";

const data = [1, 2, 3, 4];

function App() {
  const [arr, arrSet] = React.useState<number[]>(data);
  const drag = React.useRef(0);
  const draggedOver = React.useRef(0);

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
          onDragOver={(e) => e.preventDefault()}
        >
          {a}
        </div>
      ))}
    </>
  );
}

export default App;
