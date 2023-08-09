import { RouterProvider } from "react-router-dom";

import { AppRouter } from "./AppRouter/AppRouter";

import "./App.css";

function App() {
  const router = AppRouter();

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
