import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "./components/main";


function App() {
  return(
    <BrowserRouter>
      <div className="sans-serif">
        <Route path="/" component={Main} />
      </div>
    </BrowserRouter>
  )
}

export default App;