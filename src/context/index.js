import React from "react";

export const AppContext = React.createContext({
  shortcuts: {},
  addShortcut: () => {}
});