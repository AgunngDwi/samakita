import { useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Homepage />,
    },
  ]);
  return element;
}

export default App;
