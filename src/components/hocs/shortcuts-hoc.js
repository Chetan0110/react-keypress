import React, { useContext } from 'react';

import { AppContext } from "../../context"


export default function withShortcuts(Component) {

  return function KeyboardShortcutWapper(props) {
    const { shortcuts, addShortcut } = useContext(AppContext);
    return (     
      <Component 
        shortcuts={shortcuts}
        addShortcut={addShortcut}
        combo={props.combo}
        callback={props.callback}
        description={props.description}
      />
    )
  }
}