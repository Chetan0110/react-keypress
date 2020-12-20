import { useState, useContext } from "react";

import KeyboardShortcut from '../components/keyboard-shortcut';
import "../styles/index.css"
import withShortcuts from "../components/hocs/shortcuts-hoc";
import { AppContext } from "../context";

  
const KeyboardShortcutWrapper = withShortcuts(KeyboardShortcut);


function Example(props) {
  const [isRegistered, setRegistered] = useState(true);

  const turnGreen = function() {
    let componentRoot = document.getElementsByClassName("example")[0];
    componentRoot.style.backgroundColor = "green";
  }

  const turnYellow = function() {
    let componentRoot = document.getElementsByClassName("example")[0];
    componentRoot.style.backgroundColor = "yellow";
  }

  const disableShortcuts = function() {
    setRegistered(false);
  }

  const enableShortcuts = function() {
    setRegistered(true);
  }

 const { shortcuts } = useContext(AppContext);

  return (
    <div>
      <div className="example">
        {
          isRegistered ? <>
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
          </> : <>
          </>
        }
      </div>
      <button className="disable" onClick={disableShortcuts}>
        Disable Shortcuts
      </button>
      <button className="enable" onClick={enableShortcuts}>
        Enable Shortcuts
      </button>
      {
        Object.keys(shortcuts).map((key) => <li>{`${key} : ${shortcuts[key]}`}</li>)
      }
    </div>
  );
}

export default Example;
