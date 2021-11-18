import { useState } from 'react';
import { Button } from './stories/Button';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <p>Welcome to my new App!</p>
      <p>
        <Button
          size="large"
          onClick={() => setCount((count) => count + 1)}
          label={`count is: ${count}`}
        />
      </p>
    </div>
  );
}

export default App;
