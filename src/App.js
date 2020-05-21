import React from 'react';
import { useHistory } from 'react-router';

function App() {
  const { push } = useHistory()

  const generateMusic = async () => {
    push('/')
  }

  return (
    <div className="App">
      text
      <button onClick={generateMusic}>generate music</button>
    </div>
  );
}

export default App;
