import { useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { Menulist } from "./pages/Menulist";
import Login from "./component/Customer/Login";

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
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return element;
}

export default App;
