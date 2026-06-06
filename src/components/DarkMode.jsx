import { useState } from "react";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <button
        onClick={()=>setDarkMode(!darkMode)}
      >
        Toggle
      </button>

      <div className="dark:bg-black dark:text-white min-h-screen">
        <Home />
      </div>
    </div>
  );
}

export default App;