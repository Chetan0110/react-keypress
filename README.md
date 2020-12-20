# react-keypress
A react wrapper of keypress library (https://github.com/dmauro/Keypress)

## Use and setup

`yarn add react-keypress` or `npm install --save react-keypress`

Import KeyboardShortcut componennt and use it like below -
Provide key shortcuts as combo prop. Upon pressing shortcut, function provided in callback prop would execute

Create Context:
```
import React from "react";

export const AppContext = React.createContext({
  shortcuts: {},
  addShortcut: () => {}
});
```

Create Root Component to maintain context data:

```
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
```

Example component:

```
import KeyboardShortcut from '../components/keyboard-shortcut';
import "../styles/index.css"

const KeyboardShortcutWapper = withShortcuts(KeyboardShortcut);

function Example() {
  
  const turnGreen = function() {
    let componentRoot = document.getElementsByClassName("example")[0];
    componentRoot.style.backgroundColor = "green";
  }

  return (
    <div className="example">
      <KeyboardShortcutWapper
        combo="shift g"
        callback={turnGreen}
        description="Turns the components background color to green"
      />
    </div>
  );
}

export default Example;
```

As per code above, div with classname 'example' will turn into green upon pressing `shift+g`

## Run examples locally

```
$ git clone https://github.com/Chetan0110/react-keypress.git
$ cd react-keypress
$ yarn
$ yarn start
```

> Go to [localhost:3000](localhost:3000)

