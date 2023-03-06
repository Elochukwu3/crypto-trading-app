
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { routerElement } from "./asset/route/routeElem";
import Account from "./components/Account";
import CreateAccount from "./components/CreateAccount";
import IntroSection from "./components/IntroSection";

function App() {

  const router = createBrowserRouter(routerElement);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
