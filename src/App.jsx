import { useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { Menulist } from "./pages/Menulist";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/menu",
      element: <Menulist />,
    },
  ]);
  return element;
}

export default App;
