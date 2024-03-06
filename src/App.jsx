import { useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { Menulist } from "./pages/Menulist";
import Login from "./component/Customer/Login";
import Register from "./component/Customer/Register";

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
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return element;
}

export default App;
