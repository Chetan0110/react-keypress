# react-keypress
A react wrapper of keypress library (https://github.com/dmauro/Keypress)

## Use and setup

`yarn add react-keypress` or `npm install --save react-keypress`

Import KeyboardShortcut componennt and use it like below -
Provide key shortcuts as combo prop. Upon pressing shortcut, function provided in callback prop would execute

Example component:

```
import KeyboardShortcut from 'react-keypress';

function Example() {
  
  const turnGreen = function() {
    let componentRoot = document.getElementsByClassName("example")[0];
    componentRoot.style.backgroundColor = "green";
  }

  return (
    <div className="example">
      <KeyboardShortcut
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

All the shortcuts which are available for the component can be listed by using withShortcuts HOC.
Sample code is given below-

Create app context:

```
import React from "react";

export const AppContext = React.createContext({
  shortcuts: {},
  addShortcut: () => {}
});
```

Create root app component to mailtain context data:

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
import { useContext } from "react";

import KeyboardShortcut from 'react-keypress';
import { withShortcuts } from "react-keypress";
import { AppContext } from "../context";

const KeyboardShortcutWrapper = withShortcuts(KeyboardShortcut);

function Example(props) {
  const turnGreen = function() {
    let componentRoot = document.getElementsByClassName("example")[0];
    componentRoot.style.backgroundColor = "green";
  }

  const turnYellow = function() {
    let componentRoot = document.getElementsByClassName("example")[0];
    componentRoot.style.backgroundColor = "yellow";
  }

  const { shortcuts } = useContext(AppContext);

  return (
    <div>
      <div className="example">
        <>
            <KeyboardShortcutWrapper 
              combo="shift g"
              callback={turnGreen}
              description="Turns the components background color to green"
            />
            <KeyboardShortcutWrapper
              combo="shift y"
              callback={turnYellow}
              description="Turns the components background color to yellow"
            />
        </>
      </div>
      {
        Object.keys(shortcuts).map((key) => <li>{`${key} : ${shortcuts[key]}`}</li>)
      }
    </div>
  );
}

export default Example;
```

## Run examples locally

```
$ git clone https://github.com/Chetan0110/react-keypress.git
$ cd react-keypress
$ yarn
$ yarn start
```

> Go to [localhost:3000](localhost:3000)

