import React, { useState } from "react";
import Example from "./examples";
import { AppContext } from "./context";

function App() {
  const [shortcuts, addShortcut] = useState({});
  
  return (
    <div>
      <AppContext.Provider value={{
        shortcuts,
        addShortcut
      }}>
        <Example />
       </AppContext.Provider>
    </div>
  );
}

export default App;
